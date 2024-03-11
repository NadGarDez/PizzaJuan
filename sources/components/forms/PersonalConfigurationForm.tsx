import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StandardOutlinedInput } from "../inputs/StandardOutlinedInput";

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

export const PersonalConfigurationForm = (): JSX.Element=> {
    return (
        <View style={styles.container}>
            <StandardOutlinedInput 
                placeholder="Nombre de usuario"
                onChangeCallback={
                    ()=>{
                        console.log("holix")
                    }
                }
            />
            {/* <StandardOutlinedInput 
                placeholder="Email"
                onChangeCallback={
                    ()=>{
                        console.log("holix")
                    }
                }
            /> */}
        </View>
    )
}