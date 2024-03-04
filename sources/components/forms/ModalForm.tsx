import React, { useContext, useState } from "react"
import { Dimensions, StyleSheet, View, Text } from "react-native"
import { colors } from "../../styles/colors"
import { IconButton } from "../buttons/IconButton"
import Modal from "react-native-modal";
import { ModalContext } from "../../context/modalFormContext";

const styles =  StyleSheet.create(
    {
        container: {
            flex:1,
            justifyContent: "flex-end",
            marginHorizontal: -20,
            marginVertical: -24
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
            textAlign:"center"
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

export const ModalForm = ()=> {

    const {toggleModal, visible, modalObject} = useContext(ModalContext);

    return (
        <Modal isVisible={visible} style={{padding:0}} animationInTiming={400} animationOutTiming={400}>
            <View style={styles.container}>
                <View style={styles.modalCard}>
                    <View style={styles.headerContainer}>
                        <View style={styles.leftButtonContainer}>
                            <IconButton onPress={toggleModal}>
                                <Text style={styles.buttonText}>
                                    Cancelar
                                </Text>
                            </IconButton>
                        </View>
                        <View style={styles.centerTitleContainer}>
                            <Text style={styles.titleFontStyles}>
                                {
                                    modalObject.title
                                }
                            </Text>
                        </View>
                        <View style={styles.rightButtonContainer}>
                            <IconButton onPress={toggleModal}>
                                <Text style={styles.buttonText}>
                                    Guardar
                                </Text>
                            </IconButton>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
       
    )
}