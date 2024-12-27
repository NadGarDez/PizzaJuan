import React, { useEffect, useState } from "react"
import { FlatList, Platform, StyleSheet, View } from "react-native"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"
import { TransformedBottomCircle } from "../../components/surfaces/TransformedBottomCircle"
import { ShoppingItem } from "../../components/surfaces/ShoppingItem"
import { useLocalRequest } from "../../hooks/useLocalRequest"
import { getOrderInformation } from "../../utils/apiRequests"
import { sessionTokenSelector } from "../../redux/SessionReducer"
import { useAppSelector } from "../../redux/hooks"
import { ListResponse } from "../../types/api/defaultTypes"
import { OrderFilterSelect } from "../../components/inputs/OrderFilterSelect"
import { Order } from "../../types/api/deliveryLocation"

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

    const [filter, setFilter] = useState<string>('all');

    const {refetch, responseObject, clear} = useLocalRequest<ListResponse<Order>>(getOrderInformation);

    const onChange = (code:string) => {
        setFilter(code);
    }

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

    const clearAndRefetch = () => {
        clear();
        refetch(
            {
                token: token ?? '',
                filter
            }
        )
    }
    
    return (
        <>  
            <TransformedSquare/> 
            <TransformedBottomCircle/>
            <View style={styles.container}>
                <View style={styles.card}>
                    <OrderFilterSelect 
                        onChange={onChange}

                        onReload={
                           clearAndRefetch
                        }
                    
                    />
                    <FlatList
                        data={responseObject?.data.results ?? []}
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
