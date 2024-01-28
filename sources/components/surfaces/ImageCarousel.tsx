import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useEffect, useRef, useState } from "react"

import {Animated, Dimensions, StyleSheet, Image} from "react-native"
import { ProductStackType } from "../../navigation/Stacks/ProductStack"

type props = {
    data: string[],
    focused:number
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        position: "relative"
    },
    imageStyles: {
        height: Dimensions.get("screen").height * 0.6,
        width: Dimensions.get("screen").width
    },
})

const screenWidth = Dimensions.get("screen").width;


export const ImageCarousel = ({data, focused}:props):JSX.Element=> {



    const [negativeInt,setNegativeInt ] = useState<number>(0);

 
    const animation = useRef(
        new Animated.Value(0)
    ).current;

    animation.addListener(
        ({value})=>{
            setNegativeInt(value*(-1));
        }
    )

    useEffect(
        ()=>{
            if(data.length -1 >= focused) goToImage(focused)
        },
        [focused]
    )

    const goToImage = (index:number)=> {

        const toValue = index*screenWidth

        Animated.spring(
            animation,
            {
                toValue,
                friction:5,
                tension:25,
                useNativeDriver:false
            }
        ).start()
    }

    const gotToInitial= (func:(obj:{finished:boolean})=>void)=> {
        Animated.timing(
            animation,
            {
                toValue:0,
                duration:100,
                useNativeDriver:false
            }
        ).start(func)
    }

    return (
        <Animated.View style={
                {
                    ...styles.container,
                    left: negativeInt
                }
                }>
                    {
                        data.map(
                            (item, index)=>(
                                <Image
                                    key={`${index}-image-carousel`}
                                    source={{
                                        uri: item
                                    }}
                                    style={{
                                        ...styles.imageStyles,
                                    }}
                                />
                            )
                        )
                    }

        </Animated.View>
    )
}