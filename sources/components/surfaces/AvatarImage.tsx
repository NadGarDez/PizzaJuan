import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { colors } from "../../styles/colors"

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
            borderColor:colors.black_thin,
            overflow:"hidden"
        },
        imageStyles: {
            width:"100%",
            height:"100%"
        }
    }
)

type props = {
    imageSrc?:string
}

export const AvatarImage = ({imageSrc="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"}:props):JSX.Element=> {
    return (
        <View style={styles.container}>
            <Image source={{uri: imageSrc}} style={styles.imageStyles}/>
        </View>
    )

}