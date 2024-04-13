import React from "react"
import { StyleSheet, View, Image, ImageRequireSource } from "react-native"
import { colors } from "../../styles/colors"
import imagePersonalConfiguration from "../../../static/images/personalInformationFormImage.jpeg";
import imageDeliveryConfiguration from "../../../static/images/locaitonFormImage.jpg";
import imagePaymentConfiguration from "../../../static/images/payConfigurationFormImage.jpg"
import { ModalFormNames } from "../../types/forms/generalFormTypes";

const styles = StyleSheet.create(
    {
        container: {
            borderRadius:10,
            height:140,
            width: '100%'
        },

        textContainer: {
            paddingHorizontal:8,
            height:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            borderRadius:10,
        },
       
        afterNameText: {
            fontSize:25,
            color:colors.black_thin
        },
        platformTitleText: {
            fontSize:34,
            fontWeight:"700",
            color:colors.text_contrast,
        },
        sloganText: {
            fontSize:15,
            color:colors.white_card,
            fontWeight:"500"
        },
        imageContainer: {
            width:"100%",
            position:"absolute",
            height:"100%",
            top:0,
            zIndex:-1,
            borderRadius:10,
            overflow: "hidden"
        },
        imageStyles: {
            height:140,
            width:"100%"
        }

    }
)

type props = {
    form:string
}


type selector = Record<ModalFormNames, ImageRequireSource>

const imageselector:Record<ModalFormNames, ImageRequireSource> = {
    PERSONAL_CONFIGURATION: imagePersonalConfiguration,
    DELIVERY_CONFIGURATION: imageDeliveryConfiguration,
    PAYMENT_CONFIGURATION: imagePaymentConfiguration,
    TRANSACTION_CODE_FORM: imagePaymentConfiguration,
}
export const FormImageHeader = ({form}:props):JSX.Element=> {

    return (
        <>
            <View 
                style={styles.container}
            >
                    <View style={styles.imageContainer}>
                        <Image 
                            source={imageselector[form as ModalFormNames]}
                            style={styles.imageStyles}
                            resizeMode="cover"
                        />
                    </View>
            </View>
        </>
        
    )
}