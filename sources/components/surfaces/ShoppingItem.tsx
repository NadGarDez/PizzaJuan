import React from "react";
import { Dimensions, Image, Pressable, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { IconWithTextElement } from "./IconWithTextElement";
import { LocationIcon } from "../icons/LocationIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import { MyShoppingStackProps } from "../../navigation/Stacks/MyShopingStack";
import { useNavigation } from "@react-navigation/native";

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
            fontWeight: "200",
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


export const ShoppingItem = ({image, amount, pedido, lastAcutalization, status}:props):JSX.Element=>{

    const {navigate} = useNavigation<ProductListScreenPropType>()

    const nav = ()=> {
        navigate("INVOICE_SCREEN", {orderId:"123"})
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
                                <Image source={{uri:image}} style={styles.imageStyles}/> 
                            </View>
                            <View style={styles.informationContainer}>
                                    
                                <View style={styles.priceAndFavoriteContainer}>
                                    <View style={styles.titleContainerAndFavorite}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.titleTextStyles}>
                                                Pedido {pedido}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <IconWithTextElement
                                        color="#00000020"
                                        icon={<LocationIcon color={colors.white_card} size={14}/>}
                                        text="Urbanizacion Guarico Apure, Calle Guarico, casa #9"
                                    />
                                    <View style={styles.priceContainerAndCount}>
                                        <View style={styles.priceContainer}>
                                            <Text style={styles.dolarPrice}>
                                                {amount}$
                                            </Text>
                                            <Text style={styles.bsPrice}>
                                                Ref. {amount*36}Bs
                                            </Text>
                                        </View>
                                        <View style={styles.countSelector}>
                                            <View style={styles.statusContainer}>
                                                <Text style={styles.statusTextStyle}>{status}</Text>
                                                <Text style={styles.dateStyles}>
                                                   {lastAcutalization}
                                                </Text>
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