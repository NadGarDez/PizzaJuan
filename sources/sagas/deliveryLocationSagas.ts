import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { sessionTokenSelector } from "../redux/SessionReducer";
import { getNext, getResourceList } from "../utils/apiRequests";
import { defaultApiResponse } from "../types/api/defaultTypes";
import { finishRequestSuccessfully, finishRequestWithError, deliveryNextSelector, startRequest, startNRequest, finishNRequestSuccessfully } from "../redux/deliveryLocationSlicer";

interface data {
   results: any[],
   count:number,
   next: string,
   previeus: string
}

function* requestDeliveryLocationSagas() {
   const token: null | string = yield select(sessionTokenSelector);
   try {
      if(token!==null){
         yield put(startRequest())
         const result: defaultApiResponse<data> = yield call(getResourceList, token, `getDeliveryLocations`);
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
   const next: string | null = yield select(deliveryNextSelector);
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

export function* requestDeliveryLocationWatcher():any {
   yield takeEvery('REQUEST_DELIVERY_LOCATIONS', requestDeliveryLocationSagas),
   yield takeEvery('N_REQUEST_DELIVERY_LOCATIONS', loadMore)
}


export const deliveryLocationRequestSagasAction = createAction('REQUEST_DELIVERY_LOCATIONS');
export const ndeliveryLocationRequestSagasAction = createAction('N_REQUEST_DELIVERY_LOCATIONS');