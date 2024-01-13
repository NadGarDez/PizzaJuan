import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";

type props = {
    size?:number
}

export const LocationIcon = ({size=25}:props):JSX.Element => {
    return (
        <>
            <Icon name="location-outline" size={size} color={colors.black_thin}/>
        </>
    )
}