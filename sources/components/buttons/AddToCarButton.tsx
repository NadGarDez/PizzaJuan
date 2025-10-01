import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { CarIcon } from "../icons/CarIcon";
import { ADD_TO_CART_TEXT } from "../../constants/strings";

const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding: 6,
            height:50,
            backgroundColor: colors.principal,
            borderRadius:8,
            width:"100%",
            ...shadows.lightShadow
        },
        textStyles: {
            color:colors.text_contrast
        },
        disabledButton: {
            backgroundColor: colors.principal,
            opacity: 0.5
        },
        disabledText: {
            color: colors.text_contrast,
            opacity: 0.5
        }
    }
)

type props = {
    onPress: ()=>void,
    disabled?:boolean
}

const pressedStyles= (pressed:boolean, disabled:boolean)=> {
    if (disabled) {
        return {...styles.buttonContainer, ...styles.disabledButton};
    }
    return pressed ? {...styles.buttonContainer, ...shadows.lightShadow, backgroundColor: colors.hightLightPrincipal } : {...styles.buttonContainer, ...shadows.principalShadow};
};

export const AddToCarButton = (props:props):JSX.Element=>{
    const {onPress, disabled = false}=props;

    return (
        <Pressable onPress={onPress} disabled={disabled}>
            {
                ({pressed})=> (
                    <View style={pressedStyles(pressed, disabled)}>
                        <Text style={[styles.textStyles, disabled && styles.disabledText]}>
                           {ADD_TO_CART_TEXT}
                        </Text>
                        <CarIcon color={disabled ? "rgba(255, 255, 255, 0.5)" : colors.text_contrast}/>
                    </View>
                )
            }
        </Pressable>
    )
}