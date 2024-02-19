import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { LocationIcon } from "../icons/LocationIcon";

const styles = StyleSheet.create({
    container: {
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
        width: 23,
        height: 24,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    firstLineDirection: {
        color:colors.seconday_text,
        textAlign:"justify",
        fontSize:12,
        fontWeight:"200"
    },
    secondLineDirection: {
        marginTop:2,
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    }, 

})

type props = {
    text: string,
    icon: JSX.Element,
    color:string
}

export const IconWithTextElement = ({text, icon, color}:props) => {
    return (
        <Pressable>
            {
                ({pressed})=>(
                    <View style={{
                        ...styles.container,
                        backgroundColor: pressed ? colors.seconday_text + "10" : "transparent"
                    }}>
                        <View style={styles.informationContainerAndButton}>
                            <View style={styles.iconContainer}>
                                <View style={{
                                    ...styles.semiTransparentCircle,
                                    backgroundColor: color
                                }}>
                                    {icon}
                                </View>
                            </View>
                            <View style={styles.directionContainer}>
                                    <Text style={styles.firstLineDirection}>
                                       {text}
                                    </Text>
                            </View>
                        </View>
                    </View>
                )
            }
            
        </Pressable>
    )
}
