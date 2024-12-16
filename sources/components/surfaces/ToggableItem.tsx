import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { toggableListItem } from "../../types/forms/generalFormTypes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CloseIcon } from "../icons/CloseIcons";

const styles = StyleSheet.create({
    baseContainer: {
        display:"flex",
        padding:8,
        borderRadius:5,
        borderStyle: "solid",
        borderWidth:1,
        backgroundColor:colors.white_card,
    },
    activeContainerStyles: {
        borderColor: colors.principal,
        borderWidth:2,
    },
    unactiveContainerStyles: {
        borderColor: colors.seconday_text + 80
    },
    bodyContainer: {
        display: "flex",
        flexGrow: 6,
        flexDirection:'column'
    },
    titleTextStyles: {
        color:colors.principal,
        fontSize:18,
        fontWeight:"500"
    },
    secondaryKeys: {
        marginTop:2,
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    generalItemContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    leftItemContainer: {
        position: 'absolute',
        right: 8,
        height: '100%',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    semiTransparentCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.error + 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

})

type props = {
    active: boolean,
    index:number,
    onChangeSelect: (item:string)=>void,
    data: toggableListItem;
    onDelete: (item:string) => void
}
 
export const ToggableItem = (props:props):JSX.Element => {
    const {active, data: {name, ...rest}, onChangeSelect, onDelete} = props;
    
    const activeStyles = !!active ? styles.activeContainerStyles : styles.unactiveContainerStyles;
    const onPress = ()=> {
        onChangeSelect(rest.ID);
    }

    return (
        <View style={{marginBottom: 8}}>
            <View style={styles.leftItemContainer}>
                    <TouchableOpacity style={styles.semiTransparentCircle} onPress={
                        () => {
                            onDelete(rest.ID)
                        }
                    }>
                        <CloseIcon color="white"/>
                    </TouchableOpacity>
                </View>
            <Pressable style={{...styles.baseContainer, ...activeStyles}} onPress={onPress}>
                <View style={styles.generalItemContainer}>
                
                    <View style={styles.bodyContainer}>
                        {
                            name !== undefined ? (
                                <Text style={styles.titleTextStyles}>
                                    {name}
                                </Text>
                            ) : null
                        }
                        {
                            Object.keys(rest).map(
                                (item, index) => {
                                    const time = new Date().getTime();
                                    if(item !== "title") return (
                                        <View key={`locaiton-item-${index}-${time}`}>
                                            <Text style={styles.secondaryKeys}>
                                                {`${item}: ${rest[item]}`}
                                            </Text>
                                        </View>
                                    )
                                }
                            )
                        }
                    </View>
                    
                </View>
            </Pressable>
        </View>
    )
}