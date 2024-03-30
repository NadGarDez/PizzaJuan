import React, { useContext } from "react";
import { SceneMap, TabView, TabViewProps } from "react-native-tab-view";
import { DeliveryConfigurationForm } from "../forms/DeliveryConfiguraitonForm";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ModalContext } from "../../context/modalFormContext";
import { DirectionListContainer } from "../surfaces/DirectionListContainer";

const styles = StyleSheet.create({
    container: {
        flex:1,
        minHeight:400,
    }
})


const renderScene = SceneMap({
    first: DirectionListContainer,
    second: DeliveryConfigurationForm,
});

const routes = [
    { key: 'first', title: '' },
    { key: 'second', title: '' },
];

export const DeliveryTabView = ():JSX.Element=> {
    const {tabIndex, setTabIndex} = useContext(ModalContext);
    const manageChange = (index:number)=> {
        console.log(index, "index");
        setTabIndex(index);
    };
    return (
        <View style={styles.container}>
            <TabView 
                navigationState={{ index:tabIndex , routes }}
                style={{flex:1}}
                renderScene={renderScene}
                onIndexChange={manageChange}
                initialLayout={{ width: Dimensions.get("screen").width - 32 }}
                renderTabBar={()=>null}
                swipeEnabled={false}
            />
        </View>
    )
}