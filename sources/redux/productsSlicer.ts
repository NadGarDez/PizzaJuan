import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { type defaultApiResponse } from "../types/api/defaultTypes";
import { baseProduct } from "../types/api/productTypes";

type CurrentFilter = {
    category: string | undefined;
    q: string | undefined;
};

type FilterPayload = {
    category?: string;
    q?: string;
};

interface data {
    results: any[],
    count:number,
    next: string | null,
    previeus: string 
}
 

interface requestStatus  {
    reducerStatus: 'INITIAL' | 'LOADING' | 'N_LOADING' | 'SUCCESSED' | 'ERROR',
    responseObject: defaultApiResponse<data> | null,
    currentFilter: CurrentFilter, 
} 

const initialState: requestStatus = {
    reducerStatus: 'INITIAL',
    responseObject: null,
    currentFilter: {
        category: undefined,
        q: undefined,
    },
}

const productsSlice = createSlice(
    {
        name : "products",
        initialState: initialState,
        reducers : {
            setFiltersAndStartRequest: (state, action: PayloadAction<FilterPayload>) => {
                state.currentFilter.category = action.payload.category;
                state.currentFilter.q = action.payload.q;
            },
            
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

export const {
    updateProductItemInList, 
    startRequest, 
    finishRequestSuccessfully, 
    finishRequestWithError, 
    startNRequest, 
    finishNRequestSuccessfully,
    setFiltersAndStartRequest 
} = productsSlice.actions;

export const productsSelector = (state:RootState): any[] | undefined  => {
    return state.products.responseObject?.data.results
}
export const productReducersStaus = (state:RootState) => state.products.reducerStatus;
export const productsErrorTextSelector  = (state:RootState) => state.products.responseObject?.statusText
export const productGeneralReducerSelector = (state:RootState)=> state.products;
export const productNextSelector = (state:RootState)=>state.products.responseObject?.data.next || null; 

export const currentFilterSelector = (state:RootState) => state.products.currentFilter;
export const currentCategorySelector = (state:RootState) => state.products.currentFilter.category;
export const currentQSelector = (state:RootState) => state.products.currentFilter.q;


export default productsSlice.reducer;