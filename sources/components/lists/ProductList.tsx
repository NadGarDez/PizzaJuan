import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet , View} from "react-native";
import { ProductItem } from "../surfaces/ProductItem";
import { getProductList } from "../../utils/apiRequests";
import { BASE_API_URL } from "../../constants/apiConstants";
import { useAuth0 } from "react-native-auth0";
import { useAppSelector } from "../../redux/hooks";
import { sessionObjectSelector } from "../../redux/SessionReducer";
import { baseProduct } from "../../types/api/productTypes";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:8
        },
    }
)

type ItemProps = {categoryName: string, active:false};

export const ProductList = ():JSX.Element=> {

    const [products, setProducts] = useState<baseProduct[]>([]);
    const {sessionToken} = useAppSelector(sessionObjectSelector);

    const fetchProducts = async ()=>{
        const {data, status} = await getProductList("todos", sessionToken ?? '');
        console.log(data, status)
        setProducts(data.results)
    }

    useEffect(
        ()=> {
            fetchProducts()
        },
        []
    )

    return (
        <View style={styles.container}>
            <View >
                <FlatList
                    data={products}
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