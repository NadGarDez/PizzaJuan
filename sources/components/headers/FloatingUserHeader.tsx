import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { IconButton } from "../buttons/IconButton";
import { DrawerActions } from "@react-navigation/native";
import { MenuIcon } from "../icons/MenuIcon";
import { colors } from "../../styles/colors";


const styles  = StyleSheet.create(
    {
        container : {
            paddingTop:Platform.select({
                ios:47,
                android:10
            }),
            paddingBottom:16,
            width:"100%",
            backgroundColor:colors.transparent,
            display:"flex",
            flexDirection:"row",
            position: "absolute",
            top:0,
            zIndex:2
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
        },
        semiTransparentCircle: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.whiteNinePercent,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }

    }
)


export const FloatingUserHeader = ({navigation}:NativeStackHeaderProps):JSX.Element=> {

    const openDrawer = ()=> {
        navigation.dispatch(DrawerActions.openDrawer())
    }


    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* <View style={styles.semiTransparentCircle}> */}
                <IconButton onPress={openDrawer}>
                    <MenuIcon />
                </IconButton>
                {/* </View> */}
                
            </View>
            <View style={styles.centerContainer}/>
            <View style={styles.righContainer}>
                
            </View>
        </View>
    )
}