import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding: 8,
            backgroundColor: colors.principal,
            borderRadius:12,
            ...shadows.principalShadow
        }
    }
)

type props = {
    onPress: ()=>void,
    children:  JSX.Element
}

export const PrincipalButton = (props:props):JSX.Element=>{
    const {children, onPress}=props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {children}
            </View>
        </TouchableOpacity>
    )
}
