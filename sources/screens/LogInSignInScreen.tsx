import React from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../components/HelloWorldComponent"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../navigation/CarStack"
import { LogInSignInStackPropType } from "../navigation/LogInSignInStack"

const styles = StyleSheet.create(
    {
        container : {
            flex:1
        }
    }
)

type LogInSignInScreenPropType = StackNavigationProp<LogInSignInStackPropType, "LOG_IN_SIGN_IN_SCREEN">

export const LogInSignInScreen = ():JSX.Element=>{
    
    const onPress=()=>{
    }
    
    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Ventana de inicio de sesion" onPress={onPress}/>
        </View>
    )
}
