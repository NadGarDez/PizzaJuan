import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { baseProduct, shoppingCarItemType } from "../types/api/productTypes";

// state type


interface shoppingCartType {
    products: Record<string,shoppingCarItemType>,
    totals:Record<string, number | string>,
}
 

//initial state
const initialState: shoppingCartType = {
   products: {

   },
   totals: {

   }
}

//slice
const shoppingCardSlice = createSlice(
    {
        name : "soppingCard",
        initialState: initialState,
        reducers : {
            setProduct: (
                state, 
                action:PayloadAction<{
                    item: shoppingCarItemType,
                    key:string
                }>
            ) => {
                state.products[action.payload.key] = action.payload.item;
            },
            incrementItem: (
                state, 
                action:PayloadAction<string>
            )=> {
                const oldAmount = state.products[action.payload].numberOfItems;

                state.products[action.payload].numberOfItems = oldAmount + 1;
            },
            decrementItem:(
                state, 
                action:PayloadAction<string>
            )=> {
                const oldAmount = state.products[action.payload].numberOfItems;

                state.products[action.payload].numberOfItems = oldAmount > 0 ? oldAmount - 1 : 0;
            },
            deleteItem:(
                state, 
                action:PayloadAction<string>
            )=> {
                delete state.products[action.payload];
            },
            setNumberOfItems: (
                state, 
                action:PayloadAction<{
                    numberOfItems: number,
                    key:string
                }>
            )=> {
                state.products[action.payload.key].numberOfItems = action.payload.numberOfItems;
            }

        },
    }
);

//actions export

export const {setProduct, incrementItem, decrementItem, deleteItem, setNumberOfItems} = shoppingCardSlice.actions;

//selector export

export const shoppingCardSelector = (state:RootState)  => state.shoppingCard;

// reducer export
export default shoppingCardSlice.reducer;