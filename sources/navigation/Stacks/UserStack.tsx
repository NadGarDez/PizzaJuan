import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { UserScreen } from "../../screens/myShoppingGroup/UserScreen";
import { FloatingUserHeader } from "../../components/headers/FloatingUserHeader";
import { withScrollView } from "../../HOCs/WithScrollView";

export type UserStackProps = {
    USER_SCREEN: undefined,
};
const Stack = createNativeStackNavigator<UserStackProps>()

const HOCUserScreen = withScrollView(UserScreen)

export const UserStack = ():JSX.Element=>{
    return (
        <Stack.Navigator
        >
            <Stack.Screen 
                options={{
                    header: props =>(
                        <FloatingUserHeader {...props}/>
                    )
                }}
                component={HOCUserScreen} 
                name="USER_SCREEN"
            />
        </Stack.Navigator>
    )
}