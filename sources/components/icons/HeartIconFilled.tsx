import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";

type props = {
    size?:number,
    color?:string
}

export const HeartIconFilled = ({size=25,color=colors.black_thin}:props):JSX.Element => {
    return (
        <>
            <Icon name="heart-sharp" size={size} color={color}/>
        </>
    )
}