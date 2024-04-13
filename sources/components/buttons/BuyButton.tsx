import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { CarIcon } from "../icons/CarIcon";


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
        }
    }
)

type props = {
    onPress: ()=>void,
    text?:string
}

const pressedStyles= (pressed:boolean)=>pressed ? {...styles.buttonContainer, ...shadows.lightShadow, backgroundColor: colors.hightLightPrincipal } : {...styles.buttonContainer, ...shadows.principalShadow}

export const BuyButton = (props:props):JSX.Element=>{
    const {onPress, text = ""}=props;

    return (
        <Pressable onPress={onPress}>
            {
                ({pressed})=> (
                    <View style={pressedStyles(pressed)}>
                        <Text style={styles.textStyles}>
                            {
                                text === "" ? "Pagar" : text
                            }
                        </Text>
                        <CarIcon color={colors.text_contrast}/>
                    </View>
                )
            }
        </Pressable>
    )
}
