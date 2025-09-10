import React, { useEffect } from "react"
import { HomeDrawer } from "./Drawers/HomeDrawer";
import { LogInSignInStack } from "./Stacks/LogInSignInStack";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {  sessionTokenSelector } from "../redux/SessionReducer";
import { requestUserInformationSagasAction } from "../sagas/userSagas";
import { deliveryLocationRequestSagasAction } from "../sagas/deliveryLocationSagas";
import { payMethodRequestSagasAction } from "../sagas/paymethodSagas";


export const RootNavigation = ():JSX.Element=>{

    const token = useAppSelector(sessionTokenSelector);
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            if (token !== null) {
                dispatch(requestUserInformationSagasAction());
                dispatch(deliveryLocationRequestSagasAction());
                dispatch(payMethodRequestSagasAction())
            }
        },
        [token]
    )

    return (
        <>
             {
                !!token ? (
                    <HomeDrawer/>
                ) : (
                    <LogInSignInStack/>
                )
            }
        </>
    )
}