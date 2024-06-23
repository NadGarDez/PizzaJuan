import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { baseProduct, type defaultApiResponse } from "../types/api/productTypes";

// state type


interface requestStatus  {
    reducerStatus: 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR',
    responseObject: defaultApiResponse | null
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
            finishRequestSuccessfully:(state, action: PayloadAction<defaultApiResponse>)=>{
                state.reducerStatus = 'SUCCESS'
                state.responseObject = action.payload
            },
            finishRequestWithError: (state, action: PayloadAction<defaultApiResponse | undefined>) => {
                state.reducerStatus = 'ERROR',
                state.responseObject = action.payload || null
            }
        },
    }
);

//actions export

export const {startRequest, finishRequestSuccessfully, finishRequestWithError} = productsSlice.actions;

//selector export

export const productsSelector = (state:RootState): any[] => {
    return state.products.responseObject?.data.results
}
export const productReducersStaus = (state:RootState) => state.products.reducerStatus;
export const productGeneralReducerSelector = (state:RootState)=> state.products;

// reducer export
export default productsSlice.reducer;