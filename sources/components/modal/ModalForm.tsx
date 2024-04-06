import React from "react"
import {  StyleSheet, View } from "react-native"
import { colors } from "../../styles/colors"
import Modal from "react-native-modal";
import { modalSwitch } from "../../utils/modalContentSelector";
import { useAppSelector } from "../../redux/hooks";
import { modalFormSelector } from "../../redux/ModalFormReducer";

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
            paddingHorizontal:16,
            paddingBottom:20,
            display:'flex',
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
            fontSize:33,
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
            marginTop:4,
        },
        titleContainer: {
            marginTop:8,
            display: "flex",
            width: "100%"
        },
        modalGeneralContainer: {
            flex:1,
        }
    }
)

export const ModalForm = ():JSX.Element=> {

    const {name, visible} = useAppSelector(modalFormSelector);

    return (
        <Modal isVisible={visible} style={{padding:0}} animationInTiming={400} animationOutTiming={400}>
            <View style={styles.container}>
                <View style={styles.modalCard}>
                    <View style={styles.modalGeneralContainer}>
                        <View style={{flex:1}}>
                            <View style={styles.bodyContainer}>
                               {
                                modalSwitch[name]
                               }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
