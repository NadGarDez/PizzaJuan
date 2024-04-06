import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { toogableListItem } from "../../constants/userConfigurationConstants";
import { payMethodConfigurationMetadata } from "../../constants/formConstants";
import { WalletIcon } from "../icons/WalletIcon";

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

const staticData: toogableListItem[] = [
    {
        title: 'Metodo de Pago 1',
        [payMethodConfigurationMetadata.bank.name]: 'Mercantil',
        [payMethodConfigurationMetadata.ni.name]: '26177497',
        [payMethodConfigurationMetadata.type.name]: 'Pago Movil',
        [payMethodConfigurationMetadata.phone.name]: '26177497'
    },
    {
        title: 'Metodo de Pago 2',
        [payMethodConfigurationMetadata.bank.name]: 'Provincial',
        [payMethodConfigurationMetadata.ni.name]: '26177497',
        [payMethodConfigurationMetadata.type.name]: 'Pago Movil',
        [payMethodConfigurationMetadata.phone.name]: '26177497'
    },
    {
        title: 'Metodo de Pago 3',
        [payMethodConfigurationMetadata.bank.name]: 'Banesco',
        [payMethodConfigurationMetadata.ni.name]: '26177497',
        [payMethodConfigurationMetadata.type.name]: 'Pago Movil',
        [payMethodConfigurationMetadata.phone.name]: '26177497'
    }
]


export const PayMethodContainer = (props:props): JSX.Element=> {

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
            <ToggableList data={staticData} leftItem={leftItem} voidMessage="No hay metodos de pago disponibles"/> 
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