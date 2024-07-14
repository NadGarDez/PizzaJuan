import React from "react"
import { Platform, StyleSheet, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { colors } from "../../styles/colors"
import { CarProductList } from "../../components/lists/CarProductList"
import { AmountInformationComponent } from "../../components/surfaces/AmountInformationComponent"
import { BuyButton } from "../../components/buttons/BuyButton"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { useAppSelector } from "../../redux/hooks"
import { shoppingCardSelector } from "../../redux/shoppingCardSlice"
import { VoidShoppingCarComponent } from "../../components/surfaces/VoidShoppingCarComponent"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: "transparent",
            paddingHorizontal:16,
            paddingVertical:Platform.select({
                android: 56,
                ios: 93
            }),
        },
        titleList: {
            color:colors.seconday_text,
            fontSize:16,
            fontWeight:"600"
        },
        productContainer: {
            display: "flex"
        },
        directionContainer: {
        },
        calculatorContainer: {
            display:"flex",
            marginTop:8
        },
        buttonContainer: {
            flex:1,
            marginTop:16
        },
    }
);

type CarScreenPropType = StackNavigationProp<CarStackProp, "CAR_SCREEN">

export const CarScreen = ():JSX.Element=>{

    const {navigate, dispatch} = useNavigation<CarScreenPropType>()

    const {products} = useAppSelector(shoppingCardSelector)
    
    const onPress=()=>{
        navigate("PAY_SCREEN");
    }

    const openLocationModal = ()=> {
       dispatch(DrawerActions.openDrawer())
       setTimeout(() => {
        dispatch(DrawerActions.jumpTo("USER_STACK"))
       }, 300);
    }

    return (
        <>
            <TransformedSquare />
            <View style={styles.container}>


                {
                    Object.values(products).length > 0 ? (
                        <>
                            <CarProductList 
                                onPress={()=>{}}
                                data={Object.values(products)}
                            />
                            <View style={styles.calculatorContainer}>
                                <AmountInformationComponent 
                                    onPressLocation={openLocationModal}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <BuyButton 
                                    text="Realizar Pago"
                                    onPress={onPress}
                                />
                            </View>
                        </>
                    ) : (
                        <VoidShoppingCarComponent />
                    )
                }
                
            </View>
        </>
    )
}
