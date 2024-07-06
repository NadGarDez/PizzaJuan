import React, { useState } from "react";
import { FlatList, StyleSheet, Text , FlatListProps, View, Dimensions} from "react-native";
import { CategoryItem } from "../surfaces/CategoryItem";
import { colors } from "../../styles/colors";
import { ProductItem } from "../surfaces/ProductItem";
import { CarItem } from "../surfaces/CarItem";
import { DireactionSelector } from "../surfaces/DirectionSelector";
import { shadows } from "../../styles/shadow";
import { baseProduct, shoppingCarItemType } from "../../types/api/productTypes";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:8,
            display:"flex",
            height:Dimensions.get("window").height * 0.45
        },
        expandedContainer: {
            marginTop:8,
            flex:1
        },
        listContainer: {
            flex:1,
            borderRadius:12,
            backgroundColor:colors.white_card,
            ...shadows.principalShadow
        },
        calculatorContainer: {
            flex:1,
        },
        titleContainer: {
            display: "flex",
            width:'100%',
            paddingVertical: 8,
            justifyContent: "center",
            flexDirection: "row",
            borderStyle:'solid',
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor:colors.seconday_text + "30",
            borderWidth:1
        },
        titleFonts: {
            fontSize:16,
            fontWeight: "200",
            color:colors.seconday_text,
        },
        bottomSeparator: {
            height:20,
            borderStyle:'solid',
            borderTopColor: colors.seconday_text + "30",
            borderRightColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor:"transparent",
            borderWidth:1

        }

    }
)


type listProps = {
    onPress:()=>void,
    data: shoppingCarItemType[],
    readonly?:boolean,
    expand?:boolean
};

export const CarProductList = ({onPress, data, readonly = false, expand = false}:listProps):JSX.Element=> {

    const onPressItem = (index:number)=>{
        onPress()
    }

    return (
        <View style={!!expand ? styles.expandedContainer: styles.container}>
            <View style={styles.listContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleFonts}>
                        {data.length} Elementos agregados
                    </Text>
                </View>
                 <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={(props)=>(
                        <CarItem 
                            product={props.item} onPressItem={onPressItem} last={props.index === (data.length - 1 )} readonly={readonly}
                        />
                    )}
                    
                    ListFooterComponent={
                        (
                            <View style={{marginBottom:10,}}>
                            </View>
                        )
                    }
                />
                <View
                
                    style={styles.bottomSeparator}
                />
            </View>
            
        </View>
    )
}