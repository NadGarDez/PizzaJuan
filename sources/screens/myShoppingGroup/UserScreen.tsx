import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { useAppDispatch } from "../../redux/hooks"
import { colors } from "../../styles/colors"
import { TransformedSquareWithoutRotation } from "../../components/surfaces/TransformedSquareWithoutRotation"
import { UserInformationContainer } from "../../components/surfaces/UserInformationContainer"
import { ModalForm } from "../../components/forms/ModalForm"
import { ModalContext } from "../../context/modalFormContext"
import { configurationItem } from "../../constants/configurationItems"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor:colors.background_white,
        },
    }
)

export const UserScreen = ():JSX.Element=>{

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalObject, setModalObject] = useState<configurationItem>({
        title:"",
        subtitle:""
    })


    const toggleModal =()=> setModalVisible(!modalVisible);
    const setFormType = (item:configurationItem)=>setModalObject(item)
    const dispatch = useAppDispatch()
    
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
