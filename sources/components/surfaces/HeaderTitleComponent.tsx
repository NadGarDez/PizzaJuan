import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { screenNames } from "../../constants/ScreenNames";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const styles = StyleSheet.create({
    titleStyles: {
        fontSize:25,
        fontWeight: "700",
        color:colors.background_white,
    },
    titleContainer: {
        flex:1,
        backgroundColor:colors.white_card + "60",
        borderRadius:12,
        marginHorizontal:32,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical:3
    }
})

export const HeaderTitleComponent = ({route:{name}}:NativeStackHeaderProps):JSX.Element=> {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyles}>
                {
                    screenNames[name]
                }
            </Text>
        </View>
    )
}