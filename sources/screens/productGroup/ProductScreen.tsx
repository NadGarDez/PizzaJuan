import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Platform, Dimensions, ScrollView } from "react-native";
import { colors } from "../../styles/colors";
import { HelloWorldComponent } from "../../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../constants/querys";
import { useAuth0 } from "react-native-auth0";
import { HeartIconFilled } from "../../components/icons/HeartIconFilled";
import { HeartIconOutlined } from "../../components/icons/HeartIconOutlined";
import { WhiteButton } from "../../components/buttons/WhiteButton";
import { LocationIcon } from "../../components/icons/LocationIcon";
import { shadows } from "../../styles/shadow";
import { PlusLessButton } from "../../components/buttons/PlusLessButton";
import { AddToCarButton } from "../../components/buttons/AddToCarButton";

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: "#f6f6f6",
        },
        productInformationContainer: {
            backgroundColor:"#f6f6f6",//colors.background_white,
            position: "relative",
            top:0,
            zIndex:2,
        },
        informationContainer: {
            flex:1,
            backgroundColor:colors.white_card,
            borderRadius:30,
            paddingVertical:16,
            marginBottom:100,
            marginTop:Dimensions.get("screen").height*0.3,
            ...shadows.principalShadow
        },
        imageContainer: {
            display:"flex",
            backgroundColor:colors.background_white
        },
        partialInformationContainer: {
            display:"flex",
        },
        variantContainer:{
            paddingVertical:16,
            width: "100%",
            position:"relative",
            top:-30
        },
        imageStyles: {
            width:"100%",
            height: Dimensions.get("screen").height*0.4
        },
       
        titleContainer: {
            paddingLeft:16,
            display:"flex",
            flexGrow:3
        },
        likeButtonContainer: {
            paddingRight: 18,
            display: "flex",
            flexDirection: "row",
            flexGrow:1,
            paddingLeft:16,
            paddingTop:8
        },
        priceContainer: {
            paddingLeft:16,
            display: "flex",
            flexDirection: "row",
            alignItems:"baseline",
            flexGrow:1
        },
        amountButtonContainerAndPrice: {
            marginTop:24,
            display: "flex",
            alignItems:"center",
            flexDirection: "row",
        },
        titleStyles: {
            fontSize:25,
            fontWeight: "700",
            color:colors.principal
        },
        likeNumberContainer:{
            fontSize:16,
            fontWeight: "200",
            color:colors.seconday_text,
            marginRight:4,
        },
        dolarPrice: {
            marginRight:4,
            fontSize:20,
            fontWeight: "600",
            color:colors.seconday_text
        },
        bsPrice: {
            fontSize:14,
            fontWeight: "300",
            color:colors.seconday_text
        },

        titleLikesContainer: {
            display:"flex",
            flexDirection: "column"
        },
        descriptionContainer: {
            marginTop:16,
            paddingLeft:16,
            paddingRight:18
        },
        descriptionTitleStyles: {
            color:colors.seconday_text,
            fontSize:16,
            fontWeight:"600"
        },
        descriptionTextStyles: {
            fontSize:14,
            fontWeight: "200",
            marginTop:8,
            color:colors.seconday_text,
        },
        line: {
            borderStyle:"solid",
            borderColor: "transparent",
            borderWidth: 0,
            borderTopWidth:1,
            borderTopColor: colors.seconday_text + "60",
            width: "100%",
            marginTop:4
        },
        orderContiner: {
            paddingRight:18,
            display: "flex",
            justifyContent:"flex-end",
        },
        buttonAddContainer: {
            paddingHorizontal:16,
            marginTop:16,
        },
        scroll:{
            position: "absolute",
            top:0,
            zIndex:25,
            flex:1, 
            backgroundColor:"transparent",
            padding:8,
        }

    }
)

const staticData = {
    productName:"Pizza Cuatro Quesos",
    price:12,
    favorite:true,
    image:"https://media02.stockfood.com/largepreviews/MzQ2MTY2OTI1/11166675-Veggie-Pizza-Sliced-Once-on-a-White-Background-From-Above.jpg",
    likes:12,
    description:"Una pizza muy deliciosa con un monton de ingredientes de alta calidad. By PizzaJuan!"
}

type ProductScreenPropTypes = NativeStackScreenProps<ProductStackType,"PRODUCT_SCREEN">

export const ProductScreen = ({navigation}:ProductScreenPropTypes):JSX.Element =>{

    //this screen should fetch the product

    const {loading, error, data} = useQuery(GET_PRODUCTS);

    const onPress =()=>{
        navigation.navigate("PRODUCT_SELLER_SCREEN", {sellerId:"123"});
    }

    return (
        <View style={styles.container}>
            <View style={styles.productInformationContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: staticData.image
                        }}
                        style={styles.imageStyles}
                    />
                </View>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.informationContainer}>
                            <View style={styles.titleLikesContainer}>
                                    <View style={styles.titleContainer}>
                                            <Text style={styles.titleStyles}>
                                                {staticData.productName}
                                            </Text>
                                    </View>


                                    <View style={styles.likeButtonContainer}>
                                        <Text style={styles.likeNumberContainer}>
                                            {staticData.likes} han reaccionado con
                                        </Text>
                                        <HeartIconFilled color={colors.pink}/>
                                    </View>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.descriptionTitleStyles}>
                                    Descripcion
                                </Text>
                                <View  style={styles.line}/>
                                <Text style={styles.descriptionTextStyles}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dolor augue. Mauris quam sapien, commodo ac consequat a, gravida ut erat. Aliquam fermentum consequat neque sit amet ultricies. Proin urna ligula, efficitur non nulla sit amet, commodo condimentum enim. Maecenas mattis ultricies porttitor. Nunc consequat lorem ut nulla porta molestie. Donec tristique consequat mi nec bibendum. Nunc sagittis justo ex, sit amet hendrerit felis maximus sed. Sed volutpat ligula sit amet egestas bibendum. Suspendisse molestie, quam id tristique commodo, ligula nulla vehicula felis, in fringilla ipsum ex ut eros. Nullam tincidunt ante a porta sollicitudin. Duis viverra nisi ut justo consequat pharetra. Curabitur porttitor tellus sit amet aliquam pharetra. Quisque commodo leo a mauris sodales, at egestas leo vestibulum.
                                </Text>
                            </View>

                            <View style={styles.amountButtonContainerAndPrice}>
                                <View style={styles.priceContainer}>
                                        <Text style={styles.dolarPrice}>
                                            {staticData.price + "$"}
                                        </Text>
                                        <Text style={styles.bsPrice}>
                                            referencia {(staticData.price * 36) + "bs"}
                                        </Text>
                                </View>
                                <View style={styles.orderContiner}>
                                    <PlusLessButton onChange={()=>{}} />
                                </View>
                            </View>
                            <View style={styles.buttonAddContainer}>
                                <AddToCarButton onPress={()=> {}} />
                            </View>
                </View>
            </ScrollView>
        </View>
    )
}