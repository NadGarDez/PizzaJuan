import React, { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
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
            backgroundColor: colors.blackTwentyPercent,
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
        loading: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            marginBottom: 16
        },
    }
);

type props = {
    data: toggableListItem[],
    voidMessage:string,
    onSelect: (itemId: string)=> void,
    onDelete: (item:string) => void,
    itemSelected: string | null,
    onReachEnd: () => void,
    loading: boolean
}


export const ToggableList = ({data, voidMessage, onDelete, onSelect, loading, itemSelected, onReachEnd}:props): JSX.Element => {


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
                style={{
                    minHeight: 400
                }}
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
                onEndReached={onReachEnd}
                ListFooterComponent={
                    (
                        <View style={{marginBottom:10}}>
                            {
                                loading === true ? (
                                    <View style={styles.loading}>
                                    <ActivityIndicator size={60} color={colors.principal}/>
                                </View>
                                ) : null
                            }
                        </View>
                    )
                }
            />
        </View>
    )
}