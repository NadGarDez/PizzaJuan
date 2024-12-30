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
const payMethodSlicer = createSlice(
    {
        name : "payMethodSlicer",
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

export const {startRequest, finishRequestSuccessfully, finishRequestWithError,finishNRequestSuccessfully, startNRequest, clearReducer } = payMethodSlicer.actions;

//selector export


const voidPayMethod:any[] = []

export const payMethodSlicerSelector = (state:RootState): any[] => {
    return state.payMethod.responseObject?.data.results ?? voidPayMethod
}
export const payMethodSlicerReducersStaus = (state:RootState) => state.payMethod.reducerStatus;
export const payMethodSlicerGeneralReducerSelector = (state:RootState)=> state.payMethod;
export const payMethodSlicerErrorSelector = (state:RootState)=> state.payMethod.responseObject?.statusText
export const payMethodSlicerNextSelector = (state:RootState)=>state.payMethod.responseObject?.data.next || null; 

// reducer export
export default payMethodSlicer.reducer;
