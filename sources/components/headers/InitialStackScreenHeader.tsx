import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { BackIcon } from "../icons/BackIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { WhiteButton } from "../buttons/WhiteButton";
import { LocationIcon } from "../icons/LocationIcon";


const styles  = StyleSheet.create(
    {
        container : {
            paddingTop:Platform.select({
                ios:47,
                android:10
            }),
            paddingBottom:16,
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


export const InitialStackScreenHeader = (props:NativeStackHeaderProps):JSX.Element=> {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <IconButton onPress={()=>{}}>
                   <MenuIcon />
                </IconButton>
            </View>
            <View style={styles.centerContainer}/>
            <View style={styles.righContainer}>
                <WhiteButton onPress={()=>{}} deepShadow={false}>
                    <View style={styles.ubicationContainer}>
                        <Text style={styles.textLocationStyles}>
                            Tu Ubicacion
                        </Text>
                        <LocationIcon size={20}/>
                    </View>
                </WhiteButton>
            </View>
        </View>
    )
}