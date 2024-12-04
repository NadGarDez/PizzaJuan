import React, { useEffect } from "react"
import { Platform, StyleSheet, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { colors } from "../../styles/colors"
import { CarProductList } from "../../components/lists/CarProductList"
import { AmountInformationComponent } from "../../components/surfaces/AmountInformationComponent"
import { BuyButton } from "../../components/buttons/BuyButton"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setTotals, shoppingCardSelector } from "../../redux/shoppingCardSlice"
import { VoidShoppingCarComponent } from "../../components/surfaces/VoidShoppingCarComponent"
import { orderCalculation } from "../../utils/calculations"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: "transparent",
            paddingHorizontal:16,
            paddingTop:Platform.select({
                android: 56,
                ios: 93
            }),
            paddingBottom: Platform.select({
                android: 16,
                ios: 32
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
            marginTop:16
        },
    }
);

type CarScreenPropType = StackNavigationProp<CarStackProp, "CAR_SCREEN">

export const CarScreen = ():JSX.Element=>{

    const {navigate} = useNavigation<CarScreenPropType>()

    const { products } = useAppSelector(shoppingCardSelector)

    const redux_dispatch = useAppDispatch();
    
    const onPress=()=>{
        navigate("PAY_SCREEN");
    }

    useEffect(
        ()=> {
            redux_dispatch(setTotals(orderCalculation(Object.values(products))))
        },
        [products]
    )

    return (
        <>
            <TransformedSquare />
            <View style={styles.container}>

                {
                    Object.values(products).length > 0 ? (
                        <View style={{flex:1}}>
                            <CarProductList 
                                onPress={()=>{}}
                                data={Object.values(products)}
                            />
                            
                            <View style={styles.calculatorContainer}>
                                <AmountInformationComponent />
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <BuyButton 
                                    text="Realizar Pago"
                                    onPress={onPress}
                                />
                            </View> 
                        </View>
                    ) : (
                        <VoidShoppingCarComponent />
                    )
                }
                
            </View>
        </>
    )
}
