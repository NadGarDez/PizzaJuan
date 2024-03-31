import React, { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFormik } from "formik";
import { personalConfigurationSchemaType, personalConfigurationMetadata, personalConfigurationSchema } from "../../constants/formConstants";
import { colors } from "../../styles/colors";
import { inputSelector } from "../../utils/inputSelector";
import { ModalContext } from "../../context/modalFormContext";

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

    const {setValidFormValue} = useContext(ModalContext);

    const {values, setFieldValue, handleSubmit, errors} = useFormik(
        {
            initialValues: defaultValue,
            validationSchema:personalConfigurationSchema,
            onSubmit: values => {
                console.log(values)
            },
        },
    );
    
    useEffect(
        ()=> {
            const errorKeys = Object.keys(errors);
            setValidFormValue(errorKeys.length === 0);
        },
        [errors]
    )

    return (
        <ScrollView style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    Cuentanos sobre ti
                </Text>
             </View>
                {
                    Object.keys(defaultValue).map(
                        (item, index) => {
                            const {placeholder = '', inputType, name} = personalConfigurationMetadata[item as keyof personalConfigurationSchemaType];
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
                                            inputName:name
                                        })
                                    }
                                </View>
                            )
                        }
                    )
                }
        </ScrollView>
    )
}