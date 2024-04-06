import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { DeliveryConfigurationForm } from "../forms/DeliveryConfiguraitonForm";
import { Dimensions, StyleSheet, View } from "react-native";
import { DirectionListContainer } from "../surfaces/DirectionListContainer";
import { ModalFormNames } from "../../constants/userConfigurationConstants";
import { ModalFormHeader } from "../surfaces/ModalFormHeader";
import { useAppDispatch } from "../../redux/hooks";
import { hide } from "../../redux/ModalFormReducer";

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:800
    }
});

const renderScene = SceneMap({
    first: DirectionListContainer,
    second: DeliveryConfigurationForm,
});

const routes = [
    { key: 'first', title: '' },
    { key: 'second', title: '' },
];

export const DeliveryTabView = ():JSX.Element=> {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const dispatch = useAppDispatch();
    const manageChange = (index:number)=> {
        setTabIndex(index);
    };

    const onCancel = ()=> {
        dispatch(hide())
    }

    const onSave = ()=>{
        dispatch(hide())
    }

    return (
        <>
            <ModalFormHeader 
                formKey={ModalFormNames.DELIVERY_CONFIGURATION}
                onCancel={onCancel}
                onSave={onSave}
                isFormValid={false}
            />
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
        </>
    )
}