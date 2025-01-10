import React, {  useEffect } from "react";
import { StyleSheet, Text, View } from "react-native"; 
import { colors } from "../../styles/colors";
import { payMethodConfigurationMetadata, } from "../../constants/form/formConstants";
import { useFormik } from "formik";
import { inputSelector } from "../../utils/inputSelector";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { OutlinedButton } from "../buttons/OutlinedButton";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { payMethodConfigurationSchema, payMethodConfigurationSchemaType } from "../../types/forms/payMethodFormTypes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createPayMethodRequest } from "../../utils/apiRequests";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { sessionTokenSelector } from "../../redux/SessionReducer";
import { payMethodRequestSagasAction } from "../../sagas/paymethodSagas";
import { useLocalRequest } from "../../hooks/useLocalRequest";

const styles = StyleSheet.create({
    container: {
        flex:1,
        minHeight:200
    },
    inputContainer: {
        marginBottom:8,
        width:'100%',
    },
    titleInputStyles: {
        fontSize:14,
        fontWeight: "400",
        color:colors.principal,
    },
    titleContainer: {
        marginBottom:4
    },
    textStyles: {
        color:colors.white_card,
        fontWeight:"400"
    },
    textContainer: {
        height:24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    inputList: {
        display:"flex",
        flexDirection:"column",
        marginBottom:8
    },
    cancelTextStyles: {
        color: colors.seconday_text,
        fontWeight:"400"
    },
    cancelContainer: {
        marginTop:8
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

const defaultValue : payMethodConfigurationSchemaType = {
   type: 'mobile_pay',
   ci: '',
   bank: 'mercantil',
   phone: ''
}

type aditionalProps = {

}

type props = tabViewSceneProps & aditionalProps;


export const PaymentConfigurationForm = (props:props): JSX.Element=> {

    const token = useAppSelector(sessionTokenSelector);
    const dispatch = useAppDispatch();
    const {jumpTo} = props;

    const {reducerStatus, refetch, clear} = useLocalRequest(createPayMethodRequest);

    const {values, setFieldValue, handleSubmit, errors,resetForm} = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:payMethodConfigurationSchema,
            onSubmit: async (values) => {

                refetch(
                    {
                        token: token || '',
                        bodyObject: {
                            mobile_pay: {
                                ci: values.ci,
                                phone_number: values.phone,
                                bank_code: values.bank,
                            }
                        }
                    }
                );
            },
        },
    );

    useEffect(
        ()=> {
            const errorKeys = Object.keys(errors);
            // setValidFormValue(errorKeys.length === 0);
        },
        [errors]
    );

    useEffect(
        () => {
            if(reducerStatus === 'SUCCESSED') {
                    jumpTo('first');
                    resetForm();
                    clear();
                    dispatch(payMethodRequestSagasAction());
            }
        },
        [reducerStatus]
    )

    const onPress= ()=> {
        handleSubmit()
    }

    const onPressCancel = ()=> {
        jumpTo('first');
    }

    return (
        <KeyboardAwareScrollView 
            style={styles.container}
        >
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        Agrega un nuevo metodo de pago
                    </Text>
                </View>
                <View style={styles.inputList}>

                    {
                        reducerStatus !== 'SUCCESSED' ?
                        Object.keys(defaultValue).map(
                            (item, index) => {
                                const {placeholder = '', inputType, name, aditionalData} = payMethodConfigurationMetadata[item as keyof payMethodConfigurationSchemaType];
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
                </View>
                <PrincipalButton onPress={onPress} radius={5}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyles}> {/* deberia bloquearse de no ser el pago valido o no tener efecto */}
                            Guardar Metodo de Pago
                        </Text>
                    </View>
                </PrincipalButton>
                
                <View style={styles.cancelContainer}>
                    <OutlinedButton onPress={onPressCancel} radius={5}>
                        <View style={styles.textContainer}>
                            <Text style={styles.cancelTextStyles}>
                                Cancelelar
                            </Text>
                        </View>
                    </OutlinedButton>
                </View>
        </KeyboardAwareScrollView>
    )
}