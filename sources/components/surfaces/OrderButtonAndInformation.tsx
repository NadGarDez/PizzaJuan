import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { BuyButton } from "../buttons/BuyButton";


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.white_card,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:16,
        ...shadows.principalShadow
    },
    row: {
        display: "flex",
        flexDirection:"row",
        marginBottom:16
    },
    column: {
        display: "flex",
        flexDirection: "row",
        flexGrow:1
    },
    columnRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flexGrow:1
    },
    subtotalContainers: {
        display:"flex",
        flexDirection: "column",
        marginTop:25
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
        borderStyle:"dotted",
        borderWidth:1,
        borderColor:colors.seconday_text
    },
    totalContainer: {
        marginTop:8
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


export const OrderButtonAndInformation = ()=> {
    return (
        <View style={styles.container}>
            <View style={styles.subtotalContainers}>
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
                
            </View>
            <View style={styles.line} />
            <View style={styles.totalContainer}>
                <View style={styles.row}>
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
            <View style={styles.buttonContainer}>
                <BuyButton 
                    onPress={()=>console.log("")}
                />
            </View>
        </View>
    )
}