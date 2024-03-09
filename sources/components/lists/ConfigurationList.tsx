import React, { useContext } from "react";
import { FlatList } from "react-native";
import { configurationObjectType, configurationSections } from "../../constants/userConfigurationConstants";
import { ConfigurationItem } from "../surfaces/ConfigurationItem";
import { ModalContext } from "../../context/modalFormContext";

export const ConfigurationList = ()=> {
    const {toggleModal, setFormType}= useContext(ModalContext)
    const configurationKeys = Object.keys(configurationSections);

    return (
        <>
            {
                configurationKeys.map(
                    (key, index) =>{
                        const configurationItem = configurationSections[key as keyof configurationObjectType];
                        return (
                            <ConfigurationItem 
                                title={
                                    configurationItem.title as string
                                }  
                                subtitle={
                                    configurationItem.subtitle as string
                                }
                                key={`${index}-configurationItem`} 
                                onPress={
                                    ()=>{
                                        setFormType(configurationItem)
                                        toggleModal()
                                    }
                                }
                            />
                        )
                    }
                )
            }
        </>
    )
}