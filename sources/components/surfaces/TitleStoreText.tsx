import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useAppSelector } from "../../redux/hooks"
import { sessionObjectSelector } from "../../redux/SessionReducer"
import { AFTERNOON_GREATING, PLATFORM_TITLE, SLOGAN } from "../../constants/strings"
import { colors } from "../../styles/colors"




const styles = StyleSheet.create(
    {
        container: {
            paddingHorizontal:16
        },
       
        afterNameText: {
            fontSize:25,
            color:colors.black_thin
        },
        platformTitleText: {
            fontSize:34,
            fontWeight:"700",
            color:colors.principal
        },
        sloganText: {
            fontSize:22,
            color:colors.seconday_text
        }

    }
)


export const TitleStoreText = ():JSX.Element=> {

    const {givenName, } = useAppSelector(sessionObjectSelector)

    return (
        <View style={styles.container}>
            <Text style={styles.afterNameText}>
                Bienvenid@ a 
            </Text>
            <Text style={styles.platformTitleText}>
                {`${PLATFORM_TITLE}!`}
            </Text>
            <Text style={styles.sloganText}>
                {`${SLOGAN}.`}
            </Text>
        </View>
    )
}