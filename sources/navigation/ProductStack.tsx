import {  NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { ProductListScreen } from "../screens/ProductListScreen"
import { ProductScreen } from "../screens/ProductScreen"
import { SellerScreen } from "../screens/SellerScrreen";

export type ProductStackType = {
    PRODUCT_LIST_SCREEN: undefined;
    PRODUCT_SCREEN: {
        productId:string
    },
    PRODUCT_SELLER_SCREEN: {
        sellerId:string
    }
};
const Stack = createNativeStackNavigator<ProductStackType>()


export const ProductStack = ():JSX.Element=>{

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen component={ProductListScreen} name="PRODUCT_LIST_SCREEN"/>
            <Stack.Screen component={ProductScreen} name="PRODUCT_SCREEN"/>
            <Stack.Screen component={SellerScreen} name="PRODUCT_SELLER_SCREEN"/>
        </Stack.Navigator>
    )
}