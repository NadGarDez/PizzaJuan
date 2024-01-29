import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { HeartIconFilled } from "../icons/HeartIconFilled"
import { PlusLessButton } from "../buttons/PlusLessButton"
import { AddToCarButton } from "../buttons/AddToCarButton"
import { colors } from "../../styles/colors"

const styles = StyleSheet.create({
    informationContainer: {
        display:"flex",
        backgroundColor:colors.white_card,
        borderRadius:30,
        paddingVertical:16,
        paddingBottom:50,
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

})


type props = {
    productName:string,
    price:number,
    favorite:boolean,
    image?:any,
    likes:number,
    description:string,
    variants?:any
}

export const ProductInformationCard = ({productName, price, favorite,likes, description }:props)=> {
    return (
        <View style={styles.informationContainer}>
        <View style={styles.titleLikesContainer}>
                <View style={styles.titleContainer}>
                        <Text style={styles.titleStyles}>
                            {productName}
                        </Text>
                </View>


                <View style={styles.likeButtonContainer}>
                    <Text style={styles.likeNumberContainer}>
                        {likes} han reaccionado con
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
                        {price + "$"}
                    </Text>
                    <Text style={styles.bsPrice}>
                        referencia {(price * 36) + "bs"}
                    </Text>
            </View>
            <View style={styles.orderContiner}>
                <PlusLessButton onChange={()=>{}} />
            </View>
        </View>
        <View style={styles.buttonAddContainer}>
            <AddToCarButton onPress={()=> {
            }} />
        </View>
</View>
    )
}