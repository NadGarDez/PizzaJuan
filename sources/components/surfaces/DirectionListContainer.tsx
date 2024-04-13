import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { DESCRIPTION, PLUS_CODE } from "../../constants/userConfigurationConstants";
import { LocationIcon } from "../icons/LocationIcon";
import { toggableListItem } from "../../types/forms/generalFormTypes";

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:2000,
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
    semiTransparentCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#00000020",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
});

type aditionalProps = {

}

type props = tabViewSceneProps & aditionalProps

const staticValues: toggableListItem[] = [
    {
        title: 'Direccion 1',
        [PLUS_CODE]: 'JJXX+HR8',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 2',
        [PLUS_CODE]: 'JJXX+HRR',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 3',
        [PLUS_CODE]: 'JJXX+HR0',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 4',
        [PLUS_CODE]: 'JJXX+HR1',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 5',
        [PLUS_CODE]: 'JJXX+HR0',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 6',
        [PLUS_CODE]: 'JJXX+HR1',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 7',
        [PLUS_CODE]: 'JJXX+HR0',
        [DESCRIPTION]: 'Esta es una direccion',
    },
    {
        title: 'Direccion 8',
        [PLUS_CODE]: 'JJXX+HR1',
        [DESCRIPTION]: 'Esta es una direccion',
    }
];

export const DirectionListContainer = (props:props): JSX.Element=> {

    const {jumpTo} = props;

    const onPressCreate = ()=> {
        jumpTo("second");
    }

    const leftItem = ()=> {
        return (
            <View style={styles.semiTransparentCircle}>
                <LocationIcon color={colors.white_card}/>
            </View>
        )
    }

    return (
       <View style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    Direcciones disponibles
                </Text>
             </View>
            <ToggableList 
                data={staticValues} 
                leftItem={leftItem}
                voidMessage="No hay direcciones disponibles"
            /> 
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