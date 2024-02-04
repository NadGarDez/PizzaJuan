import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Platform, Dimensions, ScrollView, PanResponder, Animated, Pressable, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";
import { HelloWorldComponent } from "../../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../constants/querys";
import { HeartIconFilled } from "../../components/icons/HeartIconFilled";
import { PlusLessButton } from "../../components/buttons/PlusLessButton";
import { AddToCarButton } from "../../components/buttons/AddToCarButton";
import { ImageCarousel } from "../../components/surfaces/ImageCarousel";
import { FloatingCarouselButtons } from "../../components/buttons/FloatingCarouselButtons";
import { VariantSelector } from "../../components/buttons/VariantSelector";
import { ProductInformationCard } from "../../components/surfaces/ProductInformationCard";
import LinearGradient from "react-native-linear-gradient";
import { CarouselProductComplexComponent } from "../../components/surfaces/CarouselProductComplexComponent";

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
            backgroundColor:"red",//"#f6f6f6",//colors.background_white,
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
        floatingContainer:{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            zIndex:50,
            bottom:29 ,
            borderRadius:30,
            left:0,
            width: Dimensions.get("screen").width,
            backgroundColor: colors.white_card,
            overflow:"hidden",

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

const screenWidth = Dimensions.get("screen").width;


type ProductScreenPropTypes = NativeStackScreenProps<ProductStackType,"PRODUCT_SCREEN">

type xAxisLimitType = {
    rightLimit:number,
    leftLimit:number
}

const getBreackPointNext = (index:number):xAxisLimitType=> {
    const rightLimit = (-1)*((index + 1) * screenWidth);
    const leftLimit = rightLimit + (screenWidth * 0.2);

    return {
        rightLimit,
        leftLimit
    }
} 
const getBreackPointBack = (index:number):xAxisLimitType=> {
    const rightLimit = (-1)*((index * screenWidth)-1);
    const leftLimit = rightLimit + (screenWidth * 0.6);

    return {
        rightLimit,
        leftLimit
    }
}

const defaultAnimationValue = Platform.OS === "ios" ? Dimensions.get("screen").height * 0.4 : Dimensions.get("screen").height * 0.34;
const expandedAnimatedValue = Dimensions.get("screen").height * 0.65;

export const ProductScreen = ({navigation}:ProductScreenPropTypes):JSX.Element =>{

    //this screen should fetch the product

    const {loading, error, data} = useQuery(GET_PRODUCTS);

    const animation = useRef(new Animated.Value(defaultAnimationValue)).current;

    const [expanded, setExpand] = useState<boolean>(false);

    // const [dy, setDy]= useState<number>(0);

    const onPress =()=>{
        navigation.navigate("PRODUCT_SELLER_SCREEN", {sellerId:"123"});
    }


    

    const expand = ()=> {
        setExpand(true)
        Animated.spring(
            animation,
            {
                toValue:expandedAnimatedValue,
                friction:5,
                tension:25,
                useNativeDriver:false
            }
        ).start()
    }

    const contract = ()=> {
        setExpand(false);
        Animated.spring(
            animation,
            {
                toValue:defaultAnimationValue,
                friction:5,
                tension:25,
                useNativeDriver:false
            }
        ).start()
    }

    // useEffect(
    //     ()=> {
    //         const baseHeight = expanded ? expandedAnimatedValue : defaultAnimationValue;
    //         animation.setValue(baseHeight+(dy*-1))
    //     },
    //     [dy]
    // )

    // const panResponder = useRef(
    //     PanResponder.create({
    //         // Ask to be the responder.
    //         onStartShouldSetPanResponder: (evt, gestureState) => true,
    //         onMoveShouldSetPanResponder: (evt, gestureState) => true,
    //         /**
    //          * When we start the pan tell the machine that we're
    //          * seeking. This stops it from updating the seekbar
    //          * position in the onProgress listener.
    //          */
    //         onPanResponderGrant: (evt, gestureState) => {
    //         },
      
    //         /**
    //          * When panning, update the seekbar position, duh.
    //          */
    //         onPanResponderMove: (evt, gestureState) => {
    //             if(gestureState.dy > -300 && gestureState.dy < 300 ){
    //                 setDy(gestureState.dy)
    //             }
               
    //         },
      
    //         /**
    //          * On release we update the time and seek to it in the video.
    //          * If you seek to the end of the video we fire the
    //          * onEnd callback
    //          */
    //         onPanResponderRelease: (evt, gestureState) => {
    //             if(gestureState.dy < 1){
    //                 console.log(gestureState.dy)
    //                 expand()
    //             }
    //             else {
    //                 contract()
    //             }
    //         },  
    //       })
    // ).current;

    const onPressInformation = () => {
        console.log("on press")
        if(expanded){
            contract()
        }
        else {
            expand()
        }
    }

    return (
        <>
            <CarouselProductComplexComponent 
                availablePan={!expanded}
            />
            <View>
            <Pressable
                onPress={onPressInformation}
                style={styles.floatingContainer}
            >
                <Animated.View 
                    style={
                        {
                           
                            height: animation
                        }
                    }
                >
                    <ProductInformationCard {...staticData}/>
                </Animated.View>
            </Pressable>
            </View>
            
        </>
        // <View style={styles.container}
        //     // {...panResponder.panHandlers}
        // >
        //     <View style={styles.scrollContainer}
        //     >
        //     <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} 
        //           {...panResponder.panHandlers}
        //         onScroll={
        //             ({nativeEvent:{contentOffset:{y}}})=>{
        //                 if(y >= 30 && showCarouselButtons){
        //                     setShowCarouselButtons(false);
        //                 } 
        //                 else if (y < 30 && !showCarouselButtons) {
        //                     setShowCarouselButtons(true);
        //                 }
        //             }
        //         }
        //         scrollEventThrottle={100}
        //     >
        //         <View style={styles.scrollChildren}>
        //             <View style={styles.floatingItemsContainer}>
        //                 <View style={styles.topFloatingItem}>

        //                 </View>
        //                 <View style={styles.centerFloatingItem}>
        //                         <VariantSelector 
        //                             visible={showCarouselButtons}
        //                             variants={staticData.variants}
        //                             onChangeVariant={
        //                                 (index)=>{}
        //                             }
        //                         />
        //                 </View>
        //                 <View style={styles.bottomFloatingItem}>
        //                     <FloatingCarouselButtons numberOfItems={4} onPressItem={changeFocus} focused={focusImage} visible={showCarouselButtons} /> 
        //                 </View>
        //             </View>

        //             <ProductInformationCard {...staticData}/>
                   
        //         </View>
        //     </ScrollView>
        //     </View>
        //     <View style={styles.productInformationContainer}>
        //         <View style={styles.imageContainer}>
        //            <ImageCarousel 
        //                 focused={focusImage}
        //                 data={
        //                    staticData.images
        //                 }
        //                 dx={dx}
        //                 released={released}
        //                 setFocus={changeFocus}
        //            />
        //         </View>
        //     </View>
          
        //     <View style={styles.colorLimit}>

        //     </View>
        // </View>
    )
}