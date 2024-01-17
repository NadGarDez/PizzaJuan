import React from "react";
import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";
import { colors } from "../../styles/colors";
import { HelloWorldComponent } from "../../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { TitleStoreText } from "../../components/surfaces/TitleStoreText";
import { SearchAndSettingsBanner } from "../../components/surfaces/SearchAndSettingsBanner";
import { CategoryList } from "../../components/lists/CategoryList";
import { ProductList } from "../../components/lists/ProductList";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:colors.background_white,
        },
        orderNowContainer:{
            height:50,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            borderBottomRightRadius:50,
            borderBottomLeftRadius:50
        },
        textStyles:{
            color: colors.text_contrast,
            fontSize:20,
        }
    }
)


type ProductListScreenPropType = NativeStackScreenProps<ProductStackType,"PRODUCT_LIST_SCREEN">


const RenderItem = (props:{value:number})=>{
        return props.value === 0 ? (
            <CategoryList />
        ) :<ProductList />
}

export const ProductListScreen = ({navigation}:ProductListScreenPropType): JSX.Element=>{

    const navigateToProduct = ():void=>{
       navigation.navigate("PRODUCT_SCREEN", {productId:"123"});
    }

    return (
        <>
            <View style={styles.container}>
                <TitleStoreText />
                <SearchAndSettingsBanner/>
                <FlatList
                
                    data={[0,1]}
                    renderItem={
                        ({item}) =><RenderItem value={item} />
                    }
                />
                    {/* <CategoryList />
                    <ProductList /> */}
            </View>
        </>
    )
}