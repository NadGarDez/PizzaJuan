import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { baseProduct } from "../types/api/productTypes";

// state type

interface reducerType {
    product : baseProduct | null
}

//initial state
const initialState:reducerType = {
    product : null
}

//slice
const activeProductSlice = createSlice(
    {
        name : "activeProduct",
        initialState: initialState,
        reducers : {
            setActiveProduct: (state, action:PayloadAction<baseProduct>) => {
                state.product = action.payload
            },
            resetActiveProduct:(state)=>{
                state.product = null
            },
        },
    }
);

//actions export

export const {setActiveProduct, resetActiveProduct } = activeProductSlice.actions;

//selector export

export const activeProductSelector = (state:RootState)=> state.activeProduct.product;

// reducer export
export default activeProductSlice.reducer;