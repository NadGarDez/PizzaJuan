import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { baseProduct } from "../types/api/productTypes";

// state type

interface reducerType {
    product : baseProduct | null,
    activeVariant:number
}

//initial state
const initialState:reducerType = {
    product : null,
    activeVariant: 0
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
            setActiveVariant: (state, action:PayloadAction<number>)=> {
                state.activeVariant = action.payload
            }   
        },
    }
);

//actions export

export const {setActiveProduct, resetActiveProduct, setActiveVariant } = activeProductSlice.actions;

//selector export

export const activeProductSelector = (state:RootState)=> state.activeProduct.product;
export const activeVariantSeelector = (state:RootState)=> state.activeProduct.activeVariant;

// reducer export
export default activeProductSlice.reducer;