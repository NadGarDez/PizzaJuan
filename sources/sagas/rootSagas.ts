import { all } from "redux-saga/effects";
import { requestProductWatcher } from "./productSagas";
import { categoryRequestWatcher } from "./categorySagas";
import { requestDeliveryLocationWatcher } from "./deliveryLocationSagas";
import { requestPayMethodWatcher } from "./paymethodSagas";
import { requestUserWatcher } from "./userSagas";

export function* rootSagas() {
    yield all([
        requestProductWatcher(),
        categoryRequestWatcher(),
        requestDeliveryLocationWatcher(),
        requestPayMethodWatcher(),
        requestUserWatcher()
    ])
}