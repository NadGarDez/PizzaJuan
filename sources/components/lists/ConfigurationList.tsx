import React from "react";
import { FlatList } from "react-native";
import { configurationItems } from "../../constants/configurationItems";
import { ConfigurationItem } from "../surfaces/ConfigurationItem";

export const ConfigurationList = ()=> {
    return (
        <>
            {
                configurationItems.map(
                    (item, index) =>(
                        <ConfigurationItem {...item} key={`${index}-configurationItem`}/>
                    )
                )
            }
        </>
    )
}