import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { type defaultApiResponse } from "../types/api/productTypes";

// state type

interface data {
    results: any[],
    count:number,
    next: string | null,
    previeus: string 
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
const productsSlice = createSlice(
    {
        name : "products",
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

export const {startRequest, finishRequestSuccessfully, finishRequestWithError} = productsSlice.actions;

//selector export

export const productsSelector = (state:RootState): any[] | undefined  => {
    return state.products.responseObject?.data.results
}
export const productReducersStaus = (state:RootState) => state.products.reducerStatus;
export const productsErrorTextSelector  = (state:RootState) => state.products.responseObject?.statusText
export const productGeneralReducerSelector = (state:RootState)=> state.products;

// reducer export
export default productsSlice.reducer;