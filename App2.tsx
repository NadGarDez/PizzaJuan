import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./sources/styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductStack } from "./sources/navigation/ProductStack";
import { HomeDrawer } from "./sources/navigation/HomeDrawer";

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
const STYLES = ['default', 'dark-content', 'light-content'] as const;

export const App = (): JSX.Element=>{
    return (
        <View style={{flex:1}}>
            <StatusBar barStyle={STYLES[0]} backgroundColor={colors.principal}/>
            <NavigationContainer>
                <HomeDrawer/>
            </NavigationContainer>
        </View>
    )
}