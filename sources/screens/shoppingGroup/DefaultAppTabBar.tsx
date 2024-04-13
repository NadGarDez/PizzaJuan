import React from "react";
import { StyleSheet, Text } from "react-native";
import { TabBar } from "react-native-tab-view";
import { colors } from "../../styles/colors";


const styles = StyleSheet.create(
    {
        titleFonts: {
            fontSize:16,
            fontWeight: "200",
            color:colors.seconday_text,
            textAlign:"center"
        },
        tabBarStyle: {
            backgroundColor: colors.white_card , 
            borderTopEndRadius:12,
            borderTopLeftRadius:12
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
        
       
    }
);

export const DefaultAppTabBar = (props:any):JSX.Element=> {
    return (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.principal }}
            style={styles.tabBarStyle}
            renderLabel={({ route, focused, color }) => (
                <Text style={styles.titleFonts}>
                {route.title}
                </Text>
            )}
        />
    )
}