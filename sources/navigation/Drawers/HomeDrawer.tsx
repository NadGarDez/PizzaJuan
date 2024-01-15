import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ProductStack } from "../Stacks/ProductStack";
import { CarStack } from "../Stacks/CarStack";
import { MyShoppingStack } from "../Stacks/MyShopingStack";
import { UserStack } from "../Stacks/UserStack";
import { CustomDrawer } from "../../components/navigation/CustomDrawer";

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
            initialRouteName="PRODUCT_STACK"
            drawerContent={CustomDrawer}
        >
            <Drawer.Screen name="PRODUCT_STACK" component={ProductStack}
                options={{
                    title:"Tienda"
                }}
            />
            <Drawer.Screen name="CAR_STACK" component={CarStack}
                options={{
                    title:"Carrito"
                }}
            />
            <Drawer.Screen name="MY_SHOPPING" component={MyShoppingStack}
                options={ {
                    title: "Mis compras"
                }}
            />
            <Drawer.Screen name="USER_STACK" component={UserStack}
                options={{
                    title: "Usuario"
                }}
            />
        </Drawer.Navigator>
    )
}