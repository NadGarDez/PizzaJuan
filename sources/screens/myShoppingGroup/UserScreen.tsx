import React, { useState } from "react"
import { Alert, Dimensions, StyleSheet, View } from "react-native"
import { useAppDispatch } from "../../redux/hooks"
import { colors } from "../../styles/colors"
import { TransformedSquareWithoutRotation } from "../../components/surfaces/TransformedSquareWithoutRotation"
import { UserInformationContainer } from "../../components/surfaces/UserInformationContainer"
import { ModalForm } from "../../components/modal/ModalForm"
import { ModalContext } from "../../context/modalFormContext"
import { configurationItem, defaultConfigurationSectionValue } from "../../constants/userConfigurationConstants"

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
    const [modalObject, setModalObject] = useState<configurationItem>(defaultConfigurationSectionValue);
    const [validForm, setValidForm] = useState(false);

    const toggleModal =()=> setModalVisible(!modalVisible);
    const setFormType = (item:configurationItem)=>setModalObject(item)
    const setValidFormValue = (value:boolean)=>setValidForm(value);
    const dispatch = useAppDispatch()
    
    return (
        <>
            <ModalContext.Provider value={{visible:modalVisible, modalObject, toggleModal, setFormType, validForm, setValidFormValue}}>
                <View style={styles.container}>
                    <TransformedSquareWithoutRotation />
                    <UserInformationContainer />
                </View>
                <ModalForm />
            </ModalContext.Provider>
        </>
    )
}
