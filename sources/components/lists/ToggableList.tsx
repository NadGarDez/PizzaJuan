import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ToggableItem } from "../surfaces/ToggableItem";
import { DESCRIPTION, PLUS_CODE } from "../../constants/userConfigurationConstants";
import { LocationIcon } from "../icons/LocationIcon";
import { colors } from "../../styles/colors";

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
const staticValues = [
    {
        title: 'Direccion 1',
        [PLUS_CODE]: 'JJXX+HR8',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 2',
        [PLUS_CODE]: 'JJXX+HRR',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 3',
        [PLUS_CODE]: 'JJXX+HR0',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 4',
        [PLUS_CODE]: 'JJXX+HR1',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 5',
        [PLUS_CODE]: 'JJXX+HR0',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 6',
        [PLUS_CODE]: 'JJXX+HR1',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 7',
        [PLUS_CODE]: 'JJXX+HR0',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 8',
        [PLUS_CODE]: 'JJXX+HR1',
        [DESCRIPTION]: 'Esta es una direccion',
    }


]


export const ToggableList = (): JSX.Element => {

    const [itemSelected, setItemSelected] =  useState<number>(0);

    const onChangeSelect = (index:number) => setItemSelected(index);

    const leftItem = ()=> {
        return (
            <View style={styles.semiTransparentCircle}>
                <LocationIcon color={colors.white_card}/>
            </View>
        )
    }

    const voidList = ()=> (
        <View style={styles.voidContainer}>
            <Text style={styles.secondaryKeys}>No hay direcciones disponibles</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={[]}
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