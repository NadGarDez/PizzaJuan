import React, { useContext, useState } from "react"
import { Dimensions, StyleSheet, View, Text } from "react-native"
import { colors } from "../../styles/colors"
import { IconButton } from "../buttons/IconButton"
import Modal from "react-native-modal";
import { ModalContext } from "../../context/modalFormContext";
import { modalSwitch, modalSwitchType } from "../../utils/modalContentSelector";

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
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end"
        },
        leftButtonContainer: {
            display:"flex",
            flexDirection: "row",

        },
        centerheaderContainer: {
            flex:2,
            flexDirection: "row",
            justifyContent: "center"
        },
        titleFontStyles: {
            fontSize:30,
            fontWeight: "300",
            color:colors.seconday_text,
        },
        buttonTextCancel: {
            fontSize:16,
            fontWeight: "500",
            color:colors.seconday_text + 90,
        },
        buttonText: {
            fontSize:16,
            fontWeight: "500",
            color:colors.principal,
        },
        bodyContainer: {
            flex:1,
            marginTop:16
        },
        titleContainer: {
            display: "flex",
            width: "100%"
        }
    }
)

export const ModalForm = ():JSX.Element=> {

    const {toggleModal, visible, modalObject:{title, formKey }} = useContext(ModalContext);

    return (
        <Modal isVisible={visible} style={{padding:0}} animationInTiming={400} animationOutTiming={400}>
            <View style={styles.container}>
                <View style={styles.modalCard}>
                    <View style={styles.headerContainer}>
                        <View style={styles.leftButtonContainer}>
                            <IconButton onPress={toggleModal}>
                                <Text style={styles.buttonTextCancel}>
                                    Cancelar
                                </Text>
                            </IconButton>
                        </View>
                        <View style={styles.centerheaderContainer}>
                            {/* <Text style={styles.titleFontStyles}>
                                {
                                    title
                                }
                            </Text> */}
                        </View>
                        <View style={styles.rightButtonContainer}>
                            <IconButton onPress={toggleModal}>
                                <Text style={styles.buttonText}>
                                    Guardar
                                </Text>
                            </IconButton>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleFontStyles}> 
                            {
                                title
                            }
                        </Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        {
                            modalSwitch[formKey as keyof modalSwitchType]({})
                        }
                    </View>
                </View>
            </View>
        </Modal>
       
    )
}