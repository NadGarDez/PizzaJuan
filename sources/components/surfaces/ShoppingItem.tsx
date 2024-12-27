import React from "react";
import { Dimensions, Image, Pressable, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { IconWithTextElement } from "./IconWithTextElement";
import { LocationIcon } from "../icons/LocationIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import { MyShoppingStackProps } from "../../navigation/Stacks/MyShopingStack";
import { useNavigation } from "@react-navigation/native";
import { Order, OrderSkeleton } from "../../types/api/deliveryLocation";
import { BASE_URL } from "../../constants/apiConstants";

const styles = StyleSheet.create(
    {
        container: {
            width:Dimensions.get("screen").width - 32,
            paddingVertical:16,
            paddingHorizontal:8,
            display: "flex",
            flexDirection: "column",
            borderStyle:"solid",
            borderWidth:1,
            borderTopColor:"transparent",
            borderLeftColor:"transparent",
            borderRightColor:"transparent",
            borderBottomColor:colors.seconday_text + "30",
        },
        imageContainer: {
            flex:1,
            padding:4,
            justifyContent: "center"
        },
        informationContainer: {
            flex:2,
            paddingRight:4
        },
        imageStyles: {
           height:110
        },
        titleContainerAndFavorite: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },  
        titleContainer: {
            flex:8
        },
        priceContainerAndCount: {
            display:"flex",
            flexDirection: "row",
            alignItems:"center",
            marginTop:8
        },
        priceAndFavoriteContainer: {
            flex:1,
            justifyContent:"center"
        },
        titleTextStyles: {
            fontSize:18,
            fontWeight: "700",
            color:colors.principal,
        },
        dolarPrice: {
            marginRight:4,
            fontSize:14,
            fontWeight: "600",
            color:colors.seconday_text
        },
        bsPrice: {
            fontSize:12,
            fontWeight: "300",
            color:colors.seconday_text
        },
        flexRowStyles: {
            flex:1,
            flexDirection: "row",
        },
        priceContainer:{
            flex:1,
            flexDirection:"row",
            alignItems:"baseline"
        },
        countSelector: {
            display: "flex",
            justifyContent:"flex-end",
            flexDirection:"row"
        },
        statusTextStyle: {
            fontSize:12,
            fontWeight: "400",
            textAlign:"center",
            color:colors.seconday_text,
        },
        statusContainer: {
            borderRadius:12,
            borderWidth:1,
            borderColor: colors.seconday_text + "30",
            padding:8
        },
        dateStyles: {
            fontSize:12,
            fontWeight: "400",
            color:colors.seconday_text
        }
    }
)

type props =  {
    pedido:string,
    amount:number,
    status:string,
    image:string,
    lastAcutalization: string
}

type ProductListScreenPropType = StackNavigationProp<MyShoppingStackProps,"MY_SHOPING_SCREEN">;


const getImage = (value:string): string => {
    const {products} = JSON.parse(value) as OrderSkeleton;
    return `${BASE_URL}${Object.values(products)[0].principal_image}`
}

const getTotal = (value:string): number => {
    const {totals: {total}} = JSON.parse(value) as OrderSkeleton;
    return total
}

export const ShoppingItem = (props:Order):JSX.Element => { 

    const {pk, order_skeleton,delivery_location, worker } = props;
    const {navigate} = useNavigation<ProductListScreenPropType>();

    const nav = ()=> {
        navigate("INVOICE_SCREEN", {orderId:`${pk}`, aditionalInfo:`${pk}`})
    }

    return (
        <Pressable
           onPress={nav}
        >
            {
                ({pressed})=>(
                    <View style={
                        {
                            ...styles.container,
                            opacity: pressed ? 0.7 : 1
                        }
                    }>
                        <View style={styles.flexRowStyles}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri:getImage(order_skeleton)}} style={styles.imageStyles} resizeMode='contain'/> 
                            </View>
                            <View style={styles.informationContainer}>
                                    
                                <View style={styles.priceAndFavoriteContainer}>
                                    <View style={styles.titleContainerAndFavorite}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.titleTextStyles}>
                                                Pedido #{pk}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <IconWithTextElement
                                        color="#00000020"
                                        icon={<LocationIcon color={colors.white_card} size={14}/>}
                                        text={`${delivery_location.name}. ${delivery_location.description}\n#${delivery_location.plus_code}`}
                                    />
                                    <Text style={styles.dateStyles}>Ultima actualizacion: {new Date(worker.updated_at).toLocaleTimeString()}</Text>
                                    <View style={styles.priceContainerAndCount}>
                                        <View style={styles.priceContainer}>
                                            <Text style={styles.dolarPrice}>
                                                {getTotal(order_skeleton)}$
                                            </Text>
                                            <Text style={styles.bsPrice}>
                                                Ref. {getTotal(order_skeleton)*36}Bs
                                            </Text>
                                        </View>
                                        <View style={styles.countSelector}>
                                            <View style={styles.statusContainer}>
                                                <Text style={styles.statusTextStyle}>{worker.order_status.name}</Text>
                                            </View>
                                        </View>
                                    </View> 
                                </View>
                                        
                            </View>
                                    
                        </View>
                    </View>
                )
            }
        </Pressable>
    )
}