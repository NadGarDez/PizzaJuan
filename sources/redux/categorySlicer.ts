import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { type defaultApiResponse } from "../types/api/productTypes";

// state type

interface data {
    results: any[],
    count?:number,
    next?: string,
    prev?: string
}

interface requestStatus  {
    reducerStatus: 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR',
    responseObject: defaultApiResponse<data> | null
} 

//initial state
const initialState: requestStatus = {
    reducerStatus: 'INITIAL',
    responseObject: null
}

//slice
const categorySlice = createSlice(
    {
        name : "category",
        initialState: initialState,
        reducers : {
            startRequest: (state) => {
                state.reducerStatus = 'LOADING'
            },
            finishRequestSuccessfully:(state, action: PayloadAction<defaultApiResponse<data>>)=>{
                state.reducerStatus = 'SUCCESS'
                state.responseObject = action.payload
            },
            finishRequestWithError: (state, action: PayloadAction<defaultApiResponse<data> | undefined>) => {
                state.reducerStatus = 'ERROR',
                state.responseObject = action.payload || null
            }
        },
    }
);

//actions export

export const {startRequest, finishRequestSuccessfully, finishRequestWithError} = categorySlice.actions;

//selector export

export const categorySelector = (state:RootState): any[] | undefined => {
    return state.category.responseObject?.data.results
}
export const categoryReducersStaus = (state:RootState) => state.category.reducerStatus;
export const categoryGeneralReducerSelector = (state:RootState)=> state.category;
export const categoriesErrorSelector = (state:RootState)=> state.category.responseObject?.statusText

// reducer export
export default categorySlice.reducer;