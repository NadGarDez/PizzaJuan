import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { DeliveryConfigurationForm } from "../forms/DeliveryConfiguraitonForm";
import { Dimensions, StyleSheet, View } from "react-native";
import { DirectionListContainer } from "../surfaces/DirectionListContainer";
import { PayMethodContainer } from "../surfaces/PayMethodListContainer";
import { PaymentConfigurationForm } from "../forms/PaymentConfigurationForm";
import { ModalFormHeader } from "../surfaces/ModalFormHeader";
import { ModalFormNames } from "../../constants/userConfigurationConstants";
import { number } from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { hide } from "../../redux/ModalFormReducer";

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:800
    }
});

const renderScene = SceneMap({
    first: PayMethodContainer,
    second: PaymentConfigurationForm,
});

const routes = [
    { key: 'first', title: '' },
    { key: 'second', title: '' },
];

export const PayMethodTabView = ():JSX.Element=> {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const dispatch = useAppDispatch();
    const manageChange = (index:number)=> {
        setTabIndex(index);
    };

    const onCancel = ()=> {
        dispatch(hide());
    }

    const onSave = ()=>{
        dispatch(hide());
    }
    return (
        <>
            <ModalFormHeader 
                formKey={ModalFormNames.PAYMENT_CONFIGURATION}
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