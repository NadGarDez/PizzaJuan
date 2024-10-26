import React, { useEffect, useRef } from "react"
import {Animated, Dimensions, StyleSheet, Image, Platform } from "react-native"
import { BASE_URL } from "../../constants/apiConstants"
import { colors } from "../../styles/colors"

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
        position: "relative",
        backgroundColor: colors.hightLightPrincipal + '50'
    },
    imageStyles: {
        height: Dimensions.get("window").height * 0.60,
        width: Dimensions.get("screen").width,
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
                                        uri: BASE_URL + item,
                                        cache: 'force-cache',
                                    }}
                                    style={{
                                        ...styles.imageStyles,
                                    }}
                                    resizeMode='cover'
                                />
                            )
                        )
                    }

            </Animated.View>
        </>
    )
}