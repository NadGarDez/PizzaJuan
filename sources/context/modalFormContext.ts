import { createContext } from "react";


type item = {
    title:string,
    subtitle:string
}

type context = {
    visible:boolean,
    toggleModal:()=>void,
    setFormType:(item:item)=>void,
    modalObject:item
}

const defaultModalValue = {
    visible:false,
    toggleModal:()=>{},
    setFormType:(item:item)=>{},
    modalObject:{
        title:"",
        subtitle:""
    }
}
export const ModalContext = createContext<context>(defaultModalValue);