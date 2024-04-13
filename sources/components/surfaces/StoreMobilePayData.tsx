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

export const StoreMobilePayData = ()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Envia un pago movil con el monto de tu compra a los siguientes datos usando tu aplicacion bancaria</Text>
            <View style={styles.smsContainer}>
               
            </View>
        </View>
    )
}