import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ProductStack } from "./ProductStack";
import { UserScreen } from "../screens/UserScreen";
import { CarStack } from "./CarStack";

type HomeDrawerType = {
    PRODUCT_STACK: undefined
    CAR_STACK:undefined,
    USER_STACK:undefined
}

const Drawer = createDrawerNavigator<HomeDrawerType>()

export const HomeDrawer = ():JSX.Element=> {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="PRODUCT_STACK" component={ProductStack}/>
            <Drawer.Screen name="CAR_STACK" component={CarStack}/>
            <Drawer.Screen name="USER_STACK" component={UserScreen}/>
        </Drawer.Navigator>
    )
}