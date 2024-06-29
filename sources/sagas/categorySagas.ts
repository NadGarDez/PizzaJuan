import { call, put, select, takeEvery } from "redux-saga/effects"
import { sessionTokenSelector } from "../redux/SessionReducer"
import { defaultApiResponse } from "../types/api/productTypes";
import { getCategoryList } from "../utils/apiRequests";
import { finishRequestSuccessfully, finishRequestWithError } from "../redux/categorySlicer";

interface data {
    results: any[],
    count?:number,
    next?: string,
    prev?: string
 }

function* requestCategorySagas(){
    const token: null | string = yield select(sessionTokenSelector)
    try {
        if(token!==null){
          const result: defaultApiResponse<data> = yield call(getCategoryList,token);
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


export function* categoryRequestWatcher(){
    yield takeEvery('REQUEST_CATEGORIES', requestCategorySagas);
 }