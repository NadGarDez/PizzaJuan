import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { DireactionSelector } from "./DirectionSelector";
import { RenderInvoiceDirection } from "./RenderInvoiceDirection";
import { DeliveryLocation, Totals } from "../../types/api/deliveryLocation";


const styles = StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor:colors.white_card,
        borderRadius:12,
        paddingVertical:8,
        maxHeight: Dimensions.get('window').height * 0.3,
        ...shadows.principalShadow
    },
    row: {
        display: "flex",
        flexDirection:"row",
        height:40,
    },
    row2: {
        display: "flex",
        flexDirection:"row",
        height:50,
    },
    column: {
        display: "flex",
        flexDirection: "row",
        flexGrow:1,
        alignItems: "center",
        paddingLeft:16
    },
    columnRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flexGrow:1,
        alignItems: "center",
        paddingRight:16
    },
    subtotalContainers: {
        paddingHorizontal:16,
        display:"flex",
        flexDirection: "column",
    },
    subtotalTextStyles: {
        fontSize:14,
        fontWeight: "200",
        marginTop:8,
        color:colors.seconday_text,
    },
    line: {
        height:0,
        width:"100%",
        borderStyle:"solid",
        borderWidth:1,
        borderTopColor:"transparent",
        borderLeftColor:"transparent",
        borderRightColor:"transparent",
        borderBottomColor:colors.seconday_text + "30",
        marginTop:8
    },
    totalContainer: {
        marginTop:8,
        paddingHorizontal:16,
    },
    dolarPrice: {
        marginRight:4,
        fontSize:14,
        fontWeight: "600",
        color:colors.seconday_text
    },
    bsPrice: {
        fontSize:18,
        fontWeight: "200",
        color:colors.seconday_text
    },
    totalTextStyles: {
        fontSize:18,
        fontWeight: "600",
        color:colors.seconday_text
    },
    buttonContainer: {
        marginTop:8
    }
})

type props = {
    deliveryLocation?:DeliveryLocation,
    totals: Totals
}


export const AmountInformationComponent = ({ deliveryLocation, totals}:props)=> {

    const {info: {subtotal = 0, ...rest}, total} = totals;

    const restKeys = Object.keys(rest);

    return (
        <View style={styles.container}>
            {
                deliveryLocation !== undefined? (
                    <RenderInvoiceDirection deliveryLocation={deliveryLocation}/>
                ) : <DireactionSelector />
            }
            <ScrollView showsVerticalScrollIndicator>
                <View style={styles.row}>
                    <View style={styles.column}>
                            <Text style={styles.subtotalTextStyles}>
                                Sub Total
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                            <Text style={styles.subtotalTextStyles}>
                                {subtotal}$
                            </Text>
                    </View>
                </View>
                {
                    restKeys.length > 0 ? (
                        restKeys.map(
                            (item, index) => (
                                <View style={styles.row} key={`tax-item-{${index}}`}>
                                    <View style={styles.column}>
                                            <Text style={styles.subtotalTextStyles}>
                                                {item}
                                            </Text>
                                    </View>
                                    <View style={styles.columnRight}>
                                            <Text style={styles.subtotalTextStyles}>
                                                {
                                                    rest[item] || 0
                                                }$
                                            </Text>
                                    </View>
                                </View>
                            )
                        )
                    ):null
                }
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.subtotalTextStyles}>
                            Delivery
                        </Text>
                    </View>
                    <View style={styles.columnRight}>
                        <Text style={styles.subtotalTextStyles}>
                            Gratis
                        </Text>
                    </View>
                </View>
                
            </ScrollView>
            
                
            <View style={styles.line} />
                <View style={styles.row2}>
                    <View style={styles.column}>
                            <Text style={styles.totalTextStyles}>
                                Total
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                        <Text style={styles.totalTextStyles}>
                            {total + "$"}
                        </Text>
                        <Text style={styles.bsPrice}>
                            {" "}ref. {((total * 36).toFixed(2)) + "bs"}
                        </Text>
                    </View>
                </View>
        </View>
    )
}