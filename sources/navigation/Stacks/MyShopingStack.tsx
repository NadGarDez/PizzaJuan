import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { InitialStackScreenHeader } from "../../components/headers/InitialStackScreenHeader";
import { MyShoppingScreen } from "../../screens/shoppingGroup/MyShopingScreen";
import { InvoiceScreen } from "../../screens/shoppingGroup/InvoiceScreen";
import { NormalStackScreenHeader } from "../../components/headers/NormalStackScreenHeader";

export type MyShoppingStackProps = {
    MY_SHOPING_SCREEN: undefined,
    INVOICE_SCREEN: {
        orderId:string,
        aditionalInfo: string
    }
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
            <Stack.Screen 
                options={{
                    header: props =>(
                        <NormalStackScreenHeader 
                            {...props}
                            displayRightContent={false}
                        />
                    )
                }}
                component={InvoiceScreen}
                name="INVOICE_SCREEN"
            />
        </Stack.Navigator>
    )
}