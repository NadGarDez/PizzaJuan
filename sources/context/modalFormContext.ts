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
    modalObject:configurationItem
}

const defaultModalValue = {
    visible:false,
    toggleModal:()=>{},
    setFormType:(item:configurationItem)=>{},
    modalObject:defaultConfigurationSectionValue
}
export const ModalContext = createContext<context>(defaultModalValue);