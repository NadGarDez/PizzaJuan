import React from "react";
import { ActivityIndicator, FlatList, StyleSheet , View} from "react-native";
import { ProductItem } from "../surfaces/ProductItem";
import {  useAppSelector } from "../../redux/hooks";
import { productReducersStaus, productsSelector } from "../../redux/productsSlicer";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:8
        },
        loading: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            marginBottom: 16
        }
    }
)

export const ProductList = ():JSX.Element=> {

    const products  = useAppSelector(productsSelector)
    const status = useAppSelector(productReducersStaus)

    return (
        <View style={styles.container}>

            {
                status === 'SUCCESS' ? (
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
                ) : null
            }

            {
                status === 'INITIAL' || status === 'LOADING' ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size={60} color={colors.principal}/>
                    </View>
                ) : null
            }
        
        </View>
    )
}