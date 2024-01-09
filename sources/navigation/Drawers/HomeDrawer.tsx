import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ProductStack } from "../Stacks/ProductStack";
import { CarStack } from "../Stacks/CarStack";
import { MyShoppingStack } from "../Stacks/MyShopingStack";
import { UserScreen } from "../../screens/myShoppingGroup/UserScreen";

type HomeDrawerType = {
    PRODUCT_STACK: undefined
    CAR_STACK:undefined,
    USER_STACK:undefined,
    MY_SHOPPING:undefined
}

const Drawer = createDrawerNavigator<HomeDrawerType>()

export const HomeDrawer = ():JSX.Element=> {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="PRODUCT_STACK" component={ProductStack}/>
            <Drawer.Screen name="CAR_STACK" component={CarStack}/>
            <Drawer.Screen name="MY_SHOPPING" component={MyShoppingStack}/>
            <Drawer.Screen name="USER_STACK" component={UserScreen}/>
        </Drawer.Navigator>
    )
}