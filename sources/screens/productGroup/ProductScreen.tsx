import React, {  useEffect, useRef, useState } from "react";
import { StyleSheet, View, Dimensions, Animated, Pressable } from "react-native";
import { colors } from "../../styles/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { ProductInformationCard } from "../../components/surfaces/ProductInformationCard";
import { CarouselProductComplexComponent } from "../../components/surfaces/CarouselProductComplexComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { activeProductSelector, resetActiveProduct } from "../../redux/activeProductSlice";
import { shoppingCardSelector } from "../../redux/shoppingCardSlice";

const styles = StyleSheet.create(
    {
        floatingContainer:{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            zIndex:50,
            borderRadius:30,
            left:0,
            width: Dimensions.get("screen").width,
            backgroundColor: colors.white_card,
            overflow:"hidden",

        }
    }
)

type ProductScreenPropTypes = NativeStackScreenProps<ProductStackType,"PRODUCT_SCREEN">

const ScreenHeight = Dimensions.get("screen").height;

const defaultAnimationValue =Dimensions.get("window").height * 0.4 + 33;
const expandedAnimatedValue = Dimensions.get("window").height * (ScreenHeight>700 ? 0.65 : 0.83); 

export const ProductScreen = ({navigation}:ProductScreenPropTypes):JSX.Element =>{

    const product = useAppSelector(activeProductSelector);
    const car = useAppSelector(shoppingCardSelector)

    const dispatch  = useAppDispatch();

    const animation = useRef(new Animated.Value(defaultAnimationValue)).current;

    const [expanded, setExpand] = useState<boolean>(false);

    useEffect(
        ()=> {
            return ()=> {
                dispatch(resetActiveProduct())
            }
        },
        []
    )

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
        ).start(
)
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

    const onPressInformation = () => {
        if(expanded){
            contract()
        }
        else {
            expand()
        }
    }

    if(product === null) return <></>

    return (
        <>
            <CarouselProductComplexComponent 
                availablePan={!expanded}
                product={product}
            />
            <View>
                <Animated.View 
                        style={{
                            ...styles.floatingContainer,
                            bottom:0,
                            height: animation
                        }}
                >
                    <Pressable
                        onPress={onPressInformation}
                    >
                        <ProductInformationCard {...product} compressed={!expanded}/>
                    </Pressable>
                </Animated.View>
            </View>
        </>
    )
}