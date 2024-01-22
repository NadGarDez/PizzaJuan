import React, { useState } from "react";
import { FlatList, StyleSheet, Text , FlatListProps, View} from "react-native";
import { CategoryItem } from "../surfaces/CategoryItem";
import { colors } from "../../styles/colors";
import { ProductItem } from "../surfaces/ProductItem";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:16
        },
        titleListContainer: {
            paddingLeft:16
        },
        titleListTextStles: {
            fontSize:25,
            fontWeight: "700",
            color:colors.seconday_text
        },
        listContainer: {
            marginTop:16,
        }

    }
)

type ItemProps = {categoryName: string, active:false};

export const ProductList = ():JSX.Element=> {

    const staticData = [
        {
            productName:"Pizza numero 1",
            price:12,
            favorite:true,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!"
        },
        {
            productName:"Pizza numero 2",
            price:12,
            favorite:false,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!"
        },
        {
            productName:"Pizza numero 3",
            price:12,
            favorite:false,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!"
        },
        {
            productName:"Pizza numero 4",
            price:12,
            favorite:false,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!"
        },
        {
            productName:"Pizza numero 5",
            price:12,
            favorite:false,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan! fdasfdsafdsafdsafdsafdsafdsafsafdsafdsafdsafdsafdsafafdsas"
        },
    ]


    const onPressItem = (index:number)=>{}


    return (
        <View style={styles.container}>
            <View style={styles.titleListContainer}>
                <Text style={styles.titleListTextStles}>
                    Productos
                </Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={staticData}
                    renderItem={(props)=>(
                        <ProductItem 
                            {...props.item} onPressItem={onPressItem}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={
                        (
                            <View style={{marginBottom:10}}>
                            </View>
                        )
                    }
                />
            </View>
            
        </View>
    )
}