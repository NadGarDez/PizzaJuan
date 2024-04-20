import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFormik } from "formik";
import { personalConfigurationMetadata } from "../../constants/form/formConstants";
import { colors } from "../../styles/colors";
import { inputSelector } from "../../utils/inputSelector";
import { ModalFormHeader } from "../surfaces/ModalFormHeader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hide, modalFormSelector } from "../../redux/ModalFormReducer";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { personalConfigurationSchema, personalConfigurationSchemaType } from "../../types/forms/personalConfigurationTypes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


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
        fontSize:20,
        fontWeight: "200",
        color:colors.seconday_text,
    }
})

const defaultValue : personalConfigurationSchemaType = {
    name: '',
    lastName: '',
    email: '',
    genre: 'male',
    birthDate: new Date(),
    ci:''
}

export const PersonalConfigurationForm = (): JSX.Element=> {

    const {valid} = useAppSelector(modalFormSelector);
    const { setFieldValue } = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:personalConfigurationSchema,
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
        <KeyboardAwareScrollView
        >
            <ModalFormHeader 
                formKey={ModalFormNames.PERSONAL_CONFIGURATION}
                isFormValid={valid}
                onCancel={onCancel}
                onSave={onSave}
            />
            <View style={styles.container}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        Cuentanos sobre ti
                    </Text>
                </View>
                    {
                        Object.keys(defaultValue).map(
                            (item, index) => {
                                const {placeholder = '', inputType, name, aditionalData} = personalConfigurationMetadata[item as keyof personalConfigurationSchemaType];
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
            </View>
        </KeyboardAwareScrollView>
       
    )
}