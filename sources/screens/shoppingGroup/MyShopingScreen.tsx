import React, { useEffect, useState } from "react"
import { Dimensions, FlatList, Platform, StyleSheet, Text, View } from "react-native"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"
import { InProgressShoppingList } from "../../components/lists/InProgressShoppingList"
import { TabView, SceneMap } from 'react-native-tab-view';
import { FinishedShoppingList } from "../../components/lists/FinishedShoopingList"
import { TransformedBottomCircle } from "../../components/surfaces/TransformedBottomCircle"
import { DefaultAppTabBar } from "./DefaultAppTabBar"
import { ShoppingItem } from "../../components/surfaces/ShoppingItem"
import { useLocalRequest } from "../../hooks/useLocalRequest"
import { getOrderInformation } from "../../utils/apiRequests"
import { useAuth0 } from "react-native-auth0"
import { sessionTokenSelector } from "../../redux/SessionReducer"
import { useAppSelector } from "../../redux/hooks"
import { defaultApiResponse } from "../../types/api/defaultTypes"
import { OrderFilterSelect } from "../../components/inputs/OrderFilterSelect"

const renderScene = SceneMap({
  first: InProgressShoppingList,
  second: FinishedShoppingList,
});

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            paddingHorizontal:16,
            paddingVertical:Platform.select({
                android: 56,
                ios: 93
            }),
        },
        card: {
            flex:1,
            backgroundColor:colors.white_card,
            borderRadius:12,
            ...shadows.principalShadow
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
        section: {
            flex:1,
            flexDirection:"row",
            justifyContent: "center"
        }  ,
        titleFonts: {
            fontSize:16,
            fontWeight: "200",
            color:colors.seconday_text,
            textAlign:"center"
        },
        tabBarStyle: {
            backgroundColor: colors.white_card , 
            height:40,
            borderTopEndRadius:12,
            borderTopLeftRadius:12
        },
        bottomLine: {
            height:20,
            borderStyle: "solid",
            borderBottomColor: "transparent",
            borderLeftColor:"transparent",
            borderRightColor: "transparent",
            borderTopColor: colors.seconday_text + "30",
            borderWidth: 1,
        }
        
       
    }
)

const staticData = [
    {
        pedido:"78fdjals8hfds",
        amount:50,
        status:"Enviando",
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        lastAcutalization: new Date().toLocaleTimeString()
    },
    {
        pedido:"HE34hhfjdkals",
        amount:50,
        status:"Procesando",
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        lastAcutalization: new Date().toLocaleTimeString()
    },
]

export const MyShoppingScreen = ():JSX.Element=>{

    const token = useAppSelector(sessionTokenSelector);

    const [filter, setFilter] = useState<'all' | 'confirmed' | 'rejected' | 'finished' | 'created'>('all');

    const {refetch, responseObject} = useLocalRequest<object>(getOrderInformation);

    console.log(responseObject?.data);

    useEffect(
        () => {
            refetch(
                {
                    token: token ?? '',
                    filter
                }
            )
        },
        [filter]
    )
    
    
    return (
        <>  
            <TransformedSquare/> 
            <TransformedBottomCircle/>
            <View style={styles.container}>
                <View style={styles.card}>
                    <OrderFilterSelect 
                        onChange={(code: string)=>{
                            console.log('code')
                        }}

                        onReload={
                            () => {
                                console.log('reload')
                            }
                        }
                    
                    />
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
                    <View style={styles.bottomLine}>

                    </View>
                </View>
            </View>
        </>
       
    )
}
