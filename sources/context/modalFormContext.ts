import { createContext } from "react";
import { configurationItem, defaultConfigurationSectionValue } from "../constants/userConfigurationConstants";

type item = {
    title:string,
    subtitle:string
}

type context = {
    visible:boolean,
    toggleModal:()=>void,
    setFormType:(item:configurationItem)=>void,
    setValidFormValue:(value:boolean)=>void,
    modalObject:configurationItem,
    validForm:boolean
}

const defaultModalValue = {
    visible:false,
    toggleModal:()=>{},
    setFormType:(item:configurationItem)=>{},
    setValidFormValue:(value:boolean)=>{},
    modalObject:defaultConfigurationSectionValue,
    validForm:false
}
export const ModalContext = createContext<context>(defaultModalValue);