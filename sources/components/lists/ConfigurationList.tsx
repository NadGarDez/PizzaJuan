import React from "react";
import { ModalFormNames, configurationObjectType, configurationSections } from "../../constants/userConfigurationConstants";
import { ConfigurationItem } from "../surfaces/ConfigurationItem";
import { useAppDispatch } from "../../redux/hooks";
import { activateWithoutValid, configure } from "../../redux/ModalFormReducer";

export const ConfigurationList = ()=> {
    const dispatch = useAppDispatch();
    const configurationKeys = Object.keys(ModalFormNames);

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
                                        dispatch(configure(key as ModalFormNames));
                                        dispatch(activateWithoutValid());
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