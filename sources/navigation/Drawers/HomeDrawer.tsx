import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { ProductStack } from "../Stacks/ProductStack";
import { CarStack } from "../Stacks/CarStack";
import { MyShoppingStack } from "../Stacks/MyShopingStack";
import { UserStack } from "../Stacks/UserStack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomDrawer } from "../../components/navigation/CustomDrawer";
import { useAuth0 } from "react-native-auth0";

export type HomeDrawerType = {
    PRODUCT_STACK: undefined
    CAR_STACK:undefined,
    USER_STACK:undefined,
    MY_SHOPPING:undefined
}

const Drawer = createDrawerNavigator<HomeDrawerType>()

export const HomeDrawer = ():JSX.Element=> {

    const {user} = useAuth0();

    const storeData = async (key:string,value: string) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          console.log(e);
        }
      };

    const getUserConstants = async () => {
        try {
            const value = await AsyncStorage.getItem(user?.sub ?? '');
            if (value === null) {
                storeData(user?.sub ?? '', JSON.stringify({}));
            }
        
          } catch (e) {
            console.log(e)
          }
    }

    useEffect(
        () => {
            getUserConstants()
        },
        []
    )

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