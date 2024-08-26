import React from "react";
import { StyleSheet, Text, View } from "react-native"; 
import { colors } from "../../styles/colors";
import { deliveryConfigurationMetadata } from "../../constants/form/formConstants";
import { useFormik } from "formik";
import { inputSelector } from "../../utils/inputSelector";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { OutlinedButton } from "../buttons/OutlinedButton";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { deliveryConfigurationSchema, deliveryConfigurationSchemaType } from "../../types/forms/deliveryFormTypes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createDeliveryLocationRequest } from "../../utils/apiRequests";
import { useAppSelector } from "../../redux/hooks";
import { sessionTokenSelector } from "../../redux/SessionReducer";

const styles = StyleSheet.create({
    container: {
        flex:1,
        minHeight:200,
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

const defaultValue : deliveryConfigurationSchemaType = {
   name:'',
   plus_code:'',
   description:''
}

type aditionalProps = {

}

type props = tabViewSceneProps & aditionalProps;


export const DeliveryConfigurationForm = (props:props): JSX.Element=> {

    const token = useAppSelector(sessionTokenSelector)
    const {jumpTo} = props;

    const { setFieldValue, handleSubmit, errors, setFieldTouched, touched } = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:deliveryConfigurationSchema,
            onSubmit: async (values, {resetForm}) => {
               const {status} = await createDeliveryLocationRequest(token || '', {
                    ...values,
                    owner:7
                })
                if(status === 201) {
                    jumpTo('first');
                }
            },
        },
    );

    const isItemTouched = (item:string) => {
        const touchedRecord = touched as Record<string, boolean>;
        return touchedRecord[item];
    }

    const getItemError = (item:string) : string | string[] | undefined => {
        const error = errors as Record<string, string | string[]>;
        return (isItemTouched(item) && !!error[item]) ? error[item] : undefined
    }

    const handleTouch = async  (inputName:string) => {
        await setFieldTouched(inputName);
    }

    const onPress= ()=> {
        // const h = errors as Record<string, string | [string]> // we can use this form to get especific errors
        handleSubmit()
    }

    const onPressCancel = ()=> {
        console.log('do something and then relocate');
        jumpTo('first');
    }

    return (
        <KeyboardAwareScrollView
            style={styles.container}
        >
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        Agrega una nueva direccion
                    </Text>
                </View>
                <View style={styles.inputList}>
                    {
                        Object.keys(defaultValue).map(
                            (item, index) => {
                                const {placeholder = '', inputType, name, aditionalData = {}} = deliveryConfigurationMetadata[item as keyof deliveryConfigurationSchemaType];
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
                                                onChangeCallback: async (text:string)=> {
                                                    await setFieldValue(item, text);
                                                    await setFieldTouched(item, true, true)
                                                },
                                                inputName:item,
                                                error: getItemError(item) ,
                                                handleTouch,
                                                ...aditionalData,
                                            })
                                        }
                                    </View>
                                )
                            }
                        )
                    }
                </View>
                <PrincipalButton onPress={onPress} radius={5}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyles}>
                            Guardar Direccion
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