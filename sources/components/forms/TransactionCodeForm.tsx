import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFormik } from "formik";
import { personalConfigurationMetadata, transcValidationMetadata } from "../../constants/form/formConstants";
import { colors } from "../../styles/colors";
import { inputSelector } from "../../utils/inputSelector";
import { ModalFormHeader } from "../surfaces/ModalFormHeader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hide, modalFormSelector } from "../../redux/ModalFormReducer";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { transcValidationMetadataType, transcValidationSchema, transcValidationSchemaType } from "../../types/forms/transcValidationFormTypes";


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    inputContainer: {
        marginBottom:8,
        width:'100%'
    },
    titleInputStyles: {
        fontSize:14,
        fontWeight: "400",
        color:colors.principal,
    },
    titleContainer: {
        marginBottom:4
    },
    subtitleContainer: {
        width: "100%",
        marginBottom: 8
    },
    subtitleText: {
        fontSize:16,
        fontWeight: "200",
        color:colors.seconday_text,
    }
})

const defaultValue : transcValidationSchemaType = {
   transactionCode: ''
}   

export const TransactionCodeForm = (): JSX.Element=> {

    const {valid} = useAppSelector(modalFormSelector);
    const { setFieldValue, errors, values } = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:transcValidationSchema,
            onSubmit: values => {
                console.log(values)
            },
        },
    );


    const dispatch = useAppDispatch();

    const onSave = ()=> {
        dispatch(hide());
    }

    const onCancel = ()=> {
        dispatch(hide());
    }

    return (
        <>
            <ModalFormHeader 
                formKey={ModalFormNames.TRANSACTION_CODE_FORM}
                isFormValid={Object.keys(errors).length === 0 && values.transactionCode !== defaultValue.transactionCode}
                onCancel={onCancel}
                onSave={onSave}
            />
            <ScrollView style={styles.container}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        Ingresa la referencia de pago en el siguiente formulario
                    </Text>
                </View>
                    {
                        Object.keys(defaultValue).map(
                            (item, index) => {
                                const {placeholder = '', inputType, name, aditionalData} = transcValidationMetadata[item as keyof transcValidationMetadataType];
                                return (
                                    <View style={styles.inputContainer} key={`input-${item}-${index}`}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.titleInputStyles}>
                                                {name}
                                            </Text>
                                        </View>
                                        {
                                            inputSelector[inputType]({
                                                placeholder,
                                                onChangeCallback:(text:string)=> {
                                                    setFieldValue(item, text);
                                                },
                                                inputName:name,
                                                ...aditionalData
                                            })
                                        }
                                    </View>
                                )
                            }
                        )
                    }
            </ScrollView>
        </>
       
    )
}