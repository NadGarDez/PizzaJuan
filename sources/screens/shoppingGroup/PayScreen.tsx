import React from "react"
import { Platform, StyleSheet, View } from "react-native"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { AmountContainer } from "../../components/surfaces/AmountContainer"
import { PayMethodSelector } from "../../components/surfaces/PayMethodSelector"
import { useAppDispatch } from "../../redux/hooks"
import { activateWithoutValid, configure } from "../../redux/ModalFormReducer"
import { ModalFormNames } from "../../types/forms/generalFormTypes"
import { ModalForm } from "../../components/modal/ModalForm"

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

    const dispatch = useAppDispatch();
    
    const {navigate} = useNavigation<CarScreenPropType>()

    const onPress = ():void=>{
        navigate("TRANSC_VALIDATION_SCREEN", {transactionCode:"123abc"});
    }

    const openModalA = ()=> {
        dispatch(configure(ModalFormNames.TRANSACTION_CODE_FORM));
        dispatch(activateWithoutValid());
    }

    return (
        <>
            <View style={styles.container}>
                <AmountContainer />
                <PayMethodSelector onPress={openModalA}/>
            </View>
            <ModalForm />
        </>
    )
}
