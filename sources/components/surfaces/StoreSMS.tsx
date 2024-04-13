import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:8,
    },
    textStyles: {
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    smsContainer: {
        marginTop: 8,
        flex: 1
    },
    imageStyles: {
        width:'100%',
        height: '100%'
    }
})

// formato banesco : 0134 04141234567 V 10123456 300,00 -> al : 2846
// formato bdv : Pagar 0102 04141234567 10123456 300,00 -> al : 2661
// formato bicentenrario: Pago 0175 04261234567 V12345678 12,34 -> al : 2383
// formato bfc : PAT 0151 04261234567 300,00 V12345678 -> all : 88232
// formato bancaribe : mipago V12345678 0114 50000,10 04141234567 -> all : 22741
// formato banco del tesoro: Pagar 0102 04141234567 V 10123456 300,00 CODIGO_COORDENADA -> all : 2383

export const StoreSMS = ()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Envia un pago movil con el monto de tu compra usando el siguiente mensaje de texto</Text>
            <View style={styles.smsContainer}>
               
            </View>
        </View>
    )
}