import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const GoFoward = ({size=25, color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="chevron-right" size={size} color={color}/>
        </>
    )
}