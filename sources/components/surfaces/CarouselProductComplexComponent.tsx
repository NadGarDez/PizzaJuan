import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, StyleSheet, PanResponder } from "react-native";
import { VariantSelector } from "../buttons/VariantSelector";
import { FloatingCarouselButtons } from "../buttons/FloatingCarouselButtons";
import { ImageCarousel } from "./ImageCarousel";
import { colors } from "../../styles/colors";
import { baseProduct } from "../../types/api/productTypes";
import { getImagesFromBaseProduct } from "../../utils/complexSelectors";

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: colors.white_card,
        },
        productInformationContainer: {
            position:"absolute",
            top:0,
            left:0,
            width: "100%",
            
            zIndex:-2,
        },
        imageContainer: {
            display:"flex",
            backgroundColor:colors.white_card,
            overflow:"hidden"
        },
        colorLimit:{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            zIndex:-2,
            bottom:0 ,
            borderRadius:30,
            left:0,
            height:Dimensions.get("window").height * 0.4 + 33,
            width: Dimensions.get("screen").width,
            backgroundColor: colors.white_card
        },
    }
)

type variant = {
    name:string,
    image:string
}

type props = {
    availablePan:boolean,
    product: baseProduct
}


export const CarouselProductComplexComponent = (props:props):JSX.Element=> {

    const {availablePan, product} = props;

    const [focusImage, setFocusImage] = useState<number>(0);
    const [dx, setDx] =  useState<number>(0);
    const [released, setReleased] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([]);

    const changeFocus = (index:number)=>setFocusImage(index);


    useEffect(
        ()=> {
            setImages(getImagesFromBaseProduct(product));
        },
        [props]
    )
    const panResponder = useRef(
        PanResponder.create({
            // Ask to be the responder.
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            /**
             * When we start the pan tell the machine that we're
             * seeking. This stops it from updating the seekbar
             * position in the onProgress listener.
             */
            onPanResponderGrant: (evt, gestureState) => {
            },
      
            /**
             * When panning, update the seekbar position, duh.
             */
            onPanResponderMove: (evt, gestureState) => {
                if(gestureState.y0  <Dimensions.get("screen").height * 0.57){
                    setReleased(false);
                    setDx(gestureState.dx);
                }
            },
      
            /**
             * On release we update the time and seek to it in the video.
             * If you seek to the end of the video we fire the
             * onEnd callback
             */
            onPanResponderRelease: (evt, gestureState) => {
                setReleased(true);
            },  
          })
    ).current;


    return (
        <>
            <View style={styles.container}
                {...panResponder.panHandlers}
            >
                <View style={styles.productInformationContainer}
                >
                    <View style={styles.imageContainer}>
                    <ImageCarousel 
                            focused={focusImage}
                            data={
                               images
                            }
                            dx={dx}
                            released={released}
                            setFocus={changeFocus}
                    />
                    </View>
                </View>
        
                <View style={styles.colorLimit}>

                </View>
            </View>
            <VariantSelector 
                visible={availablePan}
                variants={product.variants || []}
                onChangeVariant={
                    (index)=>{}
                }
            />
            <FloatingCarouselButtons numberOfItems={images.length} onPressItem={changeFocus} focused={focusImage} visible={availablePan} /> 
        </>
    )
}