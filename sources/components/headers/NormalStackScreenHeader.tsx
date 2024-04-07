import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { IconButton } from "../buttons/IconButton";
import { BackIcon } from "../icons/BackIcon";
import { HeartButton } from "../buttons/HeartButton";
import { HeaderTitleComponent } from "../surfaces/HeaderTitleComponent";


const styles  = StyleSheet.create(
    {
        container : {
            paddingTop:Platform.select({
                ios:47,
                android:10
            }),
            paddingBottom:16,
            width:"100%",
            display:"flex",
            flexDirection:"row",
            // paddingTop:Platform.select({
            //     ios:47,
            //     android:0
            // }),
            // height:Platform.select({
            //     ios:95,
            //     android:48
            // }),
            // width:"100%",
            // backgroundColor:"transparent",
            // display:"flex",
            // flexDirection:"row",
            position:'absolute',
            top:0,
            zIndex:5,
        },
        leftContainer: {
            display:"flex",
            flexGrow:1,
            flexDirection:"row",
            justifyContent:"flex-start",
            paddingLeft:16,
            minWidth:40
        },
        centerContainer: {
            display:"flex",
            flexGrow:3,
            flexDirection:"row",
            justifyContent:"center",
            paddingHorizontal:4
        },
        righContainer: {
            display:"flex",
            flexGrow:1,
            flexDirection:"row",
            justifyContent:"flex-end",
            paddingRight:16,
            minWidth:40
        }

    }
)

type rightContent = {
    displayRightContent:boolean, // this parameters should be able to render differents types of right header content
    rightContentType?:string // maybe for a component switch
    actionReceipt?:string // me be for the reciber o a certain action 
}

interface props {
    headerTitle?:boolean,
}

export const NormalStackScreenHeader = (props:NativeStackHeaderProps&rightContent&props):JSX.Element=> {

    const {navigation, displayRightContent, headerTitle = false} = props;

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
            <View style={styles.centerContainer}>
                {
                     !!headerTitle ? (
                        <HeaderTitleComponent {...props}/>
                    ) : null
                }
            </View>
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