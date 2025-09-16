import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { HeartIconFilled } from "../icons/HeartIconFilled"
import { PlusLessButton } from "../buttons/PlusLessButton"
import { AddToCarButton } from "../buttons/AddToCarButton"
import { colors } from "../../styles/colors"
import { baseProduct } from "../../types/api/productTypes"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { activeVariantSeelector } from "../../redux/activeProductSlice"
import { setProduct } from "../../redux/shoppingCardSlice"
import { NotificationModal } from "../modal/NotificationModal"

const styles = StyleSheet.create({
    informationContainer: {
        backgroundColor: colors.white_card,
        borderRadius: 30,
        paddingVertical: 16,
        paddingBottom: 50,
        flex: 1,
    },

    titleContainer: {
        paddingLeft: 16,
        display: "flex",
        flexGrow: 3,
        flexDirection: "row",
    },
    likeButtonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "flex-end",
        paddingRight: 16
    },

    disponibilityContainer: {
        paddingRight: 18,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        paddingLeft: 16,
        marginTop: 4
    },
    priceContainer: {
        paddingLeft: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        flexGrow: 1
    },
    amountButtonContainerAndPrice: {
        marginTop: 24,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    titleStyles: {
        fontSize: 25,
        fontWeight: "700",
        color: colors.principal
    },
    likeNumberContainer: {
        fontSize: 16,
        fontWeight: "200",
        color: colors.seconday_text,
    },
    dolarPrice: {
        marginRight: 4,
        fontSize: 20,
        fontWeight: "600",
        color: colors.seconday_text
    },
    bsPrice: {
        fontSize: 14,
        fontWeight: "300",
        color: colors.seconday_text
    },

    titleLikesContainer: {
        display: "flex",
        flexDirection: "column"
    },
    descriptionContainer: {
        display: "flex",
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 18
    },
    descriptionTitleStyles: {
        color: colors.seconday_text,
        fontSize: 16,
        fontWeight: "600"
    },
    descriptionTextStyles: {
        fontSize: 14,
        fontWeight: "200",
        marginTop: 8,
        color: colors.seconday_text,
    },
    descriptionTextStylesTap: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8,
        color: colors.seconday_text,
    },
    line: {
        borderStyle: "solid",
        borderWidth: 0,
        borderTopWidth: 1,
        borderTopColor: colors.seconday_text + "30",
        width: "100%",
        marginTop: 4,
    },
    orderContiner: {
        paddingRight: 18,
        display: "flex",
        justifyContent: "flex-end",
    },
    buttonAddContainer: {
        paddingHorizontal: 16,
        marginTop: 16,
    },
    buttonAndOrderContainer: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        flexGrow: 1,
        width: '100%'
    },
    productNameContainer: {
        flex:8
    }


})


type props = {
    compressed: boolean
}



export const ProductInformationCard = (props: baseProduct & props) => {

    const { name, description, recomendations_count, compressed, variants } = props;
    const [productAmount, setProductAmount] = useState<number>(1);
    const [showModal, setShowModal] = useState<boolean>(false);

    const activeVariant = useAppSelector(activeVariantSeelector);
    const dispatch = useAppDispatch()

    const plusLessManager = (counter: number) => setProductAmount(counter);

    const addProductToStore = () => {

        const { variants, compressed, description, category, ...rest } = props
        const key = `${props.pk}.${variants[activeVariant].pk}`
        const { images, ...variant } = variants[activeVariant];

        dispatch(
            setProduct({
                item: {
                    ...rest,
                    variant,
                    numberOfItems: productAmount
                },
                key
            })
        )
        setShowModal(true);
    }

    const onCloseModal = () => setShowModal(false);


    useEffect(
        () => {
            setProductAmount(1);
        },
        [activeVariant]
    )

    return (
        <>
            <View style={styles.informationContainer}>
                <View style={styles.titleLikesContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.productNameContainer}>
                            <Text style={styles.titleStyles}>
                                {name}: {variants[activeVariant].name}
                            </Text>
                        </View>

                        <View style={styles.likeButtonContainer}>
                            <Text style={[styles.likeNumberContainer, { marginLeft: 10 }]}>
                                {recomendations_count}
                            </Text>
                            <HeartIconFilled color={colors.pink} />
                        </View>

                    </View>


                    <View style={styles.disponibilityContainer}>
                        <Text style={{ ...styles.likeNumberContainer, marginTop: 0, marginRight: 4 }}>
                            {variants[activeVariant].disponibility} Unidades disponibles
                        </Text>
                        {/* <Text style={[styles.likeNumberContainer, {marginLeft:10}]}>
                            {recomendations}
                            </Text>
                       <HeartIconFilled color={colors.pink}/> */}


                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitleStyles}>
                        Descripcion
                    </Text>
                    <View style={styles.line}>
                    </View>

                    {
                        compressed ? (
                            <Text style={styles.descriptionTextStyles}>
                                {description.substring(0, 200)}... Ver mas
                            </Text>
                        ) : (
                            <Text style={styles.descriptionTextStyles}>
                                {description}
                            </Text>
                        )
                    }

                </View>



                <View style={styles.buttonAndOrderContainer}>
                    <View style={styles.amountButtonContainerAndPrice}>
                        <View style={styles.priceContainer}>
                            <Text style={styles.dolarPrice}>
                                {variants[activeVariant].price + "$"}
                            </Text>
                            <Text style={styles.bsPrice}>
                                referencia {(variants[activeVariant].price * 36) + "bs"}
                            </Text>
                        </View>
                        <View style={styles.orderContiner}>
                            <PlusLessButton onChange={plusLessManager} value={productAmount} limit={variants[activeVariant].disponibility} />
                        </View>
                    </View>
                    <View style={styles.buttonAddContainer}>
                        <AddToCarButton onPress={addProductToStore} disabled={productAmount === 0} />
                    </View>
                </View>
            </View>
            <NotificationModal
                visible={showModal}
                onClose={onCloseModal}
                title="Se ha agregado un nuevo producto al carrito"
                subtitle="Ingresa al carrito de compras en el menu lateral para continuar tu compra"
            />
        </>

    )
}