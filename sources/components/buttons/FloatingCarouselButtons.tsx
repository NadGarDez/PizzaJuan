import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";



const styles = StyleSheet.create(
    {
        container : {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },
        buttonsContainer: {
            paddingVertical:8,
            width: "30%",
            backgroundColor: colors.white_card + "98",
            borderRadius:12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        itemStyles : {
            width: 10,
            height: 10,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: colors.black_thin,
            borderRadius:5,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding:2
        },
        fillStyles: {
            width:6,
            height: 6,
            borderRadius:3,
        }
    }
)

type props = {
    numberOfItems: number,
    onPressItem: (index:number)=>void ,
    focused: number,
    visible:boolean
}

const Item = ({focused, onPress}:{focused:boolean, onPress:()=>void}):JSX.Element=> {
    return (
        <Pressable onPress={onPress}>
             <View style={
                    {
                        ...styles.itemStyles,
                    }
            }>
                <View style={{
                    ...styles.fillStyles,
                    backgroundColor: focused ? colors.black_thin  : "transparent"
                    }}>

                </View>

            </View>
        </Pressable>
    )
}

export const FloatingCarouselButtons = ({numberOfItems,focused, onPressItem, visible}:props):JSX.Element=> {
    const items = Array(numberOfItems).fill(0);
    const animation = useRef(new Animated.Value(0)).current;
    

    useEffect(
        ()=> {
            if(visible){
                fadeIn();
            }
            else {
                fadeOut()
            }
        },
        [visible]
    )

    const fadeIn = ()=> {
        Animated.timing(
            animation,
            {
                toValue:1,
                useNativeDriver:false,
                duration:500
            }
        ).start()
    }

    const fadeOut = ()=> {
        Animated.timing(
            animation,
            {
                toValue:0,
                useNativeDriver:false,
                duration:500
            }
        ).start()
    }


    return (
        <View style={styles.container}>
            <Animated.View style={
                {
                    ...styles.buttonsContainer,
                    opacity:animation,
                }
            }>
                {
                    items.map(
                        (item, index) => (
                            <Item focused={index===focused} key={`${index}-carousel-button`} 
                            
                                onPress={
                                    ()=> {
                                        onPressItem(index)
                                    }
                                }
                            />
                        )
                    )
                }
            </Animated.View>    
        </View>
    )
}
