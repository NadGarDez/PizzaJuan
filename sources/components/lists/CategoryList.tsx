import React, { useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator} from "react-native";
import { CategoryItem } from "../surfaces/CategoryItem";
import { colors } from "../../styles/colors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { categoriesErrorSelector, categoryReducersStaus, categorySelector } from "../../redux/categorySlicer";
import { ErrorModal } from "../surfaces/ErrorModal";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:16
        },
        loading: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginBottom: 16
        }
    }
)

type ItemProps = {categoryName: string, active:false};

const allCategory = {
    pk: 0,
    name: 'Todos'
}

export const CategoryList = ():JSX.Element=> {

    const [selectedItem, setSelectedItem] = useState<number>(0);

    const dispatch = useAppDispatch();

    const categories = useAppSelector(categorySelector)
    const status = useAppSelector(categoryReducersStaus)
    const error = useAppSelector(categoriesErrorSelector)

    const onPressItem = (pk:number)=>{
        setSelectedItem(pk);
        dispatch({
            type: 'REQUEST_PRODUCTS',
            payload:pk
        })
    };

    const Item = (props:{name:string, index:number, pk:number}) =>{
        return (
            <CategoryItem {...props} onPressItem={onPressItem} active={selectedItem===props.pk}/>
        )
    }

    return (
        <View style={styles.container}>
            {
                status === 'SUCCESS' ? (
                    <FlatList
                    data={
                        [
                            allCategory,
                            ...categories as any[]
                        ]
                    }
                    renderItem={(props)=><Item {...props.item} index={props.index}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                ): null
            }

            {
                status === 'INITIAL' || status === 'LOADING' ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size={20} color={colors.principal}/>
                    </View>
                ) : null
            }

            {
                status === 'ERROR' ? (
                    <ErrorModal 
                        title="Error cargando las categorias"
                        subtitle={error as string}
                    />
                ) : null
            }
                
        </View>
    )
}