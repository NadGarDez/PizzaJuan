import { configureStore } from "@reduxjs/toolkit";
import SessionReducer from "./SessionReducer";
import ModalFormReducer from "./ModalFormReducer";


export const store = configureStore({
    reducer:{
        session:SessionReducer,
        modalForm:ModalFormReducer
    }
})
