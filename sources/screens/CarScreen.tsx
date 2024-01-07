import React from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../components/HelloWorldComponent"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../navigation/CarStack"
import { useNavigation } from "@react-navigation/native"

const styles = StyleSheet.create(
    {
        container : {
            flex:1
        }
    }
)

type CarScreenPropType = StackNavigationProp<CarStackProp, "CAR_SCREEN">

export const CarScreen = ():JSX.Element=>{

    const {navigate} = useNavigation<CarScreenPropType>()
    
    const onPress=()=>{
        navigate("PAY_SCREEN");
    }
    
    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Ventana de carrito" onPress={onPress}/>
        </View>
    )
}
