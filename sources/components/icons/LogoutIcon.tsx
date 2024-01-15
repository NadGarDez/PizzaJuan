import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const LogOutIcon = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="logout" size={size} color={color}/>
        </>
    )
}