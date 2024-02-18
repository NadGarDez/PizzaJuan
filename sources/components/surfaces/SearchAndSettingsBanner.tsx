import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WhiteInputWithSearchIcon } from "../inputs/WhiteInputWithIconSearch";
import { FilterButton } from "../buttons/FilterButton";



const styles = StyleSheet.create(
    {
        container : {
            marginTop:18,
            paddingHorizontal:16,
            width:"100%",
            display:"flex",
            flexDirection: "row",
        },
        inputContainer: {
            flex:1,
        },
        buttonContainer: {
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-end",
            marginLeft:16
        },

    }
)

export const SearchAndSettingsBanner = ():JSX.Element=> {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <WhiteInputWithSearchIcon/>
            </View>
            {/* <View style={styles.buttonContainer}>
                <FilterButton 
                    onPress={()=>{}}
                />
            </View> */}
        </View>
    )
}