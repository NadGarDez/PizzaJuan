import React, { useState } from "react";
import { FlatList, StyleSheet, Text , FlatListProps, View} from "react-native";
import { CategoryItem } from "../surfaces/CategoryItem";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:16
        },
    }
)

type ItemProps = {categoryName: string, active:false};

export const CategoryList = ():JSX.Element=> {

    const staticData = [
        {
            categoryName:"Pizzas",
            active:false,
        },
        {
            categoryName:"Bebidas",
            active:false,
        },
        {
            categoryName:"Snacks",
            active:false,
        },
        {
            categoryName:"Combos",
            active:true,
        }
    ]


    const [selectedItem, setSelectedItem] = useState<number>(0);

    const onPressItem = (index:number)=>setSelectedItem(index);

    const Item = (props:{categoryName:string, index:number}) =>{
        return (
            <CategoryItem {...props} onPressItem={onPressItem} active={selectedItem===props.index}/>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={staticData}
                    renderItem={(props)=><Item {...props.item} index={props.index}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}