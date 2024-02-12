import React, { useState } from "react";
import { FlatList, StyleSheet, Text , FlatListProps, View, Dimensions} from "react-native";
import { CategoryItem } from "../surfaces/CategoryItem";
import { colors } from "../../styles/colors";
import { ProductItem } from "../surfaces/ProductItem";
import { CarItem } from "../surfaces/CarItem";
import { DireactionSelector } from "../surfaces/DirectionSelector";
import { shadows } from "../../styles/shadow";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:8,
           
            display:"flex",
            height:Dimensions.get("window").height * 0.45
        },
        titleListContainer: {
            paddingLeft:16
        },
        titleListTextStles: {
            color:colors.seconday_text,
            fontSize:16,
            fontWeight:"600"
        },
        listContainer: {
            flex:1,
            borderRadius:12,
            backgroundColor:colors.white_card,
            ...shadows.principalShadow
        },
        calculatorContainer: {
            flex:1,
        }

    }
)


type ItemProps = {categoryName: string, active:false};

export const CarProductList = ():JSX.Element=> {

    const staticData = [
        {
            productName:"Pizza numero 1",
            price:12,
            favorite:true,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
            creator: "PizzaJuan",
            numberOfItems:2
        },
        {
            productName:"Pizza numero 2",
            price:12,
            favorite:false,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
            likes:12,
            description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
            creator: "PizzaJuan",
            numberOfItems:2
        },
    ]


    const onPressItem = (index:number)=>{}


    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={staticData}
                    renderItem={(props)=>(
                        <CarItem 
                            {...props.item} onPressItem={onPressItem}
                        />
                    )}
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