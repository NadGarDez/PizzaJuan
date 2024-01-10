import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { LogInSignInScreen } from "../../screens/loginSignInGroup/LogInSignInScreen";

export type LogInSignInStackPropType = {
    LOG_IN_SIGN_IN_SCREEN: undefined;
};
const Stack = createNativeStackNavigator<LogInSignInStackPropType>()


export const LogInSignInStack = ():JSX.Element=>{

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen component={LogInSignInScreen} name="LOG_IN_SIGN_IN_SCREEN" />
        </Stack.Navigator>
    )
}