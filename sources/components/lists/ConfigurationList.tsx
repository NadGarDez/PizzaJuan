import React from "react";
import { FlatList } from "react-native";
import { configurationItems } from "../../constants/configurationItems";
import { ConfigurationItem } from "../surfaces/ConfigurationItem";


export const ConfigurationList = ()=> {
    return (
        <FlatList 
            data={configurationItems}
            renderItem={
                ({item})=>(
                 <ConfigurationItem {...item}/>
                )
            }
        />
    )
}