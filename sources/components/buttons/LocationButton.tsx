import React from "react";
import { WhiteButton } from "./WhiteButton";
import { Platform, StyleSheet, Text, View } from "react-native";
import { LocationIcon } from "../icons/LocationIcon";
import { colors } from "../../styles/colors";
import { ModalForm } from "../modal/ModalForm";
import { useAppDispatch } from "../../redux/hooks";
import { activateWithoutValid, configure } from "../../redux/ModalFormReducer";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { LOCATION_BUTTON_TEXT } from "../../constants/strings";


const styles  = StyleSheet.create(
    {
        locationContainer : {
            display: "flex",
            flexDirection:"row",
            alignItems:"center"
        },
        textLocationStyles: {
            marginRight:6,
            color:colors.seconday_text
        }


    }
)

export const LocationButton = ()=> {
    const dispatch = useAppDispatch();
    const onPress = ()=> {
        dispatch(configure("DELIVERY_CONFIGURATION" as ModalFormNames))
        dispatch(activateWithoutValid())
    }

    return (
        <>
             <WhiteButton onPress={onPress} deepShadow={false}>
                <View style={styles.locationContainer}>
                    <Text style={styles.textLocationStyles}>
                        {LOCATION_BUTTON_TEXT}
                    </Text>
                    <LocationIcon size={20}/>
                </View>
            </WhiteButton>
            <ModalForm />
        </>
    )
}