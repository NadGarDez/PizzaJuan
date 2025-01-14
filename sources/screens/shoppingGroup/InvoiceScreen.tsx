import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare";
import { CarProductList } from "../../components/lists/CarProductList";
import { AmountInformationComponent } from "../../components/surfaces/AmountInformationComponent";
import { colors } from "../../styles/colors";
import { productInstance } from "../../constants/productConstants";
import { MyShoppingStackProps } from "../../navigation/Stacks/MyShopingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getProductsFomOrderSkeleton, getTotalsFromOrderSkeleton } from "../../utils/complexSelectors";

const styles = StyleSheet.create(
    {

        container : {
            flex:1,
            backgroundColor: "transparent",
            paddingHorizontal:16,
            paddingBottom: 32,
            overflow: 'hidden'
        },
        titleList: {
            color:colors.seconday_text,
            fontSize:16,
            fontWeight:"600"
        },
        productContainer: {
            display: "flex"
        },
        directionContainer: {
        },
        calculatorContainer: {
            display:"flex",
            marginTop:8
        },
        buttonContainer: {
            flex:1,
            justifyContent:"flex-end",
            marginTop:16
        },
        titleContainer: {
            width: '100%',
            height:Platform.select({
                android: 56,
                ios: 93
            }),
            paddingTop:Platform.select({
                ios:47,
                android:10
            }),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom:16,
        },
        titleStyles: {
            fontSize:25,
            fontWeight: "500",
            color:colors.background_white,
        },
    }
)

type props = NativeStackScreenProps<MyShoppingStackProps, 'INVOICE_SCREEN'>;

export const InvoiceScreen = (props: props)=> {
    const {route: {params: {pk, order_skeleton,delivery_location }}} = props;

    const onPress = ()=> {

    }

    return (
        <View style={{overflow:"hidden", flex:1}}>
            <TransformedSquare />
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyles}>
                    Pedido #{pk}
                </Text>
            </View>
            <View style={styles.container}>
                <CarProductList 
                    data={getProductsFomOrderSkeleton(order_skeleton)}
                    onPress={onPress}
                    readonly
                    expand
                />
                <View style={styles.calculatorContainer}>
                    <AmountInformationComponent 
                        totals={getTotalsFromOrderSkeleton(order_skeleton)}
                        deliveryLocation={delivery_location}
                    />
                </View>
            </View>
        </View>
    )
}