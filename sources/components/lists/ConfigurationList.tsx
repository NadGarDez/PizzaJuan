import React, { useContext } from "react";
import { FlatList } from "react-native";
import { configurationItems } from "../../constants/configurationItems";
import { ConfigurationItem } from "../surfaces/ConfigurationItem";
import { ModalContext } from "../../context/modalFormContext";

export const ConfigurationList = ()=> {
    const {toggleModal, setFormType}= useContext(ModalContext)

    return (
        <>
            {
                configurationItems.map(
                    (item, index) =>(
                        <ConfigurationItem {...item}  key={`${index}-configurationItem`} onPress={
                            ()=>{
                                toggleModal()
                                setFormType(item)
                            }
                        }/>
                    )
                )
            }
        </>
    )
}