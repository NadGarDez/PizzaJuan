import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { HeartIconFilled } from "../icons/HeartIconFilled";
import { HeartIconOutlined } from "../icons/HeartIconOutlined";


const styles = StyleSheet.create(
    {
        buttonContainer : {
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center",
            width:30,
            height:30,
            borderRadius:20,
        }
    }
)

type props = {
    onPress: (value:boolean)=>void,
    pressed:boolean
}

export const HeartButton = (props:props):JSX.Element=>{
    const { onPress, pressed}=props;

    const [pressedState, setPressed] = useState<boolean>(pressed);

    useEffect(
        ()=>{
            onPress(pressedState);
        },
        [pressedState]
    )


    return (
        <TouchableOpacity 
            onPress={()=>{
                setPressed(!pressedState)
            }}
        >
            <View style={styles.buttonContainer}>
                {
                    pressedState ? (
                        <HeartIconFilled color={colors.pink}/>
                    ) : (
                        <HeartIconOutlined />
                    )
                }
            </View>
        </TouchableOpacity>
    )
}
