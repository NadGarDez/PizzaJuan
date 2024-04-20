import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius:10,
        height:130,
        backgroundColor: colors.principal,
        display:"flex",
        paddingHorizontal:8,
        paddingVertical:16,
        zIndex:20,
        overflow: 'hidden',
        ...shadows.principalShadow
    },
    titleText: {
        fontSize:25,
        fontWeight: "500",
        color:colors.background_white,
    },
    amoutText: {
        fontSize:34,
        fontWeight:"700",
        color:colors.text_contrast,
    },
    descriptionText: {
        fontSize:15,
        color:colors.white_card,
        fontWeight:"300"
    },
    titleContainer: {
        flex:1,
    },
    priceContainer: {
        flex:1
    }
})



export const AmountContainer = ()=> {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Pedido #1234abcd567
                    </Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.descriptionText}>
                    Monto a pagar en Bolivares
                    </Text>
                    <Text style={styles.amoutText}>
                        400VES
                    </Text>
                </View>
            </View>
        </>
    )
}