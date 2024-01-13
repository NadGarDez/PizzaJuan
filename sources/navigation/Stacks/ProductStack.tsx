import {  NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { ProductListScreen } from "../../screens/productGroup/ProductListScreen"
import { ProductScreen } from "../../screens/productGroup/ProductScreen"
import { SellerScreen } from "../../screens/productGroup/SellerScrreen";
import { InitialStackScreenHeader } from "../../components/headers/InitialStackScreenHeader";
import { NormalStackScreenHeart } from "../../components/headers/NormalStackScreenHeader";

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
                headerShown: true
            }}
        >
            <Stack.Screen 
                component={ProductListScreen} 
                name="PRODUCT_LIST_SCREEN"
                options={
                    {
                        header: props =>(
                            <InitialStackScreenHeader {...props} displayRightContent/>
                        )
                    }
                }
            />
            <Stack.Screen 
                component={ProductScreen} 
                name="PRODUCT_SCREEN"
                options={
                    {
                        header: props =>(
                            <NormalStackScreenHeart {...props} displayRightContent/>
                        )
                    }
                }
            />
            <Stack.Screen 
                component={SellerScreen} 
                name="PRODUCT_SELLER_SCREEN"
                options={
                    {
                        header: props =>(
                            <NormalStackScreenHeart {...props} displayRightContent/>
                        )
                    }
                }
            /> 
        </Stack.Navigator>
    )
}