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
            padding: 6,
            backgroundColor: colors.white_card,
            borderRadius:12,
            ...shadows.lightShadow
        }
    }
)

type props = {
    onPress: ()=>void,
    children:  JSX.Element,
    deepShadow?: boolean
}

export const WhiteButton = (props:props):JSX.Element=>{
    const {children, onPress, deepShadow=true}=props;

    const shadowStyles = deepShadow ? shadows.principalShadow : shadows.lightShadow


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.buttonContainer, ...shadowStyles}}>
                {children}
            </View>
        </TouchableOpacity>
    )
}
