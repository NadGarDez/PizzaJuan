import React from "react"
import { Platform, StyleSheet, View } from "react-native"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../../styles/colors"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { AmountContainer } from "../../components/surfaces/AmountContainer"
import { PayMethodSelector } from "../../components/surfaces/PayMethodSelector"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: "transparent",
            paddingHorizontal:16,
            paddingTop:Platform.select({
                android: 56,
                ios: 93
            }),
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
        <>
            <View style={styles.container}>
                <AmountContainer />
                <PayMethodSelector />
            </View>
        </>
    )
}
