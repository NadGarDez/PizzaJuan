import React, { useState } from "react";
import { FlatList, StyleSheet, Text , FlatListProps, View} from "react-native";
import { CategoryItem } from "../surfaces/CategoryItem";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create(
    {
        container: {
            marginTop:16
        },
        titleListContainer: {
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            paddingLeft:16
        },
        titleListTextStles: {
            fontSize:25,
            fontWeight: "700",
            color:colors.seconday_text
        },
        listContainer: {
            marginTop:16
        }

    }
)

type ItemProps = {categoryName: string, active:false};

export const CategoryList = ():JSX.Element=> {

    const staticData = [
        {
            categoryName:"Pizzas",
            active:false,
            image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg"
        },
        {
            categoryName:"Bebidas",
            active:false,
            image:"https://freerangestock.com/sample/140086/colorful-drinks-with-straws-on-a-white-background.jpg"
        },
        {
            categoryName:"Snacks",
            active:false,
            image:"https://media.istockphoto.com/id/1263013701/photo/salty-snacks-assortment-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cWrHEFGrJR6K_zSm8URbDQNw0U9mengbnX9zuGTVgeI="
        },
        {
            categoryName:"combos",
            active:true,
            image:"https://img.freepik.com/premium-photo/set-fast-food-white-background_1023984-561.jpg"
        }
    ]


    const [selectedItem, setSelectedItem] = useState<number>(0);

    const onPressItem = (index:number)=>setSelectedItem(index);

    const Item = (props:{categoryName:string,  image:string, index:number}) =>{
        return (
            <CategoryItem {...props} onPressItem={onPressItem} active={selectedItem===props.index}/>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleListContainer}>
                <Text style={styles.titleListTextStles}>
                    Categorias
                </Text>
            </View>
            <View style={styles.listContainer}>
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