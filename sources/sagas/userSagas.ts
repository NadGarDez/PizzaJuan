import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { finishRequestWithError, sessionTokenSelector, startRequest, finishRequestSuccessfully } from "../redux/SessionReducer";
import { getUserInformation } from "../utils/apiRequests";
import { defaultApiResponse } from "../types/api/defaultTypes";
import { userDataRequestInterface } from "../types/api/deliveryLocation";


function* getUserInformationSagas() {
   const token: null | string = yield select(sessionTokenSelector);
   try {
      if(token!==null){
          yield put(startRequest())
         const result: defaultApiResponse<userDataRequestInterface> = yield call(getUserInformation, token);
         if(result.status !== 200){
            yield put(finishRequestWithError(result.statusText ?? ''))
         } else {
            const {data} = result;
            yield put(finishRequestSuccessfully({
                email: data.user.email,
                firstName: data.user.first_name,
                lastName: data.user.last_name,
                birthDate: data.aditional_user_info.birthdate ?? '',
                genre: data.aditional_user_info.genre ?? 'male',
                ci: data.aditional_user_info.ci ?? ''
            }))
         }
      }else {
         console.log('error super error')
        yield put(finishRequestWithError('Token invalidos'))
      }
   } catch (error) {
      console.log('error super error')
        yield put(finishRequestWithError('Error inesperado'))
   }
 }

export function* requestUserWatcher():any {
   yield takeEvery('GET_USER_INFORMATION', getUserInformationSagas)
}

export const requestUserInformationSagasAction = createAction('GET_USER_INFORMATION');

