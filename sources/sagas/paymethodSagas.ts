import { createAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { sessionTokenSelector } from "../redux/SessionReducer";
import { getNext, getResourceList } from "../utils/apiRequests";
import { defaultApiResponse } from "../types/api/defaultTypes";
import { finishRequestSuccessfully, finishRequestWithError, payMethodSlicerNextSelector, startRequest, startNRequest, finishNRequestSuccessfully } from "../redux/payMethodSlicer";

interface data {
   results: any[],
   count:number,
   next: string,
   previeus: string
}

function* requestPayMethodSagas() {
   const token: null | string = yield select(sessionTokenSelector);
   try {
      if(token!==null){
         yield put(startRequest())
         const result: defaultApiResponse<data> = yield call(getResourceList, token, `getPayMethods`);
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
   const next: string | null = yield select(payMethodSlicerNextSelector);
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

export function* requestPayMethodWatcher():any {
   yield takeEvery('REQUEST_PAY_METHOD', requestPayMethodSagas),
   yield takeEvery('N_REQUEST_PAY_METHOD', loadMore)
}


export const payMethodRequestSagasAction = createAction('REQUEST_PAY_METHOD');
export const npayMethodRequestSagasAction = createAction('N_REQUEST_PAY_METHOD');