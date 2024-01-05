import React, { ReactElement } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { colors } from "./sources/styles/colors";
import { ProductListScreen } from "./sources/screens/ProductListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRODUCT_LIST_SCREEN } from "./sources/constants/screenNames";

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

export const App = (): ReactElement=>{
    return (
        <SafeAreaView style={{flex:1, backgroundColor:colors.principal}}>
            <StatusBar barStyle={STYLES[0]} backgroundColor={colors.principal}/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={PRODUCT_LIST_SCREEN}
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name={PRODUCT_LIST_SCREEN} component={ProductListScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}