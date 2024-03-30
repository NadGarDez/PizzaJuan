import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tabViewSceneProps } from "../../constants/sustituteTypes";

const styles =  StyleSheet.create(
    {
        container: {
            flex:1,
            marginBottom:16
        }
    }
);



export const ToggableList = (): JSX.Element => {

    const [itemSelected, setItemSelected] =  useState<number>();

    return (
        <View style={styles.container}>
            <Text>
                holix
            </Text>
        </View>
    )
}