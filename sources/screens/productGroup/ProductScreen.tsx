import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Platform, Dimensions, ScrollView } from "react-native";
import { colors } from "../../styles/colors";
import { HelloWorldComponent } from "../../components/HelloWorldComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../constants/querys";
import { HeartIconFilled } from "../../components/icons/HeartIconFilled";
import { PlusLessButton } from "../../components/buttons/PlusLessButton";
import { AddToCarButton } from "../../components/buttons/AddToCarButton";
import { ImageCarousel } from "../../components/surfaces/ImageCarousel";
import { FloatingCarouselButtons } from "../../components/buttons/FloatingCarouselButtons";

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: colors.white_card,
        },
        productInformationContainer: {
            position:"absolute",
            top:0,
            left:0,
            width: "100%",
            backgroundColor:"red",//"#f6f6f6",//colors.background_white,
            zIndex:-2,
        },
        informationContainer: {
            display:"flex",
            backgroundColor:colors.white_card,
            borderRadius:30,
            paddingVertical:16,
            paddingBottom:50,
        },
        imageContainer: {
            display:"flex",
            backgroundColor:colors.white_card,
            overflow:"hidden"
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
            height: Dimensions.get("screen").height * 0.6
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
            borderWidth: 0,
            borderTopWidth:1,
            borderTopColor: colors.seconday_text + "30",
            width: "100%",
            marginTop:4,
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
        scrollContainer:{
            flex:1, 
            backgroundColor:"transparent",
        },
        scrollChildren: {
            display:"flex",
            flexDirection:"column",
            backgroundColor: "transparent",
        },
        floatingItemsContainer: {
            height:Dimensions.get("screen").height * 0.6 - 32,
            display: "flex",
            flexDirection: "column"
        },
        scroll: {
        },
        topFloatingItem: {
            flex:1,
        },
        centerFloatingItem: {
            flex:3,
        },
        bottomFloatingItem: {
            paddingVertical:16
        }

    }
)

const staticData = {
    productName:"Pizza Cuatro Quesos",
    price:12,
    favorite:true,
    image:"https://img.freepik.com/foto-gratis/persona-recibiendo-pedazo-deliciosa-pizza-pepperoni-queso_181624-18235.jpg",
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

    const [focusImage, setFocusImage] = useState<number>(0);

    const changeFocus = (index:number)=>setFocusImage(index);

    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
                <View style={styles.scrollChildren}>
                    <View style={styles.floatingItemsContainer}>
                        <View style={styles.topFloatingItem}>

                        </View>
                        <View style={styles.centerFloatingItem}>

                        </View>
                        <View style={styles.bottomFloatingItem}>
                            <FloatingCarouselButtons numberOfItems={4} onPressItem={changeFocus} focused={focusImage} />
                        </View>
                    </View>
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
                                    <View  style={styles.line}>
                                    </View>
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
                                    <AddToCarButton onPress={()=> {
                                        setFocusImage(focusImage+1)
                                    }} />
                                </View>
                    </View>
                   
                </View>
            </ScrollView>
            </View>
            <View style={styles.productInformationContainer}>
                <View style={styles.imageContainer}>
                   <ImageCarousel 
                        focused={focusImage}
                        data={
                            [
                                "https://img.freepik.com/foto-gratis/persona-recibiendo-pedazo-deliciosa-pizza-pepperoni-queso_181624-18235.jpg",
                                "https://img.freepik.com/foto-gratis/vista-lateral-pizza-pimiento-tomate-rebanadas-pizza-utensilios-cocina_176474-3184.jpg",
                                "https://img.freepik.com/fotos-premium/pizza-pepperoni-italiana-clasica-plato-vacio-vista-superior-foto-vertical-foto-alta-calidad_275899-621.jpg",
                                "https://media.istockphoto.com/id/184921098/photo/pizza.jpg?s=612x612&w=0&k=20&c=qY8nQ9g-gc1dN5lJPnp84cq5M_8dA6JI4UGHyokkOCc="
                            ]
                        }
                   />
                </View>
            </View>
        </View>
    )
}