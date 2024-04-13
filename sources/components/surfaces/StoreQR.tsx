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
    imageContainer: {
        marginTop: 8,
        flex: 1
    },
    imageStyles: {
        width:'100%',
        height: '100%'
    }
})

export const StoreQR = ()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Envia un pago movil con el monto de tu compra usando el siguiente QR</Text>
            <View style={styles.imageContainer}>
                <Image 
                    resizeMode="contain"
                    style={styles.imageStyles}
                    source={{uri: 'https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg'}}
                />
            </View>
        </View>
    )
}