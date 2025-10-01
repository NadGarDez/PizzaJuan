import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { LOGIN_BUTTON_TEXT } from "../../constants/strings";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding: 6,
            height:50,
            backgroundColor: colors.white_card,
            borderRadius:8,
            width:"100%",
            ...shadows.lightShadow
        },
        textStyles: {
            color:colors.principal,
            fontWeight: '700',
            fontSize: 24
        }
    }
)

type props = {
    onPress: ()=>void,
}

const pressedStyles= (pressed:boolean)=> pressed ? {...styles.buttonContainer, ...shadows.lightShadow } : {...styles.buttonContainer, ...shadows.principalShadow}

export const LoginButton = (props:props):JSX.Element=>{
    const {onPress}=props;

    return (
        <Pressable onPress={onPress}>
            {
                ({pressed})=> (
                    <View style={pressedStyles(pressed)}>
                        <Text style={styles.textStyles}>
                            {LOGIN_BUTTON_TEXT}
                        </Text>
                    </View>
                )
            }
        </Pressable>
    )
}
