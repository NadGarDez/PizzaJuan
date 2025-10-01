import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { useAppSelector } from "../../redux/hooks";
import { shoppingCardSelector } from "../../redux/shoppingCardSlice";
import { sessionObjectSelector } from "../../redux/SessionReducer";

const circleWidth = (Dimensions.get("screen").width - 32) 

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height:130,
        borderRadius:10,
        ...shadows.principalShadow
    },
    cover: {
        position: 'absolute',
        top:0,
        backgroundColor:'transparent',
        display:"flex",
        paddingHorizontal:8,
        paddingVertical:16,
        zIndex:20,
        height:130,
    },
    form: {
        backgroundColor: colors.principal,
        height:130,
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
        fontWeight:"400"
    },
    titleContainer: {
        paddingBottom:8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    priceContainer: {
        flex:1
    },
    circle: {
        width: circleWidth,
        height: circleWidth,
        borderRadius: circleWidth /2,
        backgroundColor: colors.hightLightPrincipal + "60"
    },
    firstCircle: {
        position: "absolute",
        left: - (circleWidth/2),
        backgroundColor: colors.blackTenPercent
    },
    secondCircle: {
        position: "absolute",
        right: - (circleWidth/2),
        backgroundColor: colors.hightLightPrincipal + '80'
    },
    thirdCircle: {
        position: "absolute",
        right: - (circleWidth/2),
        bottom:0,
        backgroundColor: colors.hightLightPrincipal + '80'
    },
    fourthCircle: {
        position: "absolute",
        left: - (circleWidth/2),
        bottom:0,
        backgroundColor: colors.blackTenPercent
    }
})



export const AmountContainer = ()=> {

    const {totals: {total}} = useAppSelector(shoppingCardSelector);
    const {email} = useAppSelector(sessionObjectSelector);

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={{...styles.circle, ...styles.firstCircle}}/>
                <View style={{...styles.circle, ...styles.secondCircle}}/>
                <View style={styles.circle}/>
                <View style={{...styles.circle, ...styles.thirdCircle}}/>
                <View style={{...styles.circle, ...styles.fourthCircle}}/>
            </View>
            <View style={styles.cover}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        Cliente:{" "}
                        <Text numberOfLines={1} style={{...styles.titleText, fontWeight: "800"}}>
                            {email}
                        </Text>
                    </Text>
                    
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.descriptionText}>
                    Monto a pagar en Bolivares
                    </Text>
                    <Text style={styles.amoutText}>
                        {(total * 36).toFixed(2)}VES
                    </Text>
                </View>
            </View>
        </View>
    )
}