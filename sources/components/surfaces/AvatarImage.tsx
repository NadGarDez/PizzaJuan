import React from "react"
import { Image, ImageRequireSource, StyleSheet, View } from "react-native"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"

const styles = StyleSheet.create(
    {
        container : {
            display:"flex",
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            width:100,
            height:100,
            borderRadius:50,
            borderStyle: "solid",
            borderWidth:3,
            borderColor:colors.white_card,
            overflow:"hidden",
            backgroundColor: colors.white_card,
            ...shadows.principalShadow
        },
        imageStyles: {
            width:"100%",
            height:"100%"
        }
    }
)


type props = {
    source: ImageRequireSource
}

export const AvatarImage = ({source}:props):JSX.Element=> {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.imageStyles} resizeMode='contain'/>
        </View>
    )

}