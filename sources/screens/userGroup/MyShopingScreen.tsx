import React from "react"
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { colors } from "../../styles/colors"
import { shadows } from "../../styles/shadow"
import { InProgressShoppingList } from "../../components/lists/InProgressShoppingList"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FinishedShoppingList } from "../../components/lists/FinishedShoopingList"
import { TransformedBottomCircle } from "../../components/surfaces/TransformedBottomCircle"

const renderScene = SceneMap({
  first: InProgressShoppingList,
  second: FinishedShoppingList,
});

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            paddingHorizontal:16,
            paddingVertical:Platform.select({
                android: 56,
                ios: 93
            }),
        },
        card: {
            flex:1,
            backgroundColor:colors.white_card,
            borderRadius:12,
            ...shadows.principalShadow
        },
        titleContainer: {
            display: "flex",
            width:'100%',
            paddingVertical: 8,
            justifyContent: "center",
            flexDirection: "row",
            borderStyle:'solid',
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor:colors.seconday_text + "30",
            borderWidth:1
        },
        section: {
            flex:1,
            flexDirection:"row",
            justifyContent: "center"
        }  ,
        titleFonts: {
            fontSize:16,
            fontWeight: "200",
            color:colors.seconday_text,
            textAlign:"center"
        },
        tabBarStyle: {
            backgroundColor: colors.white_card , 
            height:40,
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
)

const renderTabBar = (props:any) => (
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
  );

export const MyShoppingScreen = ():JSX.Element=>{

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Ordenes Activas' },
        { key: 'second', title: 'Ordenes Completadas' },
    ]);

    return (
        <>  
            <TransformedSquare/> 
            <TransformedBottomCircle/>
            <View style={styles.container}>
                <View style={styles.card}>
                    <TabView 
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: Dimensions.get("screen").width - 32 }}
                        renderTabBar={renderTabBar}
                    
                    />
                    <View style={styles.bottomLine}>

                    </View>
                </View>
            </View>
        </>
       
    )
}
