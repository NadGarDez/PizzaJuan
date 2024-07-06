import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const AditionalIcon = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="food-apple-outline" size={size} color={color}/>
        </>
    )
}