import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloWorldComponent } from "../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../navigation/ProductStack";

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

type SellerScreenPropsType = NativeStackScreenProps<ProductStackType, "PRODUCT_SELLER_SCREEN">

export const SellerScreen = ({navigation}:SellerScreenPropsType):JSX.Element=>{
    const onPress = ()=> {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Ventana de vendedor" onPress={onPress}/>
        </View>
    )
}