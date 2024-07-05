import React from "react";
import { ActivityIndicator, FlatList, StyleSheet , Text, View} from "react-native";
import { ProductItem } from "../surfaces/ProductItem";
import {  useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productGeneralReducerSelector, productReducersStaus, productsErrorTextSelector, productsSelector } from "../../redux/productsSlicer";
import { colors } from "../../styles/colors";
import { ErrorModal } from "../surfaces/ErrorModal";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:8,
            flex:1
        },
        loading: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            marginBottom: 16
        },
        litleLoading: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            marginBottom: 16
        },
        emptyComponent: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200
        },
        emptyText: {
            fontSize:14,
            fontWeight: "200",
            color:colors.seconday_text,
        }
    }
)

const EmptyComponent = ():JSX.Element => (
    <View style={styles.emptyComponent}>
        <Text style={styles.emptyText}>No se encontraron resultados para esta busqueda</Text>
    </View>
)

const FooterComponent = ({status}:{status:string}):JSX.Element => (
    <>
        {
            status === 'N_LOADING' ? (
                <View style={styles.litleLoading}>
                    <ActivityIndicator size={60} color={colors.principal}/>
                </View>
            ): (
                <View style={{marginBottom:10}}/>
            )
        }
    </>
)

export const ProductList = ():JSX.Element=> {

    const products  = useAppSelector(productsSelector)
    const status = useAppSelector(productReducersStaus)
    const error = useAppSelector(productsErrorTextSelector)
    const dispatch = useAppDispatch()

    const manageNext = ()=> {
        if(status === 'SUCCESSED') {
            dispatch({
                type: 'N_REQUEST_PRODUCT',
            })
        }   
    }

    const manageRefresh = ()=> {
    }

    return (
        <View style={styles.container}>
            {
                status === 'SUCCESSED' || status === 'N_LOADING' ? (
                    <FlatList
                        data={products ?? []}
                        renderItem={(props)=>(
                            <ProductItem 
                                {...props.item}
                            />
                        )}
                        ListEmptyComponent={
                            EmptyComponent
                        }
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={
                           <FooterComponent status={status} />
                        }
                        onEndReached={manageNext}
                        onRefresh={manageRefresh}
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
            {
                status === 'ERROR' ? (
                    <ErrorModal 
                        title="Error cargando la lista de productos"
                        subtitle={error as string}
                    />
                ): null
            }
        </View>
    )
}