import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ToggableItem } from "../surfaces/ToggableItem";
import { colors } from "../../styles/colors";
import { toggableListItem } from "../../types/forms/generalFormTypes";

const styles =  StyleSheet.create(
    {
        container: {
            marginBottom:16,
            maxHeight: '80%'
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
    voidMessage:string
}


export const ToggableList = ({data, voidMessage, leftItem}:props): JSX.Element => {

    const [itemSelected, setItemSelected] =  useState<number>(0);

    const onChangeSelect = (index:number) => setItemSelected(index);

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
                            onChangeSelect={onChangeSelect}
                            data={item}
                            index={index}
                            active={itemSelected === index}
                            leftItem={leftItem}
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