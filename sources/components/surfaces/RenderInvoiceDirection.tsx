import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { LocationIcon } from "../icons/LocationIcon";
import { GoFoward } from "../icons/GoFoward";


const styles = StyleSheet.create({
    container: {
        paddingLeft:12,
        paddingRight:8,
        paddingVertical:8
    },
    titleStyles: {
        color:colors.seconday_text,
        fontSize:16,
        fontWeight:"600"
    },
    informationContainerAndButton: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    directionContainer: {
        flex:1,
        paddingHorizontal:4
    },
    iconContainer:{
        
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
    firstLineDirection: {
        color:colors.principal,
        fontSize:14,
        fontWeight:"500"
    },
    secondLineDirection: {
        marginTop:2,
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    }, 
    buttonContainer: {
        
    }

})

type props= {
}

export const RenderInvoiceDirection = () => {
    return (
        <View style={{
            ...styles.container,
            backgroundColor: "transparent"
        }}>

            <View style={styles.informationContainerAndButton}>
                <View style={styles.iconContainer}>
                    <View style={styles.semiTransparentCircle}>
                        <LocationIcon color={colors.white_card} />
                    </View>
                </View>
                <View style={styles.directionContainer}>
                        <Text style={styles.firstLineDirection}>
                            Urbanizacion Guarico Apure, casa #9
                        </Text>
                        <Text style={styles.secondLineDirection}>
                            Calabozo edo Guarico
                        </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <GoFoward size={30} color={colors.seconday_text}/>
                </View>
            </View>
        </View>
    )
}
