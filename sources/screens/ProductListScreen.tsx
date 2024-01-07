import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { colors } from "../styles/colors";
import { HelloWorldComponent } from "../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../navigation/ProductStack";

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

type ProductListScreenPropType = NativeStackScreenProps<ProductStackType,"PRODUCT_LIST_SCREEN">


export const ProductListScreen = ({navigation}:ProductListScreenPropType): JSX.Element=>{

    const onPress = ():void=>{
       navigation.navigate("PRODUCT_SCREEN", {productId:"123"});
    }

    return (
        <>
            <View style={styles.container}>
                <HelloWorldComponent sectionMessage="Lista de productos" onPress={onPress}/>
            </View>
        </>
    )
}