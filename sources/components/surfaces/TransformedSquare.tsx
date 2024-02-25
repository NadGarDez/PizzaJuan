import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";


const styles = StyleSheet.create(
    {
        square:{
            width: Dimensions.get("screen").width,
            height:Dimensions.get("screen").width,
            position: "absolute",
            backgroundColor:colors.principal,
            borderRadius:30,
            overflow: "hidden"
           
        },
        square2: {
            width: Dimensions.get("screen").width,
            height:Dimensions.get("screen").width,
            position: "absolute",
            backgroundColor:colors.principal,
            borderRadius:30,
            overflow: "hidden",
            top:Dimensions.get("window").height - Dimensions.get("screen").width
        },
        container: {
            flex:1,
            backgroundColor:colors.background_white,
            position:"absolute",
            top:0,
            height:Dimensions.get("window").height,
            width:Dimensions.get("screen").width,
            zIndex:-1
        },
        circle: {
            width: Dimensions.get("screen").width * 2,
            height: Dimensions.get("screen").width * 2,
            borderRadius: Dimensions.get("screen").width,
            backgroundColor:"#00000010",
           
        },
        circle2: {
            width: Dimensions.get("screen").width * 2,
            height: Dimensions.get("screen").width * 2,
            borderRadius: Dimensions.get("screen").width,
            backgroundColor:colors.hightLightPrincipal + "90",
        }   
    }
)

type props = {
    bottomShape?:boolean
}

export const TransformedSquare = ({bottomShape=false}:props):JSX.Element=> {
    return (
        <View style={styles.container}>
            <View style={[
                styles.square,
                {
                    transform:[
                        {translateY: -(Dimensions.get("screen").width * 0.56)},
                        {rotate:bottomShape ? "-45deg" : "-35deg"},
                    ]
                }
            ]}>
                <View style={[
                    styles.circle2,
                    {
                        transform: [
                            {translateX:-(Dimensions.get("screen").width * 1.3)}
                        ]
                    }
                ]}>

                </View>
                <View style={[
                    styles.circle,
                    {
                        transform:[
                            {translateY: -(Dimensions.get("screen").width * 2)}
                        ]
                    }
                
                ]}>

                </View>
            </View>
            {
                bottomShape ? (
                    <View style={[
                        styles.square2,
                        {
                            transform:[
                                {rotate:"45deg"},
                            ]
                        }
                    ]}>
                        <View style={[
                            styles.circle2,
                            {
                                transform: [
                                    {translateX:-(Dimensions.get("screen").width * 1.3)}
                                ]
                            }
                        ]}>
        
                        </View>
                        <View style={[
                            styles.circle,
                            {
                                transform:[
                                    {translateY: -(Dimensions.get("screen").width * 2)}
                                ]
                            }
                        
                        ]}>
        
                        </View>
                    </View>
                ): null
            }
        </View>
        
    )
}