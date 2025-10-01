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
            borderRadius:100,
            overflow: "hidden"
           
        },

        container: {
            flex:1,
            backgroundColor:colors.background_white,
            position:"absolute",
            top:0,
            height:Dimensions.get("window").height,
            width:Dimensions.get("screen").width,
            zIndex:-2
        },
        circle: {
            width: Dimensions.get("screen").width * 2,
            height: Dimensions.get("screen").width * 2,
            borderRadius: Dimensions.get("screen").width,
            backgroundColor:colors.blackTenPercent,
           
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
    rotation?:string
}

export const TransformedSquare = ({rotation="-45deg"}:props):JSX.Element=> {
    return (
        <>
            <View style={styles.container}>
                <View style={[
                    styles.square,
                    {
                        transform:[
                            {translateY: -(Dimensions.get("screen").width * 0.30)},
                            {rotate:rotation},
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
            </View>
            
        </>
        
    )
}