import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../../styles/colors"
import { CarProductList } from "../../components/lists/CarProductList"
import { DireactionSelector } from "../../components/surfaces/DirectionSelector"
import LinearGradient from "react-native-linear-gradient"
import { AmountInformationComponent, CalculatorContainer, OrderButtonAndInformation } from "../../components/surfaces/AmountInformationComponent"
import { BuyButton } from "../../components/buttons/BuyButton"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: colors.background_white,
            paddingHorizontal:16
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
            justifyContent:"flex-end",
            paddingBottom:20
        }
    }
)

const staticData = [
    {
        productName:"Pizza numero 1",
        price:12,
        favorite:true,
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        likes:12,
        description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
        creator: "PizzaJuan",
        count:2
    },
    {
        productName:"Pizza numero 2",
        price:12,
        favorite:false,
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        likes:12,
        description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
        creator: "PizzaJuan",
        count:2
    },
    {
        productName:"Pizza numero 3",
        price:12,
        favorite:false,
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        likes:12,
        description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
        creator: "PizzaJuan",
        count:2
    },
    {
        productName:"Pizza numero 4",
        price:12,
        favorite:false,
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        likes:12,
        description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
        creator: "PizzaJuan",
        count:2
    },
    {
        productName:"Pizza numero 5",
        price:12,
        favorite:false,
        image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
        likes:12,
        description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!",
        creator: "PizzaJuan",
        count:2
    },
]

type CarScreenPropType = StackNavigationProp<CarStackProp, "CAR_SCREEN">

export const CarScreen = ():JSX.Element=>{

    const {navigate} = useNavigation<CarScreenPropType>()
    
    const onPress=()=>{
        navigate("PAY_SCREEN");
    }
    
    return (
        <View style={styles.container}>
            <CarProductList />
            <View style={styles.calculatorContainer}>
                <AmountInformationComponent />
            </View>
            <View style={styles.buttonContainer}>
                <BuyButton 
                
                    onPress={()=> {}}
                />
            </View>
        </View>
    )
}
