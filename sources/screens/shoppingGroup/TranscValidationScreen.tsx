import React from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"

const styles = StyleSheet.create(
    {
        container : {
            flex:1
        }
    }
)

export const TranscValidationScreen = ():JSX.Element=>{
    const onPress=()=>{

    }
    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Ventana de validacion de transaccion" onPress={onPress}/>
        </View>
    )
}
