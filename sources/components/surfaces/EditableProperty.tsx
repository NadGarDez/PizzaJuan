import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { SearchIcon } from "../icons/SearchIcon";
import { EditIcon } from "../icons/EditIcon";

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection: "column",
        marginBottom:16
    },
    valueContainer: {
        height: 50,
        width: "100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:12,
        backgroundColor:colors.formBackground,
        borderStyle:"solid",
        borderWidth:2,
        borderColor:colors.formBorder
    },
    textStyles: {
        fontSize:16,
        fontWeight: "200",
        color:colors.seconday_text,

    },
    textContainer: {
        paddingLeft:8,
        flex:1
    },
    titleStyles: {
        fontSize:20,
        fontWeight: "400",
        color:colors.seconday_text,
        marginBottom:8
    },
    iconButtonStyles: {
        marginHorizontal:8
    }
})


type props = {
    value:string,
    keyName:string
}

export const EditableProperty = ({value, keyName}:props):JSX.Element=> {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyles}>
                {keyName}
            </Text>
            <View style={styles.valueContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyles}>
                        {value}
                    </Text>
                </View>
                <View style={styles.iconButtonStyles}>
                    <IconButton
                        onPress={()=>{}}
                    >
                        <EditIcon color={colors.seconday_text} size={18}/>
                    </IconButton>
                </View>
            </View>
        </View>
        
    )
}