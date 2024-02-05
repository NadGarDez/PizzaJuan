import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { PizzaIcon } from "../icons/PizzaIcon";
import { shadows } from "../../styles/shadow";



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%"
    },
    variantContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 50,
        maxWidth:70,
        minHeight:50,
        borderRadius:14,
        padding:8
    },
    imageStyles: {
        width: 30,
        minHeight:30
    },
    variantText: {
        color:colors.black,
        fontSize:12,
        fontWeight:"300",
        marginTop:4
    },
    selectedStyles: {
        backgroundColor:colors.white_card,
        ...shadows.principalShadow
    },
    unselectedStyles: {
        backgroundColor:colors.white_card + 90,
    }
})

type variant = {
    name:string,
    image:string
}
type props = {
    variants: variant[],
    visible:boolean,
    onChangeVariant: (index:number)=>void
}


const segmentsStart = Dimensions.get("screen").height * 0.10;
const availableHeightForItems = Dimensions.get("screen").height * 0.4

const getTopMargin = (index:number, segmentHeight:number):number=> {
    const startSegment = segmentsStart + (index * segmentHeight)
    const centerValue =  (segmentHeight - 60) / 2;
    return startSegment + centerValue;
}

const Item = ({name, selected, onPress, index, segmentHeight}:{name:string, selected:boolean, onPress:()=>void, index:number, segmentHeight:number})=> {

    const containerStyles = selected ? {...styles.variantContainer, ...styles.selectedStyles} : {...styles.variantContainer, ...styles.unselectedStyles, }

    return (
            <Pressable
                onPress={
                    onPress
                }
            >
             <View 
                 style={containerStyles} 
             >
             <PizzaIcon />
                 <Text style={styles.variantText} numberOfLines={2}>
                     {name}
                 </Text>
             </View>
         </Pressable>
    )
}

export const VariantSelector = ({variants, visible, onChangeVariant}:props):JSX.Element => {

    const animation = useRef(new Animated.Value(1)).current;

    const [selectedIndex, setSelectedIndex] = useState<number>(0);


    const [segmentHeight, setSegmentHeight]= useState<number>(0)

    const [displayButtons, setDisplayButtons] = useState<boolean>(true)

    useEffect(
        ()=> {
            setSegmentHeight(availableHeightForItems / variants.length)
            const listener = animation.addListener(
                ({value})=> {
                    if (value > 0) setDisplayButtons(true)
                    else setDisplayButtons(false) 
                }
            )

            return ()=> {
                animation.removeAllListeners()
            }
        
            
        },
        []
    )


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

    const onPressItem = (index:number)=> {
        setSelectedIndex(index);
    }

    useEffect(
        ()=> {
            onChangeVariant(selectedIndex)
        },
        [selectedIndex]
    )
    return (
       <>
       
            {
                variants.map(
                    (item, index) => (
                            <Animated.View
                                style={
                                    {
                                        opacity:animation,
                                        position: "absolute", right:16, marginTop:getTopMargin(index, segmentHeight), 
                                        display: displayButtons ? "flex" : "none"
                                    }
                                }
                                key={`variant-item-${item.name}-${index}`}
                            >
                                <Item name={item.name} selected={index === selectedIndex} index={index} segmentHeight={segmentHeight}
                                    onPress={
                                        ()=>onPressItem(index)
                                    }
                                />
                            </Animated.View>
                    )
                )
            } 

       </>
    )
}

// <Animated.View style={
//             {
//                 ...styles.container,
//                 opacity: animation
//             }
//         }>
//             {
//                 variants.map(
//                     (item, index) => (
//                        <Item name={item.name} selected={index === selectedIndex} key={`variant-item-${item.name}-${index}`}
//                             onPress={
//                                 ()=>onPressItem(index)
//                             }
//                        />
//                     )
//                 )
//             }

//        </Animated.View>