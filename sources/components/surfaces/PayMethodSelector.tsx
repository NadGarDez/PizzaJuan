import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { GoFoward } from "../icons/GoFoward";
import { shadows } from "../../styles/shadow";
import { WalletIcon } from "../icons/WalletIcon";

const styles = StyleSheet.create({
    floatingContainer: {
        marginTop:16,
        width: "100%",
        borderRadius:10,
        paddingVertical:8,
        backgroundColor:colors.white_card,
        ...shadows.principalShadow,
    },
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
    onPress?: ()=>void | null
}

export const PayMethodSelector = ({onPress}:props) => {
    return (
        <View style={styles.floatingContainer}>
            <Pressable
                onPress={onPress}
            >
                {
                    ({pressed})=>(
                        <View style={{
                            ...styles.container,
                            backgroundColor: pressed ? colors.seconday_text + "10" : "transparent"
                        }}>
            
                            <View style={styles.informationContainerAndButton}>
                                <View style={styles.iconContainer}>
                                    <View style={styles.semiTransparentCircle}>
                                        <WalletIcon color={colors.white_card} />
                                    </View>
                                </View>
                                <View style={styles.directionContainer}>
                                        <Text style={styles.firstLineDirection}>
                                            Metodo de Pago #1
                                        </Text>
                                        <Text style={styles.secondLineDirection}>
                                           V26177497 - 04243121846 - 0105
                                        </Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <GoFoward size={30} color={colors.seconday_text}/>
                                </View>
                            </View>
                        </View>
                    )
                }
                
            </Pressable>
        </View>
    )
}
