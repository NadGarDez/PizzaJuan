import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { toggableListItem } from "../../types/forms/generalFormTypes";

const styles = StyleSheet.create({
    baseContainer: {
        display:"flex",
        padding:8,
        borderRadius:5,
        borderStyle: "solid",
        borderWidth:1,
        backgroundColor:colors.white_card,
        marginBottom: 8
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    }

})

type props = {
    active: boolean,
    index:number,
    onChangeSelect: (index:number)=>void,
    data: toggableListItem;
    leftItem?: ()=>JSX.Element | null;
}

export const ToggableItem = (props:props):JSX.Element => {
    const {active, data, index, onChangeSelect, leftItem = null} = props;
    
    const activeStyles = !!active ? styles.activeContainerStyles : styles.unactiveContainerStyles;
    const onPress = ()=> {
        onChangeSelect(index);
    }

    return (
        <Pressable style={{...styles.baseContainer, ...activeStyles}} onPress={onPress}>
            <View style={styles.generalItemContainer}>
                <View style={styles.leftItemContainer}>
                    {
                        !!leftItem ? leftItem() : null
                    }
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.titleTextStyles}>
                        {data.name}
                    </Text>
                    {
                        Object.keys(data).map(
                            (item, index) => {
                                const time = new Date().getTime();
                                if(item !== "title") return (
                                    <View key={`locaiton-item-${index}-${time}`}>
                                        <Text style={styles.secondaryKeys}>
                                            {`${item}: ${data[item]}`}
                                        </Text>
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </View>
        </Pressable>
    )
}