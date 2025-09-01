import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare";
import { AmountInformationComponent } from "../../components/surfaces/AmountInformationComponent";
import { colors } from "../../styles/colors";
import { MyShoppingStackProps } from "../../navigation/Stacks/MyShopingStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { orderTotals } from "../../utils/calculations";
import { BoughtProductsList } from "../../components/lists/BoughtProductsList";

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
    const {route: {params: {pk, order_items,delivery_location }}} = props;

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
                <BoughtProductsList 
                    data={order_items}
                    onPress={onPress}
                    expand
                />
                <View style={styles.calculatorContainer}>
                    <AmountInformationComponent 
                        totals={orderTotals(order_items)}
                        deliveryLocation={delivery_location}
                    />
                </View>
            </View>
        </View>
    )
}