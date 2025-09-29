import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { sessionTokenSelector } from "../redux/SessionReducer";
import { getNext, getProductList } from "../utils/apiRequests";
import { defaultApiResponse } from "../types/api/defaultTypes";
import { finishRequestSuccessfully, finishRequestWithError, productNextSelector, startRequest, startNRequest, finishNRequestSuccessfully, setFiltersAndStartRequest } from "../redux/productsSlicer";

interface data {
   results: any[],
   count:number,
   next: string,
   previeus: string
}

type FilterPayload = {
    category?: string; 
    q?: string;       
};

function* requestProductSagas(action: PayloadAction<FilterPayload>) {
   const token: null | string = yield select(sessionTokenSelector);
   const currentFilter:FilterPayload = yield select((state:any) => state.products.currentFilter);
   const combinedFilter = {...currentFilter, ...action.payload};
   yield put(setFiltersAndStartRequest(combinedFilter));
   try {
      if(token!==null){
         yield put(startRequest())
         const result: defaultApiResponse<data> = yield call(getProductList,combinedFilter, token);
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

 function* loadMore() {
   const next: string | null = yield select(productNextSelector);
   if(next === null) return;
   const token: null | string = yield select(sessionTokenSelector);
   try {
      if(token !== null){
         yield put(startNRequest());
         const result: defaultApiResponse<data> = yield call(getNext, token, next);
         if(result.status !== 200){
            yield put(finishRequestWithError(result))
         } else {
            yield put(finishNRequestSuccessfully(result))
         }
      }else {
         yield put(finishRequestWithError())
      }
   } catch (error) {
      yield put(finishRequestWithError())
   }
}

export function* requestProductWatcher():any {
   yield takeEvery('REQUEST_PRODUCTS', requestProductSagas),
   yield takeEvery('N_REQUEST_PRODUCT', loadMore)
}

