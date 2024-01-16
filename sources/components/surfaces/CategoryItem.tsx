import React from "react";
import { Image, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";

const styles = StyleSheet.create(
    {
        baseContainer: {
            width:80,
            minHeight:120,
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:60,
            marginRight:12,
            marginBottom:16,
            padding:8,
            ...shadows.principalShadow
        },
        activeContainer: {
            backgroundColor:colors.principal
        },
        unactiveContainer: {
            backgroundColor:colors.background_white
        },
        textContainer: {
            flex:1,
            width:"100%",
            justifyContent:"center",
            alignItems:"center"
        },

        textStyles: {
            fontSize:12,
            color:colors.seconday_text
        },
        imageContainer:{
            width:"100%",
            flex:2,
            borderRadius:30,
            overflow:"hidden",
            backgroundColor: colors.white_card
        },
        imageStyles: {
            width:"100%",
            height:"100%",
        }
    }
)

type props = {
    active:boolean,
    image:string,
    categoryName:string,
    index:number
}

export const CategoryItem = ({active, image, categoryName, index}:props):JSX.Element=>{

    const restContainerStyles =  active ? styles.activeContainer : styles.unactiveContainer;
    return (
        <View style={{...styles.baseContainer, ...restContainerStyles, marginLeft: index===0 ? 16:0}}>
            <View style={styles.imageContainer}>

                 <Image 
                
                    source={{
                        uri:image
                    }}
                    style={styles.imageStyles}
                    resizeMethod="scale"
                /> 
            </View>
            <View style={styles.textContainer}>
                    <Text style={styles.textStyles}>
                        {categoryName}
                    </Text>
            </View>
        </View>
    )
}