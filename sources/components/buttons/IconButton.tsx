import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            width:30,
            height:30,
            borderRadius:20,
        }
    }
)

type props = {
    onPress: ()=>void,
    children:  JSX.Element
}

export const IconButton = (props:props):JSX.Element=>{
    const {children, onPress}=props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {children}
            </View>
        </TouchableOpacity>
    )
}
