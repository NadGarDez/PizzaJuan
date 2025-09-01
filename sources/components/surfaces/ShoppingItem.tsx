import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconWithTextElement } from "./IconWithTextElement";
import { LocationIcon } from "../icons/LocationIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import { MyShoppingStackProps } from "../../navigation/Stacks/MyShopingStack";
import { useNavigation } from "@react-navigation/native";
import { Order } from "../../types/api/deliveryLocation";
import { getImageFromOrderItems } from "../../utils/complexSelectors";
import {  OrderTotal } from "../../utils/calculations";

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            paddingVertical: 16,
            paddingHorizontal: 8,
            display: "flex",
            flexDirection: "column",
            borderStyle: "solid",
            borderWidth: 1,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: colors.seconday_text + "30",
        },
        imageContainer: {
            display: "flex",
            flexGrow: 2,
            padding: 4,
        },
        informationContainer: {
           display: "flex",
           flexGrow:1,
            paddingRight: 4
        },
        imageStyles: {
            height: 110
        },
        titleContainerAndFavorite: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        titleContainer: {
            flex: 8
        },
        priceContainerAndCount: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8
        },
        priceAndFavoriteContainer: {
            flex: 1,
            justifyContent: "center"
        },
        titleTextStyles: {
            fontSize: 18,
            fontWeight: "700",
            color: colors.principal,
        },
        dolarPrice: {
            marginRight: 4,
            fontSize: 14,
            fontWeight: "600",
            color: colors.seconday_text
        },
        bsPrice: {
            fontSize: 12,
            fontWeight: "300",
            color: colors.seconday_text
        },
        flexRowStyles: {
            flexDirection: "row",
        },
        priceContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "baseline"
        },
        countSelector: {
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row"
        },
        statusTextStyle: {
            fontSize: 12,
            fontWeight: "400",
            textAlign: "center",
            color: colors.seconday_text,
        },
        statusContainer: {
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.seconday_text + "30",
            padding: 8
        },
        dateStyles: {
            fontSize: 12,
            fontWeight: "400",
            color: colors.seconday_text
        }
    }
)

type props = {
    pedido: string,
    amount: number,
    status: string,
    image: string,
    lastAcutalization: string
}

type ProductListScreenPropType = StackNavigationProp<MyShoppingStackProps, "MY_SHOPING_SCREEN">;

export const ShoppingItem = (props: Order): JSX.Element => {

    const { pk, delivery_location, worker, order_items } = props;
    const { navigate } = useNavigation<ProductListScreenPropType>();

    const nav = () => {
        navigate("INVOICE_SCREEN", props)
    }

    return (
       <View style={styles.container}>

        <Pressable
           onPress={nav}
        >
            {
                ({pressed})=>(
                    <View style={
                        {
                            opacity: pressed ? 0.7 : 1
                        }
                    }>
                        <View style={styles.flexRowStyles}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri:getImageFromOrderItems(order_items)}} style={styles.imageStyles} resizeMode='contain'/>  
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
                                               {OrderTotal(order_items).toFixed(2)}$
                                            </Text>
                                            <Text style={styles.bsPrice}>
                                                Ref. {(Number(OrderTotal(order_items).toFixed(2)) * 36).toFixed(2)}Bs
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
       </View>

    )
}