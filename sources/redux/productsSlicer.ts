import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { type defaultApiResponse } from "../types/api/defaultTypes";
import { baseProduct } from "../types/api/productTypes";

// state type

interface data {
    results: any[],
    count:number,
    next: string | null,
    previeus: string 
}
 

interface requestStatus  {
    reducerStatus: 'INITIAL' | 'LOADING' | 'N_LOADING' | 'SUCCESSED' | 'ERROR',
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
            startNRequest: (state) => {
                state.reducerStatus = 'N_LOADING'
            },
            finishRequestSuccessfully:(state, action: PayloadAction<defaultApiResponse<data>>)=>{
                state.reducerStatus = 'SUCCESSED'
                state.responseObject = action.payload
            },
            finishNRequestSuccessfully: (state, action: PayloadAction<defaultApiResponse<data>>)=>{
                state.reducerStatus = 'SUCCESSED'
                const prevResults = state.responseObject?.data.results || [];
                const results = [...prevResults, ...action.payload.data.results]
                state.responseObject = {
                    ...action.payload,
                    data: {
                        ...action.payload.data,
                        results
                    }
                }
            },
            finishRequestWithError: (state, action: PayloadAction<defaultApiResponse<data> | undefined>) => {
                state.reducerStatus = 'ERROR',
                state.responseObject = action.payload || null
            },
            updateProductItemInList: (
                state, 
                action:PayloadAction<{
                    item: baseProduct,
                    id:number
                }>
            ) => {
                if(state.responseObject) {

                    const currentList = [...state.responseObject.data.results];
                    const index = currentList.findIndex((prod)=> prod.pk === action.payload.id);
                    if(index === -1) return;
                    currentList[index] = action.payload.item;
                    state.responseObject.data.results = currentList;
                }
            }   

        },
    }
);

//actions export

export const {updateProductItemInList, startRequest, finishRequestSuccessfully, finishRequestWithError, startNRequest, finishNRequestSuccessfully} = productsSlice.actions;

//selector export

export const productsSelector = (state:RootState): any[] | undefined  => {
    return state.products.responseObject?.data.results
}
export const productReducersStaus = (state:RootState) => state.products.reducerStatus;
export const productsErrorTextSelector  = (state:RootState) => state.products.responseObject?.statusText
export const productGeneralReducerSelector = (state:RootState)=> state.products;
export const productNextSelector = (state:RootState)=>state.products.responseObject?.data.next || null; 

// reducer export
export default productsSlice.reducer;