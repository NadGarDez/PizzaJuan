import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { useAppSelector } from "../../redux/hooks"
import { sessionObjectSelector } from "../../redux/SessionReducer"
import { AFTERNOON_GREATING, PLATFORM_TITLE, SLOGAN } from "../../constants/strings"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"
import LinearGradient from "react-native-linear-gradient"


const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal:16,
            backgroundColor:"white",
            borderRadius:10,
            overflow:"hidden",
            height:140,
            ...shadows.principalShadow
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
            backgroundColor:"red",
            zIndex:-1,
            borderRadius:10,
        },
        imageStyles: {
            height:"100%"
        }

    }
)

export const TitleStoreText = ():JSX.Element=> {
    const {givenName, } = useAppSelector(sessionObjectSelector)
    return (
        <>
    
           <View 
                style={styles.container}
           >
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri:"https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/08/08/fotografia-de-una-pizza.jpeg"}}
                        style={styles.imageStyles}
                    />
                </View>
                
                <LinearGradient style={styles.textContainer}
                    colors={[colors.principal, "#00000000"]} 
                    start={{x: 0.2, y: 0.5}}
                    end={{x: 1, y: 1}}
                >
                    <Text style={styles.platformTitleText}>
                        {`${PLATFORM_TITLE}!`}
                    </Text>
                    <Text style={styles.sloganText}>
                        {`Disfruta de la ${"\n"}mejor pizza sin salir de casa`}
                    </Text>
                </LinearGradient>
            
            </View>
        </>
        
    )
}