import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { shadows } from "../styles/shadow"; 
import { colors } from "../styles/colors";
import { PrincipalButton } from "./buttons/PrincipalButton";


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:colors.background_white,
            borderBottomRightRadius:16,
            borderBottomLeftRadius:16
        },
        text:{
            color:colors.black,
            fontWeight:"700",
            fontSize:25,
            textAlign:"center",
        },
        textContainer:{
            paddingVertical:16,
            borderRadius:16,
            width:"80%",
            backgroundColor:colors.white_card,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            ...shadows.principalShadow
        },
        textSecondary:{
            color:colors.black_thin,
            fontWeight:"400",
            fontSize:16,
            marginTop:8
        },
        circleContainer:{
            width:300,
            height:300,
            backgroundColor:colors.principal,
            borderRadius:150,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            marginBottom:24,
            ...shadows.principalShadow
        },

        blackCircleContainer: {
          
                width:280,
                height:280,
                backgroundColor:colors.principal,
                borderRadius:150,
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                borderStyle:"solid",
                borderWidth:5,
                borderColor:colors.black
                
        },

        textTitle:{
            color:colors.black,
            fontSize:30,
            fontWeight:"700"
        },

        buttonContainer:{
            marginTop:8
        }
    }
)

type props = {
    sectionMessage: string,
    onPress: ()=>void
}


export const HelloWorldComponent = ({sectionMessage, onPress}: props): JSX.Element=>{
    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.blackCircleContainer}>
                    <Text style={styles.textTitle}>
                        Pizza {"\n"} Juan
                    </Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {sectionMessage}
                </Text>
                <Text style={styles.textSecondary}>
                    Tu pizzeria siempre
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrincipalButton onPress={onPress}>
                    <Text>
                        Siguiente
                    </Text>
                </PrincipalButton>
            </View>
        </View>
    )
}