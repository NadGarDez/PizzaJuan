import React, { createContext, useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"
import { useAuth0 } from "react-native-auth0"
import { useAppDispatch } from "../../redux/hooks"
import { resetSession } from "../../redux/SessionReducer"
import { colors } from "../../styles/colors"
import { TransformedSquareWithoutRotation } from "../../components/surfaces/TransformedSquareWithoutRotation"
import { UserInformationContainer } from "../../components/surfaces/UserInformationContainer"
import { ModalForm } from "../../components/forms/ModalForm"
import { ModalContext } from "../../context/modalFormContext"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor:colors.background_white,
        },
    }
)

export const UserScreen = ():JSX.Element=>{

    const {clearSession, user} = useAuth0()

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalObject, setModalObject] = useState<object>({
        title:""
    })


    const toggleModal =()=> setModalVisible(!modalVisible);
    const setFormType = (item:object)=>setModalObject(item)
    const dispatch = useAppDispatch()

    const onPress= async ()=>{
        await clearSession()
    }

    useEffect(
        ()=>{
            if(user === null){
                dispatch(resetSession());
            }
        },
        [user]
    )
    
    return (
        <>
            <ModalContext.Provider value={{visible:modalVisible, modalObject, toggleModal, setFormType}}>
                <View style={styles.container}>
                    <TransformedSquareWithoutRotation />
                    <UserInformationContainer />
                    
                </View>
                <ModalForm 
                />
            </ModalContext.Provider>
        </>
    )
}
