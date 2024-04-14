import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { IconButton } from "../buttons/IconButton";
import { CopyIcon } from "../icons/CopyIcon";

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:8,
    },
    textStyles: {
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    smsContainer: {
        marginTop: 16,
        flex: 1,
    },
    imageStyles: {
        width:'100%',
        height: '100%'
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
    subtotalTextStyles: {
        fontSize:20,
        fontWeight: "600",
        marginTop:8,
        color:colors.seconday_text,
        marginRight:3
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
})

export const StoreMobilePayData = ()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Envia un pago movil con el monto de tu compra a los siguientes datos usando tu aplicacion bancaria</Text>
            <View style={styles.smsContainer}>
                <View style={styles.row}>
                        <View style={styles.column}>
                                <Text style={styles.subtotalTextStyles}>
                                    Cod.
                                </Text>
                        </View>
                        <View style={styles.columnRight}>
                                <Text style={styles.subtotalTextStyles}>
                                    0105
                                </Text>
                                <IconButton onPress={()=>{}}>
                                    <CopyIcon color={colors.seconday_text + 80}  size={15}/>
                                </IconButton>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <View style={styles.column}>
                                <Text style={styles.subtotalTextStyles}>
                                   Tlf.
                                </Text>
                        </View>
                        <View style={styles.columnRight}>
                                <Text style={styles.subtotalTextStyles}>
                                    04243121846
                                </Text>
                                <IconButton onPress={()=>{}}>
                                    <CopyIcon color={colors.seconday_text + 80}  size={15}/>
                                </IconButton>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <View style={styles.column}>
                                <Text style={styles.subtotalTextStyles}>
                                    Prefijo CI
                                </Text>
                        </View>
                        <View style={styles.columnRight}>
                                <Text style={styles.subtotalTextStyles}>
                                    V
                                </Text>
                                <IconButton onPress={()=>{}}>
                                    <CopyIcon color={colors.seconday_text + 80} size={15}/>
                                </IconButton>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <View style={styles.column}>
                                <Text style={styles.subtotalTextStyles}>
                                    CI
                                </Text>
                        </View>
                        <View style={styles.columnRight}>
                                <Text style={styles.subtotalTextStyles}>
                                    26177497
                                </Text>
                                <IconButton onPress={()=>{}}>
                                    <CopyIcon color={colors.seconday_text + 80}  size={15}/>
                                </IconButton>
                        </View>
                    </View>
                </View>
        </View>
    )
}