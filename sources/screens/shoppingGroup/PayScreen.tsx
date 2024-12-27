import React from "react"
import { Platform, StyleSheet, View } from "react-native"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { StackNavigationProp } from "@react-navigation/stack"
import { AmountContainer } from "../../components/surfaces/AmountContainer"
import { PayMethodSelector } from "../../components/surfaces/PayMethodSelector"
import { useAppDispatch } from "../../redux/hooks"
import { activateWithoutValid, configure } from "../../redux/ModalFormReducer"
import { ModalFormNames } from "../../types/forms/generalFormTypes"
import { ModalForm } from "../../components/modal/ModalForm"
import { BuyButton } from "../../components/buttons/BuyButton"
import { StorePaymentDataTab } from "../../components/navigation/StorePaymentDataTab"

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
        },
        buttonContainer: {
            marginTop:16,
            marginBottom: 30
        },
        tabContainer: {
            marginTop: 16,
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)

export const PayScreen = ():JSX.Element=>{

    const dispatch = useAppDispatch();
    
    const openConfirmModal = ()=> {
        dispatch(configure(ModalFormNames.TRANSACTION_CODE_FORM));
        dispatch(activateWithoutValid());
    }

    return (
        <>
            <View style={styles.container}>
                <AmountContainer />
                <PayMethodSelector />
                <View style={styles.tabContainer}>
                    <StorePaymentDataTab />
                </View>
                <View style={styles.buttonContainer}>
                    <BuyButton 
                        disabled={false}
                        onPress={openConfirmModal}
                        text="Registrar codigo de referencia"
                    />
                </View>
            </View>
            <ModalForm />
        </>
    )
}
