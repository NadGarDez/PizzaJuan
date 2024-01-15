import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { drawerScreens } from "../../constants/screenNames";
import { DrawerItem } from "../buttons/DrawerItem";
import { LocationIcon } from "../icons/LocationIcon";
import { HeartIconOutlined } from "../icons/HeartIconOutlined";

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
                            />
                        </View>
                    )
                )
            }
        </>
    )
}