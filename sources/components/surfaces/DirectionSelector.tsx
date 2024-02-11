import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { LocationIcon } from "../icons/LocationIcon";
import { GoFoward } from "../icons/GoFoward";
import { GoFowardButton } from "../buttons/GoFowardButton";


const styles = StyleSheet.create({
    container: {
        paddingHorizontal:16,
        marginTop:16,
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
        marginTop:8,
        alignItems: "center"
    },
    directionContainer: {
        flex:1,
        paddingHorizontal:8
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

})

export const DireactionSelector = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyles}>
                    Direccion de Envio
                </Text>
            </View>
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
                   <GoFowardButton 
                        onPress={
                            ()=> {

                            }
                        }
                   />
                </View>
            </View>
        </View>
    )
}
