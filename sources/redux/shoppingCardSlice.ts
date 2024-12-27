import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { shoppingCarItemType } from "../types/api/productTypes";
import { ShoppingCartType, Totals } from "../types/api/deliveryLocation";

// state type



//initial state
const initialState: ShoppingCartType = {
   products: {
   },
   totals: {
        total:0,
        info: {}
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
            },
            setTotals:(
                state,
                action:PayloadAction<Totals>
            )=> {
                state.totals = action.payload;
            }

        },
    }
);

//actions export

export const {setProduct, incrementItem, decrementItem, deleteItem, setNumberOfItems, setTotals} = shoppingCardSlice.actions;

//selector export

export const shoppingCardSelector = (state:RootState)  => state.shoppingCar;
export const totalsSelector = (state:RootState)=> state.shoppingCar.totals

// reducer export
export default shoppingCardSlice.reducer;