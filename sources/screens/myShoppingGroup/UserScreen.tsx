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

export const UserScreen = ():JSX.Element=>{
    const onPress=()=>{

    }
    
    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="User screen" onPress={onPress}/>
        </View>
    )
}
