import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ProductStack } from "../Stacks/ProductStack";
import { CarStack } from "../Stacks/CarStack";
import { MyShoppingStack } from "../Stacks/MyShopingStack";
import { UserStack } from "../Stacks/UserStack";

export type HomeDrawerType = {
    PRODUCT_STACK: undefined
    CAR_STACK:undefined,
    USER_STACK:undefined,
    MY_SHOPPING:undefined
}

const Drawer = createDrawerNavigator<HomeDrawerType>()

export const HomeDrawer = ():JSX.Element=> {
    return (
        <Drawer.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name="PRODUCT_STACK" component={ProductStack}/>
            <Drawer.Screen name="CAR_STACK" component={CarStack}/>
            <Drawer.Screen name="MY_SHOPPING" component={MyShoppingStack}/>
            <Drawer.Screen name="USER_STACK" component={UserStack}/>
        </Drawer.Navigator>
    )
}