import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { useAppSelector } from "../../redux/hooks"
import { sessionObjectSelector } from "../../redux/SessionReducer"
import { PLATFORM_TITLE, SLOGAN } from "../../constants/strings"
import { colors } from "../../styles/colors"
import LinearGradient from "react-native-linear-gradient"
import image from "../../../static/images/ImageTitle.png";

const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal:16,
            borderRadius:10,
            height:140,
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
            overflow: "hidden"
        },
        imageStyles: {
            height:"100%",
            width: "100%"
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
                            source={image}
                            style={styles.imageStyles}
                            resizeMode="cover"
                        />
                    </View>
                    
                    <LinearGradient style={styles.textContainer}
                        colors={[colors.principal, colors.blackCeroPercent]} 
                        start={{x: 0.2, y: 0.5}}
                        end={{x: 1, y: 1}}
                    >
                        <Text style={styles.platformTitleText}>
                            {`${PLATFORM_TITLE}`}
                        </Text>
                        <Text style={styles.sloganText}>
                            {SLOGAN}
                        </Text>
                    </LinearGradient>
            
            </View>
        </>
        
    )
}