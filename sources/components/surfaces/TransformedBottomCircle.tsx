import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";


const aditionalSize = Dimensions.get("screen").width * 0.3


const styles = StyleSheet.create(
    {
        square2: {
            width: Dimensions.get("screen").width + aditionalSize,
            height:Dimensions.get("screen").width + aditionalSize,
            position: "absolute",
            backgroundColor:colors.principal,
            borderRadius: (Dimensions.get("screen").width + aditionalSize) / 2,
            overflow: "hidden",
            bottom:0
        },
        container: {
            backgroundColor:"transparent",
            position:"absolute",
            top:0,
            height:Dimensions.get("window").height,
            width:Dimensions.get("screen").width,
            zIndex:-1
        },
        circle: {
            width: (Dimensions.get("screen").width + aditionalSize)  * 2,
            height: (Dimensions.get("screen").width + aditionalSize) * 2,
            borderRadius: Dimensions.get("screen").width + (aditionalSize /2),
            backgroundColor:colors.blackTenPercent,
           
        },
        circle2: {
            width: (Dimensions.get("screen").width + aditionalSize)  * 2,
            height: (Dimensions.get("screen").width + aditionalSize) * 2,
            borderRadius: Dimensions.get("screen").width + (aditionalSize /2),
            backgroundColor:colors.hightLightPrincipal + "90",
        }   
    }
)

type props = {
    rotation?:string
}

export const TransformedBottomCircle= ({rotation="50deg"}:props):JSX.Element=> {
    return (
            <View style={styles.container}>
                <View style={[
                    styles.square2,
                        {
                            transform:[
                                {translateY: (Dimensions.get("screen").width * 0.80)},
                                {translateX: -(aditionalSize / 2)},
                                {rotate:rotation},
                            ]
                        }
                     ]}>
                        <View style={[
                            styles.circle2,
                            {
                                transform: [
                                    {translateX:-(Dimensions.get("screen").width + aditionalSize )}
                                ]
                            }
                        ]}>
                
                        </View>
                        <View style={[
                            styles.circle,
                            {
                                transform:[
                                    {translateY: -((Dimensions.get("screen").width + aditionalSize)* 2)}
                                ]
                            }
                                
                        ]}>
                
                        </View>
                </View>
            </View>
    )
}