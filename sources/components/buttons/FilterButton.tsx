import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { FilterIcon } from "../icons/FilterIcon";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            padding: 6,
            backgroundColor: colors.white_card,
            borderRadius:12,
            ...shadows.lightShadow
        }
    }
)

type props = {
    onPress: ()=>void,
}

export const FilterButton = (props:props):JSX.Element=>{
    const { onPress}=props;


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <FilterIcon 
                    color={colors.principal}
                />
            </View>
        </TouchableOpacity>
    )
}
