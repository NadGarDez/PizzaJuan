import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { WalletIcon } from "../icons/WalletIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { payMethodSlicerSelector } from "../../redux/payMethodSlicer";
import { payMethodRequestSagasAction } from "../../sagas/paymethodSagas";

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:2000,
    },
    subtitleContainer: {
        width: "100%",
        marginBottom: 8
    },
    subtitleText: {
        fontSize:20,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    textStyles: {
        color:colors.white_card,
        fontWeight:"400"
    },
    textContainer: {
        height:24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    semiTransparentCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#00000020",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
});

type aditionalProps = {

}

type props = tabViewSceneProps & aditionalProps

const transformResults = (data: Record<string, any>[]) => data.map(
    item => {
        if(item['mobile_pay'] !== null) {
            return {
                name: `Pago Móvil ${item['mobile_pay'].pk}`,
                ['ID']: item['mobile_pay'].pk,
                ['Numero de telefono']: item['mobile_pay'].phone_number,
                ['CI']: item['mobile_pay'].ci,
                ['Código del banco']: item['mobile_pay'].back_code,
            }
        }
        else {
            return {
                name: `Wallet ${item['wallet_pay'].pk ?? ''}`,
                ['Clave Pública']: item['wallet_pay'].address,
                ['Dirección de wallet']: item['wallet_pay'].public_key,
            }
        }
    }
)


export const PayMethodContainer = (props:props): JSX.Element=> {

    const results = useAppSelector(payMethodSlicerSelector);
    const dispatch = useAppDispatch();

    console.log(results);

    useEffect(
        () => {
            dispatch(payMethodRequestSagasAction());
        },
        []
    )

    const {jumpTo} = props;

    const onPressCreate = ()=> {
        jumpTo("second");
    }
    const leftItem = ()=> {
        return (
            <View style={styles.semiTransparentCircle}>
                <WalletIcon color={colors.white_card}/>
            </View>
        )
    }

    return (
       <View style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    Metodos de Pago Disponibles
                </Text>
             </View>
            <ToggableList data={transformResults(results ?? [])} leftItem={leftItem} voidMessage="No hay metodos de pago disponibles"/> 
                <PrincipalButton onPress={onPressCreate} radius={5}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyles}>
                            Agregar Metodo de Pago
                        </Text>
                    </View>
                </PrincipalButton>
       </View>
    )
}