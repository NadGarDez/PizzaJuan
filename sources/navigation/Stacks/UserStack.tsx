import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { InitialStackScreenHeader } from "../../components/headers/InitialStackScreenHeader";
import { UserScreen } from "../../screens/myShoppingGroup/UserScreen";

export type UserStackProps = {
    USER_SCREEN: undefined,
};
const Stack = createNativeStackNavigator<UserStackProps>()


export const UserStack = ():JSX.Element=>{
    return (
        <Stack.Navigator
        >
            <Stack.Screen 
                options={{
                    header: props =>(
                        <InitialStackScreenHeader {...props} displayRightContent={false}/>
                    )
                }}
                component={UserScreen} 
                name="USER_SCREEN"
            />
        </Stack.Navigator>
    )
}