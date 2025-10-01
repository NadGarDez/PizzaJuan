import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import LinearGradient from "react-native-linear-gradient";


const styles = StyleSheet.create(
    {
        square:{
            width: Dimensions.get("screen").width,
            height:Dimensions.get("window").height * 0.5,
            position: "absolute",
            backgroundColor:colors.principal,
            overflow: "hidden",
            borderBottomLeftRadius:12,
            borderBottomRightRadius:12
           
        },
        container: {
            flex:1,
            backgroundColor:colors.background_white,
            position:"absolute",
            top:0,
            height:Dimensions.get("window").height,
            width:Dimensions.get("screen").width,
            zIndex:-3
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
        },
        linearGradient: {
            position: "absolute",
            top:0,
            zIndex:-2,
            width:"100%",
            height: Dimensions.get("window").height,
        }  
    }
)

export const TransformedSquareWithoutRotation = ():JSX.Element=> {
    return (
        <>
            <View style={styles.container}>
                <View style={[
                    styles.square,
                ]}>
                    <View style={[
                        styles.circle2,
                        {
                            transform: [
                                {translateX:-(Dimensions.get("screen").width)}
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