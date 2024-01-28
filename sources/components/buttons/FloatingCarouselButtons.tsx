import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
            backgroundColor: colors.black_thin + "98",
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
            borderColor: colors.white_card + "90",
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
    focused: number
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
                    backgroundColor: focused ? colors.white_card+"90"  : "transparent"
                    }}>

                </View>

            </View>
        </Pressable>
    )
}

export const FloatingCarouselButtons = ({numberOfItems,focused, onPressItem}:props):JSX.Element=> {
    const items = Array(numberOfItems).fill(0);



    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
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
            </View>    
        </View>
    )
}
