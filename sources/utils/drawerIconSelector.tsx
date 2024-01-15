import React from "react";
import { StoreIcon } from "../components/icons/StoreIcon";
import { CarIcon } from "../components/icons/CarIcon";
import { BagIcon } from "../components/icons/BagIcon";
import { PersonIcon } from "../components/icons/PersonIcon";
import { LogOutIcon } from "../components/icons/LogoutIcon";

type optionsSwitch = {
    [key: string]:(props:any)=>JSX.Element
}


const options: optionsSwitch= {
    PRODUCT_STACK: (props)=><StoreIcon {...props}/>,
    CAR_STACK:(props)=><CarIcon {...props}/>,
    MY_SHOPPING:(props)=><BagIcon {...props}/>,
    USER_STACK:(props)=><PersonIcon {...props}/>,
    LOG_OUT:(props)=><LogOutIcon {...props}/>
}



export const drawerIconSelector= (label:string):(props:any)=>JSX.Element=> {
    return options[label]
}