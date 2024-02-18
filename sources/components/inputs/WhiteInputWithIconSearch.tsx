import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { SearchIcon } from "../icons/SearchIcon";
import { PLACEHOLDER_TEXT_FOR_SEARCH_PRODUCT_INPUT } from "../../constants/strings";

const styles = StyleSheet.create(
    {
        container: {
            display:"flex",
            flexDirection:"row",
            backgroundColor:colors.white_card,
            width:"100%",
            paddingVertical:6,
            paddingHorizontal:6,
            borderRadius:8,
            ...shadows.lightShadow
        
        },
        iconContainer: {
            marginRight:8
        },
        inputContainer: {
            flex:1,
            justifyContent:"center"
        },
        textInputStyles: {
            width:"100%",
            height:25,
            padding:0
        }
    }
)

export const WhiteInputWithSearchIcon = ():JSX.Element=> {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <SearchIcon 
                    color={colors.seconday_text + "60"}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInputStyles}
                    placeholder={PLACEHOLDER_TEXT_FOR_SEARCH_PRODUCT_INPUT}
                />
            </View>
        </View>
    )
}