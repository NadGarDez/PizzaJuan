import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { DESCRIPTION, PLUS_CODE } from "../../constants/userConfigurationConstants";
import { LocationIcon } from "../icons/LocationIcon";
import { toggableListItem } from "../../types/forms/generalFormTypes";
import { getResourceList } from "../../utils/apiRequests";
import { useDispatch, useSelector } from "react-redux";
import { sessionTokenSelector } from "../../redux/SessionReducer";
import { deliveryLocationGeneralReducerSelector, deliveryLocationSelector } from "../../redux/deliveryLocationSlicer";
import { deliveryLocationRequestSagasAction } from "../../sagas/deliveryLocationSagas";

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

const transformResults = (data: Record<string, any>[]) => data.map(
    item => {
        return {
            name: item['name'],
            ['Código Plus']: item['plus_code'],
            ['Descripción']: item['description'],
        }
    }
)

export const DirectionListContainer = (props:props): JSX.Element=> {

    const token = useSelector(sessionTokenSelector)

    const data = useSelector(deliveryLocationSelector);
    const dispatch = useDispatch();

    const {jumpTo} = props;

    useEffect(
        () => {
            dispatch(deliveryLocationRequestSagasAction());
        },
        []
    )

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
                data={transformResults(data ?? [])} 
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