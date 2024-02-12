import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import { CloseIcon } from "../icons/CloseIcons";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            // width:30,
            // height:30,
            borderRadius:20,
        },
        semiTransparentCircle: {
            width: 40,
            height: 40,
            borderRadius: 20,
           
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }

    }
)

type props = {
    onPress: ()=>void,
}

export const DeleteProductButton = (props:props):JSX.Element=>{
    const { onPress}=props;
    return (
        <Pressable onPress={onPress}>
            {
                ({pressed})=>(
                    <View style={{
                        ...styles.semiTransparentCircle,
                        backgroundColor: pressed ? "#00000020" : "transparent"
                    }}>
                         <CloseIcon size={15} color={colors.seconday_text+50}/>
                    </View>
                )
            }
        </Pressable>
    )
}
