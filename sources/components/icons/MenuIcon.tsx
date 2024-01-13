import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";

type props = {
    size?:number
}

export const MenuIcon = ({size=25}:props):JSX.Element => {
    return (
        <>
            <Icon name="menu-sharp" size={size} color={colors.black_thin}/>
        </>
    )
}