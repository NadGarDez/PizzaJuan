import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { MenuIcon } from "../icons/MenuIcon";
import { WhiteButton } from "../buttons/WhiteButton";
import { LocationIcon } from "../icons/LocationIcon";
import { DrawerActions } from "@react-navigation/native";


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
        },
        ubicationContainer : {
            display: "flex",
            flexDirection:"row",
            alignItems:"center"
        },
        textLocationStyles: {
            marginRight:6,
            color:colors.seconday_text
        }


    }
)

type headerProps = {
    displayRightContent:boolean, // this parameters should be able to render differents types of right header content
    rightContentType?:string // maybe for a component switch
    actionReceipt?:string // me be for the reciber o a certain action 
}

export const InitialStackScreenHeader = (props:NativeStackHeaderProps&headerProps):JSX.Element=> {
    const {displayRightContent,navigation }= props;

    const openDrawer = ()=> {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    const jumpToUser = ()=> {
        navigation.dispatch(DrawerActions.openDrawer())
        setTimeout(() => {
            navigation.dispatch(DrawerActions.jumpTo("USER_STACK"))
        }, 500);
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <IconButton onPress={openDrawer}>
                   <MenuIcon />
                </IconButton>
            </View>
            <View style={styles.centerContainer}/>
            <View style={styles.righContainer}>
                {
                    displayRightContent ? (
                        <WhiteButton onPress={jumpToUser} deepShadow={false}>
                            <View style={styles.ubicationContainer}>
                                <Text style={styles.textLocationStyles}>
                                    Tu Ubicacion
                                </Text>
                                <LocationIcon size={20}/>
                            </View>
                        </WhiteButton>
                    ): null
                }
                
            </View>
        </View>
    )
}