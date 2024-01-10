import React from "react"
import { HomeDrawer } from "./Drawers/HomeDrawer";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { LogInSignInStack } from "./Stacks/LogInSignInStack";
import { useAppSelector } from "../redux/hooks";
import {  sessionObjectSelector, sessionTokenSelector } from "../redux/SessionReducer";

type props = {
    client:ApolloClient<NormalizedCacheObject>
}

export const RootNavigation = ({client}:props):JSX.Element=>{

    const token = useAppSelector(sessionTokenSelector);
    
    return (
        <>
             {
                !!token ? (
                    <ApolloProvider client={client}>
                        <HomeDrawer/>
                    </ApolloProvider>
                ) : (
                    <LogInSignInStack/>
                )
            }
        </>
    )
}