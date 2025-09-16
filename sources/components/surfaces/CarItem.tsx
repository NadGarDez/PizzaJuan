import React, { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet,Text,View } from "react-native";
import { colors } from "../../styles/colors";
import { PlusLessButton } from "../buttons/PlusLessButton";
import { DeleteProductButton } from "../buttons/DeleteProductButton";
import { shoppingCarItemType } from "../../types/api/productTypes";
import { BASE_URL } from "../../constants/apiConstants";
import { useAppDispatch } from "../../redux/hooks";
import { deleteItem, setNumberOfItems } from "../../redux/shoppingCardSlice";

const styles = StyleSheet.create(
    {
        container: {
            width:Dimensions.get("screen").width - 32,
            paddingVertical:16,
            paddingHorizontal:8,
            display: "flex",
            flexDirection: "column",
        },
        borderStyles: {
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
            paddingHorizontal:4,
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

type props =  {
    readonly?: boolean,
    onPressItem:(index:number)=>void,
    last:boolean,
    product: shoppingCarItemType
}

export const CarItem = (props:props):JSX.Element=>{

    const {
        product: {
            principal_image, name, variant: {price, pk:variantPk}, short_description, numberOfItems, pk
        }, 
        onPressItem, 
        last, 
        readonly = false
    } = props;


    const lastStyles = !!last ? {} : styles.borderStyles;
    const dispatch = useAppDispatch();

    const removeItemFromCar =()=> {
        dispatch(deleteItem(`${pk}.${variantPk}`))
    }

    const onChangeItemNumber = (value:number):void=> {
        if(value < 1) {
            removeItemFromCar()
        }
        else {
            dispatch(setNumberOfItems({
                key: `${pk}.${variantPk}`,
                numberOfItems: value
            }))
        }
    }
    
    return (
        <Pressable
            onPress={
                ()=> onPressItem(1)
            }
            disabled={readonly}
        >
            {
                ({pressed})=>(
                    <View style={
                        {
                            ...styles.container,
                            ...lastStyles,
                            opacity: pressed ? 0.7 : 1
                        }
                    }>
                        <View style={styles.flexRowStyles}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri:principal_image, cache: 'force-cache'}} style={styles.imageStyles} resizeMode='contain'/>
                            </View>
                            <View style={styles.informationContainer}>
                                    
                                <View style={styles.priceAndFavoriteContainer}>
                                    <View style={styles.titleContainerAndFavorite}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.titleTextStyles}>
                                                {name}
                                            </Text>
                                        </View>
                                        {
                                            !readonly ? (
                                                <View style={styles.likeContainer}>
                                                    <DeleteProductButton 
                                                    
                                                        onPress={
                                                           removeItemFromCar
                                                        }
                                                    />
                                                </View>
                                            ) : null
                                        }
                                    </View>
                                    <View style={styles.ingredientsDescriptionContainer}>
                                        <Text style={styles.descriptionTextStyles} numberOfLines={3}>
                                            {short_description}
                                        </Text>
                                    </View>
                                    <View style={styles.priceContainerAndCount}>
                                        <View style={styles.priceContainer}>
                                            <Text style={styles.dolarPrice}>
                                                {( price * numberOfItems) + "$"}
                                            </Text>
                                        </View>
                                        <View style={styles.countSelector}>
                                            <PlusLessButton
                                                readonly={readonly}
                                                onChange={
                                                    onChangeItemNumber
                                                }
                                                value={numberOfItems}
                                                limit={numberOfItems}
                                            /> 
                                        </View>
                                    </View>
                                </View>
                                        
                            </View>
                                    
                        </View>
                    </View>
                )
            }
        </Pressable>
    );
}