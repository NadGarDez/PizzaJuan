import React from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"

const styles = StyleSheet.create(
    {
        container : {
            flex:1
        }
    }
)

type CarScreenPropType = StackNavigationProp<CarStackProp, "PAY_SCREEN">

export const PayScreen = ():JSX.Element=>{
    
    const {navigate} = useNavigation<CarScreenPropType>()

    const onPress = ():void=>{
        navigate("TRANSC_VALIDATION_SCREEN", {transactionCode:"123abc"});
    }

    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Ventana de pago" onPress={onPress}/>
        </View>
    )
}
