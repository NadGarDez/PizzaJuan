import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "../buttons/IconButton";
import { colors } from "../../styles/colors";
import { FormImageHeader } from "./FormImageHeader";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { modalFormData } from "../../constants/form/formConstants";
const styles = StyleSheet.create({
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
});

interface props {
    isFormValid: boolean,
    onSave: ()=>void,
    onCancel: ()=>void,
    formKey: ModalFormNames
}


export const ModalFormHeader = (props:props):JSX.Element=> {
    const {onCancel, onSave, isFormValid, formKey} = props;

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.leftButtonContainer}>
                    <IconButton onPress={onCancel}>
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
                    <IconButton onPress={onSave}>
                        <Text 
                            style={ isFormValid ? styles.buttonText : styles.buttonTextCancel }
                        >
                            Guardar
                        </Text>
                    </IconButton>
                </View>
            </View>
            <FormImageHeader form={formKey} />
            <View style={styles.titleContainer}>
                <Text style={styles.titleFontStyles}> 
                  {
                    modalFormData[formKey].title
                  }
                </Text>
            </View>
        </>
    )
}