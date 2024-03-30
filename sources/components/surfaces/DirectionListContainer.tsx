import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    subtitleContainer: {
        width: "100%",
        marginBottom: 8
    },
    subtitleText: {
        fontSize:20,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    textStyles: {
        color:colors.white_card,
        fontWeight:"400"
    },
    textContainer: {
        height:24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
});

type aditionalProps = {

}

type props = tabViewSceneProps & aditionalProps


export const DirectionListContainer = (props:props): JSX.Element=> {

    const {jumpTo} = props;

    const onPressCreate = ()=> {
        jumpTo("second");
    }

    return (
       <View style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    Direcciones disponibles
                </Text>
             </View>
            <ToggableList />
            <PrincipalButton onPress={onPressCreate} radius={5}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyles}>
                        Agregar Direccion
                    </Text>
                </View>
            </PrincipalButton>
       </View>
    )
}