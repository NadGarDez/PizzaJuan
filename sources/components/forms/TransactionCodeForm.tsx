import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFormik } from "formik";
import { transcValidationMetadata } from "../../constants/form/formConstants";
import { colors } from "../../styles/colors";
import { inputSelector } from "../../utils/inputSelector";
import { ModalFormHeader } from "../surfaces/ModalFormHeader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hide } from "../../redux/ModalFormReducer";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { transcValidationMetadataType, transcValidationSchema, transcValidationSchemaType } from "../../types/forms/transcValidationFormTypes";
import { useLocalRequest } from "../../hooks/useLocalRequest";
import { createOrderRequest } from "../../utils/apiRequests";
import { sessionTokenSelector } from "../../redux/SessionReducer";
import { cleanReducer, shoppingCardSelector } from "../../redux/shoppingCardSlice";
import { CommonActions, DrawerActions, useNavigation, useRoute } from "@react-navigation/native";


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
    },
    loading: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginBottom: 16
    }
})

const defaultValue : transcValidationSchemaType = {
   transactionCode: ''
}   

export const TransactionCodeForm = (): JSX.Element=> {

    const token = useAppSelector(sessionTokenSelector);

    const car = useAppSelector(shoppingCardSelector);

    const navigation  = useNavigation();
    const route = useRoute()

    const {refetch, responseObject, reducerStatus, clear} = useLocalRequest(createOrderRequest);

    const { setFieldValue, errors, values, submitForm } = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:transcValidationSchema,
            onSubmit: values => {
                refetch(
                    {
                        token: token ?? '',
                        bodyObject: {
                            deliveryLocation: 59,
                            paymentInformation:{
                                reference: "4321",
                                payMethod: 42,
                                amount:1000
                            },
                            orderSkeleton: JSON.stringify(car)

                        }
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

    const jump = ()=> {
        navigation.goBack()
        navigation.dispatch(DrawerActions.openDrawer())
        setTimeout(() => {
            navigation.dispatch(DrawerActions.jumpTo('MY_SHOPPING'))
        }, 500);
    }

    useEffect(
        () => {
            if(reducerStatus === 'SUCCESSED') {
                clear();
                dispatch(cleanReducer());
                dispatch(hide());
                jump();
            }
        },
        [reducerStatus]
    )

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
                        reducerStatus === 'INITIAL' ? Object.keys(defaultValue).map(
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
                        ) : null
                    }
                    {
                        reducerStatus !== 'INITIAL' ? (
                            <View style={styles.loading}>
                                <ActivityIndicator size={60} color={colors.principal}/>
                            </View>
                        ): null
                    }
            </ScrollView>
        </>
       
    )
}