import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { sessionTokenSelector } from "../redux/SessionReducer";
import { getProductList } from "../utils/apiRequests";
import { defaultApiResponse } from "../types/api/productTypes";
import { finishRequestSuccessfully, finishRequestWithError } from "../redux/productsReducer";

function* requestProductSagas(action: PayloadAction<string>) {
   const token: null | string = yield select(sessionTokenSelector);

   try {
      if(token!==null){
        const result: defaultApiResponse = yield call(getProductList,'', token);
        if(result.status !== 200){
            yield put(finishRequestWithError(result))
        } else {
         yield put(finishRequestSuccessfully(result))
        }
      }else {
         yield put(finishRequestWithError())
      }
   } catch (error) {
      yield put(finishRequestWithError())
   }
   
 }


export function* requestProductWatcher():any {
   yield takeEvery('REQUEST_PRODUCTS', requestProductSagas)
}

