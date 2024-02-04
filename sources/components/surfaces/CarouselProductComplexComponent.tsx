import React, { useRef, useState } from "react";
import { View, Dimensions, StyleSheet, PanResponder, Platform, Text } from "react-native";
import { ProductInformationCard } from "./ProductInformationCard";
import { VariantSelector } from "../buttons/VariantSelector";
import { FloatingCarouselButtons } from "../buttons/FloatingCarouselButtons";
import { ImageCarousel } from "./ImageCarousel";
import { colors } from "../../styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        scrollContainer:{
            flex:1, 
            backgroundColor:"transparent",
        },
        scrollChildren: {
            display:"flex",
            flexDirection:"column",
            backgroundColor: "transparent",
        },
        floatingItemsContainer: {
            height:Dimensions.get("screen").height * 0.6 - 32,
            display: "flex",
            flexDirection: "column"
        },
        scroll: {
        },
        topFloatingItem: {
            flex:1,
        },
        centerFloatingItem: {
            flex:3,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal:16
        },
        bottomFloatingItem: {
            paddingVertical:16
        },
        gradient:{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            zIndex:-1,
            top:0,
            left:0,
            height: Dimensions.get("screen").height ,
            width: Dimensions.get("screen").width
        },
        colorLimit:{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            zIndex:-2,
            bottom:29 ,
            borderRadius:30,
            left:0,
            height: Platform.select({
                ios:Dimensions.get("screen").height * 0.4,
                android:Dimensions.get("screen").height * 0.3,
            }),
            width: Dimensions.get("screen").width,
            backgroundColor: colors.white_card
        },
        absoluteRight: {
            position: "absolute",
            right: 16,
            display:"flex",
            flexDirection:"column",
            marginVertical: Dimensions.get("screen").height * 0.15,
            backgroundColor: "red",
            height: 16
        },

        absoluteRight2: {
            position: "absolute",
            right: 16,
            display:"flex",
            flexDirection:"column",
            marginVertical: Dimensions.get("screen").height * 0.3,
            backgroundColor: "red",
            height: 16
        },
        box: {

        }

    }
)


const staticData = {
    productName:"Pizza Cuatro Quesos",
    price:12,
    favorite:true,
    images:[
        "https://img.freepik.com/foto-gratis/persona-recibiendo-pedazo-deliciosa-pizza-pepperoni-queso_181624-18235.jpg",
        "https://img.freepik.com/foto-gratis/vista-lateral-pizza-pimiento-tomate-rebanadas-pizza-utensilios-cocina_176474-3184.jpg",
        "https://img.freepik.com/fotos-premium/pizza-pepperoni-italiana-clasica-plato-vacio-vista-superior-foto-vertical-foto-alta-calidad_275899-621.jpg",
        "https://media.istockphoto.com/id/184921098/photo/pizza.jpg?s=612x612&w=0&k=20&c=qY8nQ9g-gc1dN5lJPnp84cq5M_8dA6JI4UGHyokkOCc="
    ],
    likes:12,
    description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
    variants: [
        {
            name: "Individual",
            image: "https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg"
        },
        {
            name: "Mediana",
            image: "https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg"
        },
        {
            name: "Familiar",
            image: "https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg"
        }
    ]
}

type props = {
    availablePan:boolean
}


export const CarouselProductComplexComponent = ({availablePan}:props):JSX.Element=> {

    const [focusImage, setFocusImage] = useState<number>(0);
    const [dx, setDx] =  useState<number>(0);
    const [released, setReleased] = useState<boolean>(false);

    const changeFocus = (index:number)=>setFocusImage(index);

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
                            staticData.images
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
            {/* <View style={styles.absoluteRight}>
                        
                        <TouchableOpacity>
                            <Text>
                                box 1
                            </Text>
                        </TouchableOpacity>
            </View> */}

            <VariantSelector 
                                visible={availablePan}
                                variants={staticData.variants}
                                onChangeVariant={
                                    (index)=>{}
                                }
                            />

            
        </>
    )
}

{/* <View style={styles.scrollChildren}>
                <View style={styles.floatingItemsContainer}>
                    <View style={styles.topFloatingItem}>

                    </View>
                    <View style={styles.centerFloatingItem}>
                            <VariantSelector 
                                visible={availablePan}
                                variants={staticData.variants}
                                onChangeVariant={
                                    (index)=>{}
                                }
                            />
                    </View>
                    <View style={styles.bottomFloatingItem}>
                        <FloatingCarouselButtons numberOfItems={4} onPressItem={changeFocus} focused={focusImage} visible={availablePan} /> 
                    </View>
                </View>

            </View> */}