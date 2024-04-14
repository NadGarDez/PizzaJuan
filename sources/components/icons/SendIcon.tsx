import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const SendIcon = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="send" size={size} color={color}/>
        </>
    )
}