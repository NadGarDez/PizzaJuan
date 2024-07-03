import { configureStore } from "@reduxjs/toolkit";
import SessionSlicer from "./SessionReducer";
import ModalFormReducer from "./ModalFormReducer";
import ProductsSlicer from "./productsSlicer";
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from "../sagas/rootSagas";
import categorySlicer from "./categorySlicer";
import activeProductSlice from "./activeProductSlice";


const middleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        session:SessionSlicer,
        products:ProductsSlicer,
        modalForm:ModalFormReducer,
        category: categorySlicer,
        activeProduct: activeProductSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(middleware)
})

middleware.run(
    rootSagas
)