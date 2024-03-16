import React from "react"
import { StyleSheet, View, Image } from "react-native"
import { colors } from "../../styles/colors"
import { ModalFormNames } from "../../constants/userConfigurationConstants"


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
            height:"100%"
        }

    }
)

type props = {
    form:string
}

type selector = {
    [key in ModalFormNames] : string
}

const imageselector:selector = {
    PERSONAL_CONFIGURATION: 'https://www.lukkap.com/wp-content/uploads/2023/08/sistemas-de-voz.jpeg',
    DELIVERY_CONFIGURATION: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/08/calibrar-google-maps-3120262.jpg',
    PAYMENT_CONFIGURATION: 'https://dataexport.com.gt/wp-content/uploads/2022/10/pagos-en-linea.jpg'
}

export const FormImageHeader = ({form}:props):JSX.Element=> {

    return (
        <>
    
           <View 
                style={styles.container}
           >
                    <View style={styles.imageContainer}>
                        <Image 
                            source={{uri:imageselector[form as ModalFormNames]}}
                            style={styles.imageStyles}
                        />
                    </View>
            </View>
        </>
        
    )
}