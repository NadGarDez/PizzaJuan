import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import { TransformedSquareWithoutRotation } from "../../components/surfaces/TransformedSquareWithoutRotation";
import { UserInformationContainer } from "../../components/surfaces/UserInformationContainer";
import { ModalForm } from "../../components/modal/ModalForm";

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor:colors.background_white,
        },
    }
)

export const UserScreen = ():JSX.Element=>{
    
    return (
        <>
            <View style={styles.container}>
                <TransformedSquareWithoutRotation />
                <UserInformationContainer />
            </View>
            <ModalForm />
        </>
    )
}
