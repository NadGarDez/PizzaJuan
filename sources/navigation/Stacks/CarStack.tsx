import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React   from "react"
import { CarScreen } from "../../screens/shoppingGroup/CarScreen";
import { PayScreen } from "../../screens/shoppingGroup/PayScreen";
import { TranscValidationScreen } from "../../screens/shoppingGroup/TranscValidationScreen";
import { InitialStackScreenHeader } from "../../components/headers/InitialStackScreenHeader";
import { NormalStackScreenHeader } from "../../components/headers/NormalStackScreenHeader";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { withScrollView } from "../../HOCs/WithScrollView";

export type CarStackProp = {
    CAR_SCREEN: undefined,
    PAY_SCREEN: undefined,
    TRANSC_VALIDATION_SCREEN:{
        transactionCode:string
    },
};

const styles = StyleSheet.create({
    titleStyles: {
        fontSize:25,
        fontWeight: "700",
        color:colors.background_white,
    },
    titleContainer: {
        flex:1,
        backgroundColor:colors.white_card + "60",
        borderRadius:12,
        marginHorizontal:32,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical:3
    }
})

const Stack = createNativeStackNavigator<CarStackProp>()
const HOCCarScreen = withScrollView(CarScreen)


export const CarStack = ():JSX.Element=>{
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={HOCCarScreen} 
                name="CAR_SCREEN"
                options={{
                    header: props =>(
                        <InitialStackScreenHeader {...props} displayRightContent={false} transparent 
                           headerTitle
                           floating
                        />
                    )
                }}
            />
            <Stack.Screen 
                component={PayScreen} 
                name="PAY_SCREEN"
                options={{
                    header: props =>(
                        <NormalStackScreenHeader {...props} displayRightContent={false} />
                    )
                }}
            />
            <Stack.Screen 
                component={TranscValidationScreen} 
                name="TRANSC_VALIDATION_SCREEN"
                options={{
                    header: props =>(
                        <NormalStackScreenHeader {...props} displayRightContent={false}/>
                    )
                }}
            />
        </Stack.Navigator>
    )
}