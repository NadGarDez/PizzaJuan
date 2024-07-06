import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const Drinks = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="bottle-soda-classic-outline" size={size} color={color}/>
        </>
    )
}