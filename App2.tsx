import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./sources/styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { store } from "./sources/redux/Store";
import { Provider } from "react-redux";
import { RootNavigation } from "./sources/navigation/RootNavigation";

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:colors.black
        },
    }
)

const GrapqlClient = new ApolloClient(
    {
        uri: 'https://api.8base.com/clf0erdbe02bt09l99ouc895u',
        cache: new InMemoryCache()
    }
)

export type client_apollo = ApolloClient<NormalizedCacheObject>;

const STYLES = ['default', 'dark-content', 'light-content'] as const;

export const App = (): JSX.Element=>{

    const logged = true;

    return (
        <View style={{flex:1}}>
            <StatusBar barStyle={STYLES[0]} backgroundColor={colors.principal}/>
            <Provider store={store}>
                <NavigationContainer>
                    <RootNavigation client={GrapqlClient}/>
                </NavigationContainer>
            </Provider>
        </View>
    )
}