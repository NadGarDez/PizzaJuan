import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";



const styles = StyleSheet.create(
    {
        container : {
            margin:"auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            position:"absolute",
            top:Dimensions.get("window").height*0.6 - (41 + 27),
            left:Dimensions.get("screen").width*0.35
        },
        buttonsContainer: {
            paddingVertical:8,
            width: Dimensions.get("screen").width*0.3,
            maxHeight:27,
            backgroundColor: colors.white_card + "98",
            borderRadius:12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },
        itemStyles : {
            width: 10,//10,
            height: 10,//10,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: colors.black_thin,
            borderRadius:5,//5,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 6
        },
        fillStyles: {
            width:5,
            height: 5,
            borderRadius:2.5,//3,
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
