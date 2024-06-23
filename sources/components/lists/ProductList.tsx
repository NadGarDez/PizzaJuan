import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet , View} from "react-native";
import { ProductItem } from "../surfaces/ProductItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productsSelector } from "../../redux/productsReducer";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:8
        },
    }
)

export const ProductList = ():JSX.Element=> {

    const dispatch = useAppDispatch()
    const products  = useAppSelector(productsSelector)

    useEffect(
        ()=> {
            dispatch({
                type: 'REQUEST_PRODUCTS',
            })
        },
        []
    )

    return (
        <View style={styles.container}>
            <View >
                <FlatList
                    data={products ?? []}
                    renderItem={(props)=>(
                        <ProductItem 
                            {...props.item}
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