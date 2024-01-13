import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { BackIcon } from "../icons/BackIcon";


const styles  = StyleSheet.create(
    {
        container : {
            paddingTop:Platform.select({
                ios:47,
                android:0
            }),
            height:Platform.select({
                ios:95,
                android:48
            }),
            width:"100%",
            backgroundColor:colors.background_white,
            display:"flex",
            flexDirection:"row"
        },
        leftContainer: {
            display:"flex",
            flexGrow:1,
            flexDirection:"row",
            justifyContent:"flex-start",
            paddingLeft:16
        },
        centerContainer: {
            display:"flex",
            flexGrow:1,
            flexDirection:"row",
            justifyContent:"center",
            paddingHorizontal:4
        },
        righContainer: {
            display:"flex",
            flexGrow:1,
            flexDirection:"row",
            justifyContent:"flex-end",
            paddingRight:16
        }

    }
)


export const StackScreenNormalHeader = (props:NativeStackHeaderProps):JSX.Element=> {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <IconButton onPress={()=>{}}>
                   <BackIcon />
                </IconButton>
            </View>
            <View style={styles.centerContainer}/>
            <View style={styles.righContainer}>
            </View>
        </View>
    )
}