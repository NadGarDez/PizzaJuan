import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormik } from "formik";
import { personalConfigurationMetadata } from "../../constants/form/formConstants";
import { colors } from "../../styles/colors";
import { inputSelector } from "../../utils/inputSelector";
import { ModalFormHeader } from "../surfaces/ModalFormHeader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hide } from "../../redux/ModalFormReducer";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { personalConfigurationSchema, personalConfigurationSchemaType } from "../../types/forms/personalConfigurationTypes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useLocalRequest } from "../../hooks/useLocalRequest";
import { updateUser } from "../../utils/apiRequests";
import { sessionTokenSelector } from "../../redux/SessionReducer";
import { ErrorModal } from "../modal/ErrorModal";


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


const hasChanged = (defaultValues: object, currentValues:object) => JSON.stringify(defaultValues) !== JSON.stringify(currentValues);

export const PersonalConfigurationForm = (): JSX.Element=> {
    const token = useAppSelector(sessionTokenSelector)
    const {refetch, reducerStatus, responseObject } = useLocalRequest(updateUser);
    const { setFieldValue,values , submitForm, errors, isValid} = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:personalConfigurationSchema,
            onSubmit: values => {
                refetch(
                    {
                        token: token ?? '',
                        first_name: values.name,
                        last_name: values.lastName,
                        email: values.email,
                        genre: values.genre,
                        ci: values.ci,
                        birthday: values.birthDate
                    }
                )
            },
        },
    );

    const dispatch = useAppDispatch();

    const onSave = ()=> {
        submitForm();
        // dispatch(hide());
    }

    const onCancel = ()=> {
        dispatch(hide());
    }

    useEffect(
        () => {
            if (reducerStatus === 'SUCCESSED') {
                dispatch(hide());
            }
        },
        [reducerStatus]
    )

    return (
        <>
        <KeyboardAwareScrollView
        >
            <ModalFormHeader 
                formKey={ModalFormNames.PERSONAL_CONFIGURATION}
                isFormValid={isValid && hasChanged(defaultValue, values)}
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
                                                error: errors[item as keyof object],
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
        {
             reducerStatus === 'ERROR' ? (
                <ErrorModal 
                    title="Error cargando la lista de direccciones"
                    subtitle={responseObject?.statusText ?? ''}
                />
            ): null
        }
        </>
       
    )
}