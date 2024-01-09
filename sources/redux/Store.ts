import { configureStore } from "@reduxjs/toolkit";
import SessionReducer from "./SessionReducer";


export const store = configureStore({
    reducer:{
        session:SessionReducer
    }
})
