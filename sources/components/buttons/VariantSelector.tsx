import React from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { PizzaIcon } from "../icons/PizzaIcon";



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    variantContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 50,
        minHeight:50,
        backgroundColor: colors.white_card + 90,
        borderRadius:14,
        padding: 8
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
    }
})

type variant = {
    name:string,
    image:string
}
type props = {
    variants: variant[]
}


const Item = ({name, image}:{name:string, image:string})=> {
    return (
        <View style={styles.variantContainer}>
            <PizzaIcon />
            <Text style={styles.variantText}>
                {name}
            </Text>
        </View>
    )
}

export const VariantSelector = ({variants}:props):JSX.Element => {
    return (
       <Animated.View style={styles.container}>
            {
                variants.map(
                    (item, index) => (
                       <Item name={item.name} image={item.image}/>
                    )
                )
            }

       </Animated.View>
    )
}