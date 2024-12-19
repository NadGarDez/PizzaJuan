import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import { TransformedSquareWithoutRotation } from "../../components/surfaces/TransformedSquareWithoutRotation";
import { UserInformationContainer } from "../../components/surfaces/UserInformationContainer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalForm } from "../../components/modal/ModalForm";
import { useAuth0 } from "react-native-auth0";
import { useAppSelector } from "../../redux/hooks";
import { sessionTokenSelector } from "../../redux/SessionReducer";

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor:colors.background_white,
        },
    }
)

export const UserScreen = ():JSX.Element=>{
    const {user} = useAuth0();
    const token = useAppSelector(sessionTokenSelector);

    const getUserConstants = async () => {
        try {
            const value = await AsyncStorage.getItem(user?.sub ?? '');
        
          } catch (e) {
            // error reading valuea
            console.log(e)
          }
    }

    useEffect(
        () => {
            getUserConstants();
        },
        []
    )
    

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
