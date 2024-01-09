import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { CarScreen } from "../../screens/shoppingGroup/CarScreen";
import { PayScreen } from "../../screens/shoppingGroup/PayScreen";
import { TranscValidationScreen } from "../../screens/shoppingGroup/TranscValidationScreen";

export type CarStackProp = {
    CAR_SCREEN: undefined,
    PAY_SCREEN: undefined,
    TRANSC_VALIDATION_SCREEN:{
        transactionCode:string
    },
};
const Stack = createNativeStackNavigator<CarStackProp>()


export const CarStack = ():JSX.Element=>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen component={CarScreen} name="CAR_SCREEN"/>
            <Stack.Screen component={PayScreen} name="PAY_SCREEN"/>
            <Stack.Screen component={TranscValidationScreen} name="TRANSC_VALIDATION_SCREEN"/>
        </Stack.Navigator>
    )
}