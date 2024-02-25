import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const EditIcon = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="edit-2" size={size} color={color}/>
        </>
    )
}