import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { MyShoppingScreen } from "../../screens/userGroup/MyShopingScreen";

export type MyShoppingStackProps = {
    MY_SHOPING_SCREEN: undefined,
};
const Stack = createNativeStackNavigator<MyShoppingStackProps>()


export const MyShoppingStack = ():JSX.Element=>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                component={MyShoppingScreen} 
                name="MY_SHOPING_SCREEN"
            />
        </Stack.Navigator>
    )
}