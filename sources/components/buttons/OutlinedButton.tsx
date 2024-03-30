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
            borderRadius:12,
            borderStyle: "solid",
            borderWidth:1,
            backgroundColor:colors.white_card,
            borderColor:colors.principal,
        }
    }
)

type props = {
    onPress: ()=>void,
    children:  JSX.Element,
    radius?:number
}

export const OutlinedButton = (props:props):JSX.Element=>{
    const {children, onPress, radius:borderRadius = 12}=props;

    const buttonStyles = {...styles.buttonContainer, borderRadius};

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={buttonStyles}>
                {children}
            </View>
        </TouchableOpacity>
    )
}
