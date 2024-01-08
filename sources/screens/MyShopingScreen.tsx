import React from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../components/HelloWorldComponent"
import { StackNavigationProp } from "@react-navigation/stack"
import { MyShoppingStackProps } from "../navigation/MyShopingStack"

const styles = StyleSheet.create(
    {
        container : {
            flex:1
        }
    }
)

type MyShoppingScreenProps = StackNavigationProp<MyShoppingStackProps, "MY_SHOPING_SCREEN">

export const MyShoppingScreen = ():JSX.Element=>{

    const onPress = ():void=>{
        
    }

    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Mis compras" onPress={onPress}/>
        </View>
    )
}
