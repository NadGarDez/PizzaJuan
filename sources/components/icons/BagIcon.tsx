import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const BagIcon = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="bag-handle-outline" size={size} color={color}/>
        </>
    )
}