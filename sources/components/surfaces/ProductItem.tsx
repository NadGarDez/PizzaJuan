import React from "react";
import { Dimensions, Image, Pressable, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";
import { HeartIconFilled } from "../icons/HeartIconFilled";
import { HeartIconOutlined } from "../icons/HeartIconOutlined";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductStackType } from "../../navigation/Stacks/ProductStack";

const styles = StyleSheet.create(
    {
        container: {
            width:Dimensions.get("screen").width - 32,
            backgroundColor:colors.white_card,
            marginBottom:8,
            borderRadius:10,
            minHeight:140,
            padding:8,
            marginHorizontal:16,
            display: "flex",
            flexDirection: "row",
        },
        imageContainer: {
            flex:1,
            padding:4,
            justifyContent: "center"
        },
        informationContainer: {
            flex:2,
        },
        imageStyles: {
           height:110
        },
        likeContainer: {
            display: "flex",
            flexDirection:"row",
            justifyContent:"flex-end",
            alignItems:"center",
            flexGrow: 1
        },
        titleContainerAndFavorite: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom:8
        },  
        titleContainer: {
            flex:3
        },
        priceContainer: {
            display:"flex",
            flexDirection: "row"
        },
        priceAndFavoriteContainer: {
            flex:1,
            justifyContent:"center"
        },
        titleTextStyles: {
            fontSize:20,
            fontWeight: "700",
            color:colors.principal
        },
        dolarPrice: {
            marginRight:4,
            fontSize:14,
            fontWeight: "800",
            color:colors.seconday_text
        },
        bsPrice: {
            fontSize:12,
            fontWeight: "400",
            color:colors.seconday_text
        },
        likeNumberContainer: {
            fontSize:12,
            fontWeight: "400",
            color:colors.seconday_text,
            marginRight:4
        },
        ingredientsDescriptionContainer: {
            marginBottom: 8
        },
        descriptionTextStyles: {
            fontSize:14,
            fontWeight: "500",
            color:colors.seconday_text
        }
    }
)

type props = {
    productName:string,
    price:number,
    favorite:boolean,
    image:string,
    likes:number,
    description:string,
    onPressItem: (index:number)=>void
}

type ProductListScreenPropType = NativeStackScreenProps<ProductStackType,"PRODUCT_LIST_SCREEN">

export const ProductItem = ({image, likes,productName, price, favorite,description,onPressItem}:props):JSX.Element=>{

    const {navigate} = useNavigation<ProductListScreenPropType['navigation']>()

    const nav = ()=> {
        navigate("PRODUCT_SCREEN", {productId:"123"})
    }

    return (
        <Pressable 
            onPress={nav}
        >
            {
                ({pressed})=>(
                    <View style={
                       pressed ? {...styles.container, ...shadows.lightShadow} : {...styles.container, ...shadows.principalShadow}
                    }>
                        <View style={styles.imageContainer}>
                            <Image source={{uri:image}} style={styles.imageStyles}/>
                        </View>
                        <View style={styles.informationContainer}>
                        
                            <View style={styles.priceAndFavoriteContainer}>
                                <View style={styles.titleContainerAndFavorite}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleTextStyles}>
                                            {productName}
                                        </Text>
                                    </View>
                                    
                                    <View style={styles.likeContainer}>
                                        <Text style={styles.likeNumberContainer}>
                                            {likes}
                                        </Text>
                                        {
                                            favorite ? <HeartIconFilled  size={14} color={colors.pink} /> : <HeartIconOutlined size={14} />
                                        }
                                    </View>
                                </View>
                                <View style={styles.ingredientsDescriptionContainer}>
                                    <Text style={styles.descriptionTextStyles} numberOfLines={3}>
                                        {description}
                                    </Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.dolarPrice}>
                                        {price + "$"}
                                    </Text>
                                    <Text style={styles.bsPrice}>
                                        referencia {(price * 36) + "bs"}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            }
        </Pressable>
        
    )
}