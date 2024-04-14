import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { DefaultAppTabBar } from "../../screens/shoppingGroup/DefaultAppTabBar";
import { StoreQR } from "../surfaces/StoreQR";
import { StoreSMS } from "../surfaces/StoreSMS";
import { StoreMobilePayData } from "../surfaces/StoreMobilePayData";

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        backgroundColor:colors.white_card,
        borderRadius:12,
        ...shadows.principalShadow
    },
    bottomLine: {
        height:20,
        borderStyle: "solid",
        borderBottomColor: "transparent",
        borderLeftColor:"transparent",
        borderRightColor: "transparent",
        borderTopColor: colors.seconday_text + "30",
        borderWidth: 1,
    }
});

interface routeType {
    key:string,
    title:string
}

const renderScene = SceneMap({
    first: StoreQR,
    second: StoreSMS,
    third: StoreMobilePayData
});

export const StorePaymentDataTab = ():JSX.Element=> {
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState<routeType[]>([
        { key: 'first', title: 'QR' },
        { key: 'second', title: 'SMS' },
        { key: 'third', title: 'Aplicacion' },
    ]);

    return (
        <View style={styles.container}>
            <TabView 
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get("screen").width - 32 }}
                renderTabBar={DefaultAppTabBar}
            />
            <View style={styles.bottomLine} />
        </View>
    )
}