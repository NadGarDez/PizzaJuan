import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { BuyButton } from "../buttons/BuyButton";
import { DireactionSelector } from "./DirectionSelector";


const styles = StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor:colors.white_card,
        borderRadius:12,
        paddingVertical:8,
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


export const AmountInformationComponent = ()=> {
    return (
        <View style={styles.container}>
                <DireactionSelector />
                <View style={styles.row}>
                    <View style={styles.column}>
                            <Text style={styles.subtotalTextStyles}>
                                Sub Total
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                            <Text style={styles.subtotalTextStyles}>
                                200$ 
                            </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                            <Text style={styles.subtotalTextStyles}>
                                IVA
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                            <Text style={styles.subtotalTextStyles}>
                                {
                                    `${200 * 0.16}$`
                                }
                            </Text>
                    </View>
                </View>
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
                
            <View style={styles.line} />
                <View style={styles.row2}>
                    <View style={styles.column}>
                            <Text style={styles.totalTextStyles}>
                                Total
                            </Text>
                    </View>
                    <View style={styles.columnRight}>
                           
                            <Text style={styles.totalTextStyles}>
                                        {232 + "$"}
                                    </Text>
                                    <Text style={styles.bsPrice}>
                                        {" "}ref. {(232 * 36) + "bs"}
                                    </Text>
                    </View>
                </View>
        </View>
    )
}