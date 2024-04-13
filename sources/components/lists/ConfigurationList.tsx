import React from "react";
import { ConfigurationItem } from "../surfaces/ConfigurationItem";
import { useAppDispatch } from "../../redux/hooks";
import { activateWithoutValid, configure } from "../../redux/ModalFormReducer";
import { ModalFormNames, allFormsType  } from "../../types/forms/generalFormTypes";
import { modalFormData } from "../../constants/form/formConstants";

export const ConfigurationList = ()=> {
    const dispatch = useAppDispatch();
    const configurationKeys = Object.keys(modalFormData).filter(item=> item !== ModalFormNames.TRANSACTION_CODE_FORM);

    return (
        <>
            {
                configurationKeys.map(
                    (key, index) =>{
                        const configurationItem = modalFormData[key as keyof allFormsType];
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