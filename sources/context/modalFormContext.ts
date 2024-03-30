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
    setTabIndex:(value:number)=> void,
    modalObject:configurationItem,
    validForm:boolean,
    tabIndex:number
}

const defaultModalValue = {
    visible:false,
    toggleModal:()=>{},
    setFormType:(item:configurationItem)=>{},
    setValidFormValue:(value:boolean)=>{},
    setTabIndex:(value:number)=> {},
    modalObject:defaultConfigurationSectionValue,
    validForm:false,
    tabIndex:0
}
export const ModalContext = createContext<context>(defaultModalValue);