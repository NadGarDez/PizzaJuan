import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"

import { InitialStackScreenHeader } from "../../components/headers/InitialStackScreenHeader";
import { MyShoppingScreen } from "../../screens/myShoppingGroup/MyShopingScreen";

export type MyShoppingStackProps = {
    MY_SHOPING_SCREEN: undefined,
};
const Stack = createNativeStackNavigator<MyShoppingStackProps>()

MyShoppingScreen
export const MyShoppingStack = ():JSX.Element=>{
    return (
        <Stack.Navigator
        >
            <Stack.Screen 
                options={{
                    header: props =>(
                        <InitialStackScreenHeader {...props} displayRightContent={false}
                            transparent 
                            headerTitle
                            floating
                        />
                    )
                }}
                component={MyShoppingScreen} 
                name="MY_SHOPING_SCREEN"
            />
        </Stack.Navigator>
    )
}