import React from "react"
import { HomeDrawer } from "./Drawers/HomeDrawer";
import { LogInSignInStack } from "./Stacks/LogInSignInStack";
import { useAppSelector } from "../redux/hooks";
import {  sessionTokenSelector } from "../redux/SessionReducer";


export const RootNavigation = ():JSX.Element=>{

    const token = useAppSelector(sessionTokenSelector);

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