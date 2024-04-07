import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { IconButton } from "../buttons/IconButton";
import { BackIcon } from "../icons/BackIcon";
import { HeartButton } from "../buttons/HeartButton";


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
            backgroundColor:"transparent",
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

type rightContent = {
    displayRightContent:boolean, // this parameters should be able to render differents types of right header content
    rightContentType?:string // maybe for a component switch
    actionReceipt?:string // me be for the reciber o a certain action 
}

export const NormalStackScreenHeader = ({navigation, displayRightContent}:NativeStackHeaderProps&rightContent):JSX.Element=> {

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
                    {
                        displayRightContent ? (
                            <HeartButton onPress={()=>{}} pressed={false}/>
                        ) : null
                    }
            </View>
        </View>
    )
}