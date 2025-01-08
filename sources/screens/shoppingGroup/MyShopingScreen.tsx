import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Platform, StyleSheet, View } from "react-native"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"
import { TransformedBottomCircle } from "../../components/surfaces/TransformedBottomCircle"
import { ShoppingItem } from "../../components/surfaces/ShoppingItem"
import { getOrderInformation } from "../../utils/apiRequests"
import { sessionTokenSelector } from "../../redux/SessionReducer"
import { useAppSelector } from "../../redux/hooks"
import { OrderFilterSelect } from "../../components/inputs/OrderFilterSelect"
import { Order } from "../../types/api/deliveryLocation"
import { useListLocalRequest } from "../../hooks/useListLocalRequest"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: "transparent",
            paddingHorizontal:16,
            paddingTop:Platform.select({
                android: 56,
                ios: 93
            }),
            paddingBottom: Platform.select({
                android: 16,
                ios: 32
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
        },
        loading: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 400,
            marginBottom: 16
        },
        
       
    }
);

export const MyShoppingScreen = ():JSX.Element=>{

    const token = useAppSelector(sessionTokenSelector);

    const [filter, setFilter] = useState<string>('all');

    const {refetch, responseObject, clear, reducerStatus, loadMore} =  useListLocalRequest<Order>(getOrderInformation);

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

    const onReachEnd = () => {
        if(reducerStatus !== 'LOADING' &&  !!responseObject?.data.next) {
            loadMore({
                token: token ?? '',
                url: responseObject.data.next
            })
        }
    }


    const onRefresh = () => {
        setFilter('all');
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

                        onEndReached={onReachEnd}
                                    
                        ListFooterComponent={
                            (
                                <>
                                     {
                                        reducerStatus === 'INITIAL' || reducerStatus === 'LOADING' ? (
                                            <View style={styles.loading}>
                                                <ActivityIndicator size={120} color={colors.principal}/>
                                            </View>
                                        ) : (
                                            <View style={{marginBottom:10}}>
                                            </View>
                                        )
                                    }
                                
                                </>
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
