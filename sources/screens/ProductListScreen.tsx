import React, { ReactElement } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { colors } from "../styles/colors";
import { HelloWorldComponent } from "../components/HelloWorldComponent";

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:colors.black_thin,
        },
        orderNowContainer:{
            height:50,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            borderBottomRightRadius:50,
            borderBottomLeftRadius:50
        },
        textStyles:{
            color: colors.text_contrast,
            fontSize:20,
        }
    }
)


export const ProductListScreen = (): ReactElement=>{
    return (
        <>
            <View style={styles.container}>
                <HelloWorldComponent sectionMessage="Lista de productos"/>
                <View style={styles.orderNowContainer}>
                    <Text style={styles.textStyles}>
                        Ordena ya
                    </Text>
                </View>
            </View>
        </>
    )
}