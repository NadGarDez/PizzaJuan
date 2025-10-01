import React from "react";
import { Pressable, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";

const styles = StyleSheet.create(
    {
        baseContainer: {
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:12,
            marginRight:12,
            marginBottom:8,
            padding:8,
            ...shadows.lightShadow,
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
            fontSize:18,
            fontWeight: "300",
            marginRight:4,
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
    name:string,
    index:number,
    pk:number,
    onPressItem: (pk:number)=>void
}

export const CategoryItem = ({active, name, index, pk, onPressItem}:props):JSX.Element=>{

    const restContainerStyles =  active ? styles.activeContainer : styles.unactiveContainer;
    return (
        <Pressable style={{marginLeft: index===0 ? 16:0}}
            onPress={()=>onPressItem(pk)}
        >
            {
                ({pressed})=>(
                    <View style={
                        pressed ? {
                            ...styles.baseContainer, backgroundColor: colors.categoryItemBackgroundPressed
                        } : {
                           ...styles.baseContainer, ...restContainerStyles
                        }
                    }>
                        <View style={styles.textContainer}>
                                <Text style={{
                                    ...styles.textStyles,
                                    color: active ? colors.white_card : colors.principal
                                    }}>
                                    {name}
                                </Text>
                        </View>
                    </View>
                )
            }
        </Pressable>
        
    )
}