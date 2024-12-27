import React, { useEffect, useState } from "react"
import { Platform, StyleSheet, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../../styles/colors"
import { CarProductList } from "../../components/lists/CarProductList"
import { AmountInformationComponent } from "../../components/surfaces/AmountInformationComponent"
import { BuyButton } from "../../components/buttons/BuyButton"
import { TransformedSquare } from "../../components/surfaces/TransformedSquare"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setTotals, shoppingCardSelector } from "../../redux/shoppingCardSlice"
import { VoidShoppingCarComponent } from "../../components/surfaces/VoidShoppingCarComponent"
import { orderCalculation } from "../../utils/calculations"
import { deliveryLocationReducersStaus, deliveryLocationSelector } from "../../redux/deliveryLocationSlicer"
import { getUserConstants } from "../../utils/asyncStore"
import { useAuth0 } from "react-native-auth0"
import { modalFormSelector } from "../../redux/ModalFormReducer"

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

    const {navigate} = useNavigation<CarScreenPropType>();

    const { products, totals } = useAppSelector(shoppingCardSelector);

    const deliveryLocations = useAppSelector(deliveryLocationSelector);

    const { visible} = useAppSelector(modalFormSelector);

    const deliveryLocationsStatus = useAppSelector(deliveryLocationReducersStaus);

    const redux_dispatch = useAppDispatch();

    const {user} = useAuth0();

    const [itemSelected, setItem] = useState<string | undefined>(undefined);
    
    const onPress=()=>{
        navigate("PAY_SCREEN");
    }

    useEffect(
        ()=> {
            redux_dispatch(setTotals(orderCalculation(Object.values(products))))
        },
        [products]
    )

    const initializeItem = async () => {
        const info = await getUserConstants(user?.sub ?? '')
        if (info !== null) {
            const obj = JSON.parse(info);
            if ('activeLocation' in obj ) {
                setItem(obj.activeLocation)
            }
        }
    }

    useEffect(
        () => {
            if(deliveryLocationsStatus === 'SUCCESSED') {
                initializeItem();
            }
        },
        [deliveryLocationReducersStaus, visible]
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
                                <AmountInformationComponent 
                                    totals={totals}
                                />
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <BuyButton 
                                    text="Realizar Pago"
                                    onPress={onPress}
                                    disabled={deliveryLocations.length === 0 || itemSelected === undefined}
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
