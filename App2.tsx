import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./sources/styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeDrawer } from "./sources/navigation/HomeDrawer";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { LogInSignInStack } from "./sources/navigation/LogInSignInStack";

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

const Stack = createNativeStackNavigator()
const GrapqlClient = new ApolloClient(
    {
        uri: 'https://api.8base.com/clf0erdbe02bt09l99ouc895u',
        cache: new InMemoryCache()
    }
)

const STYLES = ['default', 'dark-content', 'light-content'] as const;

export const App = (): JSX.Element=>{

    const logged = true;

    return (
        <View style={{flex:1}}>
            <StatusBar barStyle={STYLES[0]} backgroundColor={colors.principal}/>
            <NavigationContainer>
                {
                    logged ? (
                        <ApolloProvider client={GrapqlClient}>
                            <HomeDrawer/>
                        </ApolloProvider>
                    ) : (
                        <LogInSignInStack/>
                    )
                }
            </NavigationContainer>
        </View>
    )
}