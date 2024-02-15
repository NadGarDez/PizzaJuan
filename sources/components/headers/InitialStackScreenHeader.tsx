import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { MenuIcon } from "../icons/MenuIcon";
import { WhiteButton } from "../buttons/WhiteButton";
import { LocationIcon } from "../icons/LocationIcon";
import { DrawerActions } from "@react-navigation/native";
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
            flexDirection:"row"
        },
        leftContainer: {
            display:"flex",
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
            flexDirection:"row",
            justifyContent:"flex-end",
            paddingRight:16,
            minWidth:40
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
    transparent?:boolean,
    headerTitle: boolean
}

export const InitialStackScreenHeader = (props:NativeStackHeaderProps&headerProps):JSX.Element=> {
    const {displayRightContent,navigation, transparent = false , headerTitle}= props;

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
        <View style={{
            ...styles.container,
            backgroundColor:transparent ? "transparent" : colors.background_white
        }}>
            <View style={styles.leftContainer}>
                <IconButton onPress={openDrawer}>
                   <MenuIcon />
                </IconButton>
            </View>
            <View style={styles.centerContainer}>
               <HeaderTitleComponent {...props}/>
            </View>
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