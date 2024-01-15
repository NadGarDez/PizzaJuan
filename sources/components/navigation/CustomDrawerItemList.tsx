import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import { DrawerItem } from "../buttons/DrawerItem";
import { drawerIconSelector } from "../../utils/drawerIconSelector";

export const CustomDrawerItemList = (props: DrawerContentComponentProps):JSX.Element=> {
    const {state:{routeNames, index: stateIndex}, navigation} = props;

    const onPress = (item:string)=> {
        navigation.jumpTo(item);
    }

    return (
        <>
            {
                routeNames.map(
                    (item, index) => (
                        <View key={`drawerItems-${item}-${index}`}>
                            <DrawerItem 
                                label={item} 
                                onPress={onPress}
                                selected={stateIndex === index}
                                icon={
                                    drawerIconSelector(item)
                                }
                            />
                        </View>
                    )
                )
            }
        </>
    )
}