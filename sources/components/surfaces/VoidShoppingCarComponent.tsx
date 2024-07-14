import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { shadows } from "../../styles/shadow";
import { colors } from "../../styles/colors";
import { BuyButton } from "../buttons/BuyButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    roundedContainer: {
        flex:1,
        borderRadius:12,
        backgroundColor:colors.white_card,
        ...shadows.principalShadow
    },
    separator: {

    },
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize:16,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    bottomSeparator: {
        height:20,
        borderStyle:'solid',
        borderTopColor: colors.seconday_text + "30",
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderBottomColor:"transparent",
        borderWidth:1
    },
    topSeparator: {
        height:20,
        borderStyle:'solid',
        borderTopColor: 'transparent',
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderBottomColor:colors.seconday_text + "30",
        borderWidth:1
    },
    buttonContainer: {
        padding:16
    }
})


export const VoidShoppingCarComponent = ():JSX.Element => {
    const navigation = useNavigation()

    const jumpProducts = ()=> {
        navigation.dispatch(DrawerActions.openDrawer())
        setTimeout(() => {
            navigation.dispatch(DrawerActions.jumpTo("PRODUCT_STACK"))
        }, 500);
    }
    return (
        <View style={styles.roundedContainer}>
            <View style={styles.topSeparator}/>
            <View style={styles.mainContainer}>
                <Text style={styles.text}>
                    No hay elementos agregados al carrito
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <BuyButton 
                    text="Lista de productos"
                    onPress={jumpProducts}
                />
            </View>
            <View style={styles.bottomSeparator}/>
        </View>
    )
}