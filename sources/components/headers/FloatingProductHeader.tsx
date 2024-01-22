import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { BackIcon } from "../icons/BackIcon";
import { HeartButton } from "../buttons/HeartButton";


const styles  = StyleSheet.create(
    {
        container : {
            paddingTop:Platform.select({
                ios:47,
                android:10
            }),
            paddingBottom:16,
            width:"100%",
            backgroundColor:"transparent",
            display:"flex",
            flexDirection:"row",
            position: "absolute",
            top:0,
            zIndex:25
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


export const FloatingProductHeader = ({navigation}:NativeStackHeaderProps):JSX.Element=> {

    const back = ()=> {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <IconButton onPress={back}>
                   <BackIcon />
                </IconButton>
            </View>
            <View style={styles.centerContainer}/>
            <View style={styles.righContainer}>
                <HeartButton onPress={()=>{}} pressed={false}/>
            </View>
        </View>
    )
}