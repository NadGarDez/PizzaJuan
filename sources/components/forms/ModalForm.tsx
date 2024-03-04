import React from "react"
import { Dimensions, StyleSheet, View, Text } from "react-native"
import { colors } from "../../styles/colors"
import { IconButton } from "../buttons/IconButton"

const styles =  StyleSheet.create(
    {
        container: {
            position:"absolute",
            top:0,
            width: Dimensions.get("screen").width,
            height:Dimensions.get("window").height,
            backgroundColor: "#00000080",
            zIndex:100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
        },
        modalCard: {
            height: "90%",
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            backgroundColor:colors.white_card,
            paddingHorizontal:16
        },
        headerContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            paddingVertical:16
        },
        rightButtonContainer: {
          flex:1,
          flexDirection: "row",
          justifyContent: "flex-end"
        },
        leftButtonContainer: {
            flex:1,
            flexDirection: "row",

        },
        centerTitleContainer: {
            flex:2,
            flexDirection: "row",
            justifyContent: "center"
        },
        titleFontStyles: {
            fontSize:16,
            fontWeight: "700",
            color:colors.seconday_text,
        },
        buttonText: {
            fontSize:16,
            fontWeight: "300",
            color:colors.principal,
        }
    }
)

type props = {
    title:string,
}

export const ModalForm = ({title}:props)=> {
    return (
        <View style={styles.container}>
            <View style={styles.modalCard}>
                <View style={styles.headerContainer}>
                    <View style={styles.leftButtonContainer}>
                        <IconButton onPress={()=>{}}>
                            <Text style={styles.buttonText}>
                                Cancelar
                            </Text>
                        </IconButton>
                    </View>
                    <View style={styles.centerTitleContainer}>
                        <Text style={styles.titleFontStyles}>
                            {
                                title
                            }
                        </Text>
                    </View>
                    <View style={styles.rightButtonContainer}>
                        <IconButton onPress={()=>{}}>
                            <Text style={styles.buttonText}>
                                Guardar
                            </Text>
                        </IconButton>
                    </View>
                </View>
            </View>
        </View>
    )
}