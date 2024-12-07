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
            }
        },
    }
);

//actions export

export const {startRequest, finishRequestSuccessfully, finishRequestWithError,finishNRequestSuccessfully, startNRequest } = deliveryLocationSlicer.actions;

//selector export

export const deliveryLocationSelector = (state:RootState): any[] | undefined => {
    return state.deliveryLocation.responseObject?.data.results
}
export const deliveryLocationReducersStaus = (state:RootState) => state.deliveryLocation.reducerStatus;
export const deliveryLocationGeneralReducerSelector = (state:RootState)=> state.deliveryLocation;
export const deliveryLocationErrorSelector = (state:RootState)=> state.deliveryLocation.responseObject?.statusText
export const deliveryNextSelector = (state:RootState)=>state.deliveryLocation.responseObject?.data.next || null; 

// reducer export
export default deliveryLocationSlicer.reducer;
