import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./sources/styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./sources/redux/Store";
import { Provider } from "react-redux";
import { RootNavigation } from "./sources/navigation/RootNavigation";
import { Auth0Provider } from "react-native-auth0";

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

const STYLES = ['default', 'dark-content', 'light-content'] as const;

export const App = (): JSX.Element=>{

    const logged = true;

    return (
        <View style={{flex:1}}>
            <StatusBar barStyle={STYLES[0]} backgroundColor={colors.principal}/>
            <Auth0Provider domain="https://dev-2cvrxuuk3gmg1ihr.us.auth0.com" clientId="jATdHDLzYCMrzlPSkUnCegU6Q54qjblH">
                <Provider store={store}>
                    <NavigationContainer>
                        <RootNavigation />
                    </NavigationContainer>
                </Provider>
            </Auth0Provider>
        </View>
    )
}