import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import { HelloWorldComponent } from "../../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../constants/querys";

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: colors.black
        }
    }
)

type ProductScreenPropTypes = NativeStackScreenProps<ProductStackType,"PRODUCT_SCREEN">

export const ProductScreen = ({navigation}:ProductScreenPropTypes):JSX.Element =>{

    const {loading, error, data} = useQuery(GET_PRODUCTS);

    console.log(loading, error, data);

    const onPress =()=>{
        navigation.navigate("PRODUCT_SELLER_SCREEN", {sellerId:"123"});
    }

    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Pantalla de Producto" onPress={onPress}/>
        </View>
    )
}