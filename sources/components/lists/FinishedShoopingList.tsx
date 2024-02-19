import React from "react";
import { FlatList, View } from "react-native";
import { ShoppingItem } from "../surfaces/ShoppingItem";

const staticData = [
    {
        pedido:"78fdjals8hfds",
        amount:50,
        status:"Entregada",
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        lastAcutalization: new Date().toLocaleTimeString()
    },
    {
        pedido:"HE34hhfjdkals",
        amount:50,
        status:"Entregada",
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        lastAcutalization: new Date().toLocaleTimeString()
    },
]

export const FinishedShoppingList = ()=> {



    return (
        <FlatList
            data={staticData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
                <ShoppingItem {...item}/>
            )}
                        
            ListFooterComponent={
                (
                    <View style={{marginBottom:10}}>
                    </View>
                )
            }
        />
    )
}