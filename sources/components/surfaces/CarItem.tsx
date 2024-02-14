import React, { useState } from "react";
import { Dimensions, Image, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { PlusLessButton } from "../buttons/PlusLessButton";
import { DeleteProductButton } from "../buttons/DeleteProductButton";

const styles = StyleSheet.create(
    {
        container: {
            width:Dimensions.get("screen").width - 32,
            paddingVertical:16,
            paddingHorizontal:8,
            display: "flex",
            flexDirection: "column",
            borderStyle:"solid",
            borderWidth:1,
            borderTopColor:"transparent",
            borderLeftColor:"transparent",
            borderRightColor:"transparent",
            borderBottomColor:colors.seconday_text + "30",
        },
        imageContainer: {
            flex:1,
            padding:4,
            justifyContent: "center"
        },
        informationContainer: {
            flex:2,
            paddingRight:4
        },
        imageStyles: {
           height:110
        },
        likeContainer: {

            position:"relative",
            top:-15,
            right:-10,
            display: "flex",
            flexDirection:"row",
            justifyContent:"flex-end",
            alignItems:"center",
        },
        titleContainerAndFavorite: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom:8
        },  
        titleContainer: {
            flex:8
        },
        priceContainerAndCount: {
            display:"flex",
            flexDirection: "row",
            alignItems:"center",
            marginTop:8
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
            fontWeight: "600",
            color:colors.seconday_text
        },
        bsPrice: {
            fontSize:12,
            fontWeight: "300",
            color:colors.seconday_text
        },
        likeNumberContainer: {
            fontSize:12,
            fontWeight: "200",
            color:colors.seconday_text,
            marginRight:4
        },
        ingredientsDescriptionContainer: {
            marginBottom: 8
        },
        descriptionTextStyles: {
            fontSize:14,
            fontWeight: "200",
            color:colors.seconday_text
        },
        line: {
            borderStyle:"solid",
            borderWidth: 0,
            borderTopWidth:1,
            borderTopColor: colors.seconday_text + "30",
            width: "100%",
            marginTop:8,
        },
        flexRowStyles: {
            flex:1,
            flexDirection: "row",
        },
        creator: {
            display: "flex",
            width: "100%",
            flexDirection: "row",
            height:30,
            alignItems: "center",
            paddingHorizontal:2
        },
        firstPartOfCreator: {
            flex:1
        },
        secondPartOfCreator: {
            flex:1,
            flexDirection:"row",
            justifyContent: "flex-end"
        },
        priceContainer:{
            flex:1
        },
        countSelector: {
            display: "flex",
            justifyContent:"flex-end",
            flexDirection:"row"
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
    creator:string,
    numberOfItems:number,
    onPressItem: (index:number)=>void
}

// type ProductListScreenPropType = NativeStackScreenProps<ProductStackType,"PRODUCT_LIST_SCREEN">

export const CarItem = ({image, likes,productName, price, favorite,description,onPressItem, creator}:props):JSX.Element=>{

    // const {navigate} = useNavigation<ProductListScreenPropType['navigation']>()

    // const nav = ()=> {
    //     navigate("PRODUCT_SCREEN", {productId:"123"})
    // }

    const [numberOfItems, setNumberOfItems] = useState<number>(1)

    const onChangeItemNumber = (value:number):void=> {
        setNumberOfItems(value)
    }
    

    return (
        <View style={
            {...styles.container}
        }>
            <View style={styles.flexRowStyles}>
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
                                <DeleteProductButton 
                                
                                    onPress={
                                        ()=>{

                                        }
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.ingredientsDescriptionContainer}>
                            <Text style={styles.descriptionTextStyles} numberOfLines={3}>
                                {description}
                            </Text>
                        </View>
                        <View style={styles.priceContainerAndCount}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.dolarPrice}>
                                    {(price * numberOfItems) + "$"}
                                </Text>
                            </View>
                            <View style={styles.countSelector}>
                                <PlusLessButton
                                    onChange={
                                        onChangeItemNumber
                                    }
                                    initialValue={numberOfItems}
                                /> 
                            </View>
                        </View>
                    </View>
                            
                </View>
                        
            </View>

            {/* <View style={styles.creator}>
                <View style={styles.firstPartOfCreator}>
                    <Text style={styles.likeNumberContainer}>
                        {creator}
                    </Text>    
                </View>
                <View style={styles.secondPartOfCreator}>
                    <ThreDotsIcon size={12} color={colors.seconday_text+50}/>
                </View>
            
            </View> */}
        </View>
    )
}