import { configureStore } from "@reduxjs/toolkit";
import SessionReducer from "./SessionReducer";
import ModalFormReducer from "./ModalFormReducer";
import ProductsReducer from "./productsReducer";
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from "../sagas/rootSagas";


const middleware = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        session:SessionReducer,
        products:ProductsReducer,
        modalForm:ModalFormReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(middleware)
})

middleware.run(
    rootSagas
)