import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ToggableItem } from "../surfaces/ToggableItem";
import { colors } from "../../styles/colors";
import { toggableListItem } from "../../types/forms/generalFormTypes";

const styles =  StyleSheet.create(
    {
        container: {
            flex:1,
            marginBottom:16,
        },
        semiTransparentCircle: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#00000020",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        voidContainer: {
            height:200,
            width: '100%',
            flex:1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        secondaryKeys: {
            fontSize:14,
            fontWeight: "200",
            color:colors.seconday_text + 95
        },
    }
);

type props = {
    data: toggableListItem[],
    leftItem: ()=>JSX.Element,
    voidMessage:string,
    onSelect: (itemId: string)=> void,
    onDelete: (item:string) => void,
    itemSelected: string | null
}


export const ToggableList = ({data, voidMessage, onDelete, onSelect, itemSelected}:props): JSX.Element => {


    const voidList = ()=> (
        <View style={styles.voidContainer}>
            <Text style={styles.secondaryKeys}>{voidMessage}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={voidList}
                renderItem={
                    ({item, index})=> (
                        <ToggableItem 
                            key={`direction-${index}`}
                            onChangeSelect={onSelect}
                            data={item}
                            index={index}
                            active={itemSelected === item.ID}
                            onDelete={onDelete}
                        />
                    )
                }
                ListFooterComponent={
                    (
                        <View style={{marginBottom:10}}>
                        </View>
                    )
                }
            />
        </View>
    )
}