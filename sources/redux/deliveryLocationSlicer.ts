import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { type defaultApiResponse } from "../types/api/defaultTypes";

// state type

interface data {
    results: any[],
    count?:number,
    next?: string,
    prev?: string
}

interface requestStatus  {
    reducerStatus: 'INITIAL' | 'LOADING' | 'SUCCESSED' | 'ERROR' | 'N_LOADING',
    responseObject: defaultApiResponse<data> | null
} 

//initial state
const initialState: requestStatus = {
    reducerStatus: 'INITIAL',
    responseObject: null
}

//slice
const deliveryLocationSlicer = createSlice(
    {
        name : "deliveryLocation",
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
            clearReducer: (state, action) => {
                state = initialState
            }
        },
    }
);

//actions export

export const {startRequest, finishRequestSuccessfully, finishRequestWithError,finishNRequestSuccessfully, startNRequest, clearReducer } = deliveryLocationSlicer.actions;

//selector export

const voidDelivery:any[] = []

export const deliveryLocationSelector = (state:RootState): any[] => {
    return state.deliveryLocation.responseObject?.data.results ?? voidDelivery
}
export const deliveryLocationReducersStaus = (state:RootState) => state.deliveryLocation.reducerStatus;
export const deliveryLocationGeneralReducerSelector = (state:RootState)=> state.deliveryLocation;
export const deliveryLocationErrorSelector = (state:RootState)=> state.deliveryLocation.responseObject?.statusText
export const deliveryNextSelector = (state:RootState)=>state.deliveryLocation.responseObject?.data.next || null; 

// reducer export
export default deliveryLocationSlicer.reducer;
