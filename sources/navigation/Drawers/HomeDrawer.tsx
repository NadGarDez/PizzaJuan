import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { ProductStack } from "../Stacks/ProductStack";
import { CarStack } from "../Stacks/CarStack";
import { MyShoppingStack } from "../Stacks/MyShopingStack";
import { UserStack } from "../Stacks/UserStack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomDrawer } from "../../components/navigation/CustomDrawer";
import { useAuth0 } from "react-native-auth0";
import { storeData } from "../../utils/asyncStore";
import { ShoppingCartType } from "../../types/api/deliveryLocation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setShoppingCar, shoppingCardSelector } from "../../redux/shoppingCardSlice";
import { AppState } from "react-native";

export type HomeDrawerType = {
    PRODUCT_STACK: undefined
    CAR_STACK:undefined,
    USER_STACK:undefined,
    MY_SHOPPING:undefined
}

const Drawer = createDrawerNavigator<HomeDrawerType>()

export const HomeDrawer = ():JSX.Element=> {

    const {user} = useAuth0();
    const dispatch = useAppDispatch();
    const shoppingCar = useAppSelector(shoppingCardSelector)

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

    const loadShoppingCar = async () => {
        try {
            const value = await AsyncStorage.getItem(user?.sub ?? '');
            if (value !== null && 'shoppingCar' in JSON.parse(value)) {
                const car = JSON.parse(value).shoppingCar as ShoppingCartType;
                dispatch(setShoppingCar(car));
            } 
        
          } catch (e) {
            console.log(e)
          }
    }

    const handleAppStateChange = async (nextAppState:any) => {
        if (nextAppState === 'background' || nextAppState === 'inactive') {
            const value = await AsyncStorage.getItem(user?.sub ?? '');
            const parsedValue = value !== null ? JSON.parse(value) : null;

            storeData(user?.sub ?? '', JSON.stringify({
            ...parsedValue,
            shoppingCar
            }));
        }
      };

    useEffect(
        () => {
            getUserConstants()
            loadShoppingCar()
        },
        []
    )

    useEffect(
        () => {
            const subscription = AppState.addEventListener('change', handleAppStateChange);


            return () => {
               subscription.remove()
            }
        },
        [shoppingCar]
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