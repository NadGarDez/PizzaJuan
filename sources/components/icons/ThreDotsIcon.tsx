import React from "react";
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const ThreDotsIcon = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="dots-three-horizontal" size={size} color={color}/>
        </>
    )
}