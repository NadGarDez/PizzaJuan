import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useEffect, useRef, useState } from "react"

import {Animated, Dimensions, StyleSheet, Image, PanResponder, Platform} from "react-native"
import { ProductStackType } from "../../navigation/Stacks/ProductStack"
import LinearGradient from "react-native-linear-gradient"

type props = {
    data: string[],
    focused:number,
    dx:number,
    released:boolean,
    setFocus: (index:number)=>void
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

const isNeededNext = (dx:number, index:number, dataLength:number):boolean=> {
    if(index === dataLength - 1) return false;
    const platformValue = Platform.select(
        {
            ios:-150,
            android:-50
        }
    )
    return dx < platformValue!;
}

const isNeededBack = (dx:number, index:number):boolean=> {
    if(index === 0) return false;
    const platformValue = Platform.select(
        {
            ios:150,
            android:50
        }
    )
    return dx > platformValue!;
}


export const ImageCarousel = ({data, focused,dx, released, setFocus}:props):JSX.Element=> {

    const [currentAnimationValue, setCurrentAnimationValue] = useState<number>(0);
 
    const animation = useRef(
        new Animated.Value(0)
    ).current;

    const validations = () => {
        if (released === false) return;
        if(isNeededNext(dx,focused,data.length)){
            const newFocus = focused + 1
            setFocus(newFocus) 
            return 
        }
        if(isNeededBack(dx,focused)){
            const newFocus = focused - 1
            setFocus(newFocus)  
            return
        }
        goToImage(focused)
        return ;
    }

    useEffect(
        ()=>{
            animation.addListener(
                ({value})=>setCurrentAnimationValue(value)
            );
            return ()=> {
                animation.removeAllListeners()
            }
        },
        []
    )

    useEffect(
        ()=>validations()
        ,
        [released, dx]
    )



    useEffect(
        ()=>{
            const negativePage = (focused* screenWidth) * (-1)
            animation.setValue(dx + negativePage);
        },
        [dx]
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
                toValue:toValue*(-1),
                friction:5,
                tension:25,
                useNativeDriver:false
            }
        ).start()
    }

    return (
        <>
            <Animated.View style={
                {
                    ...styles.container,
                    left: animation
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
        </>
    )
}