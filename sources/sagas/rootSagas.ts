import { all, takeEvery } from "redux-saga/effects";
import { type PayloadAction } from "@reduxjs/toolkit";
import { getProductList } from "../utils/apiRequests";
import { requestProductWatcher } from "./productSagas";
import { categoryRequestWatcher } from "./categorySagas";

export function* rootSagas() {
    yield all([
        requestProductWatcher(),
        categoryRequestWatcher()
    ])
}