import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { CarScreen } from "../screens/CarScreen";
import { PayScreen } from "../screens/PayScreen";
import { TranscValidationScreen } from "../screens/TranscValidationScreen";

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