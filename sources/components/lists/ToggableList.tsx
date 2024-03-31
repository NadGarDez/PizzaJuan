import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { ToggableItem } from "../surfaces/ToggableItem";
import { DESCRIPTION, PLUS_CODE } from "../../constants/userConfigurationConstants";

const styles =  StyleSheet.create(
    {
        container: {
            marginBottom:16
        }
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
    }

]


export const ToggableList = (): JSX.Element => {

    const [itemSelected, setItemSelected] =  useState<number>(0);

    const onChangeSelect = (index:number) => setItemSelected(index);

    return (
        <View style={styles.container}>
            {
                staticValues.map(
                    (item, index) => (
                        <ToggableItem 
                            key={`direction-${index}`}
                            onChangeSelect={onChangeSelect}
                            data={item}
                            index={index}
                            active={itemSelected === index}
                        />
                    )
                )
            }
            
        </View>
    )
}