import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";

type props = {
    size?:number
}

export const BackIcon = ({size=25}:props):JSX.Element => {
    return (
        <>
            <Icon name="chevron-back-outline" size={size} color={colors.black_thin}/>
        </>
    )
}