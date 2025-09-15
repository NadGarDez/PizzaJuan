import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { IconButton } from "../buttons/IconButton";
import { BackIcon } from "../icons/BackIcon";
import { HeartButton } from "../buttons/HeartButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { activeProductSelector, updateActiveRecommendedProduct } from "../../redux/activeProductSlice";
import { updateProductRecommendation } from "../../utils/apiRequests";
import { sessionTokenSelector } from "../../redux/SessionReducer";
import { updateProductItemInList } from "../../redux/productsSlicer";


const styles = StyleSheet.create(
    {
        container: {
            paddingTop: Platform.select({
                ios: 47,
                android: 10
            }),
            paddingBottom: 16,
            width: "100%",
            backgroundColor: "#FFFFFF00",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: 0,
            zIndex: 25
        },
        leftContainer: {
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingLeft: 16
        },
        centerContainer: {
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 4
        },
        righContainer: {
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 16
        },
        semiTransparentCircle: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#FFFFFF90",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }

    }
)


export const FloatingProductHeader = ({ navigation }: NativeStackHeaderProps): JSX.Element => {

    const product = useAppSelector(activeProductSelector);
    const [loadingRecommendation, setLoadingRecommendation] = React.useState<boolean>(false);
    const token = useAppSelector(sessionTokenSelector);
    const dispatch = useAppDispatch();

    const back = () => {
        navigation.goBack()
    }

    const updateRecommendationRequest = async (): Promise<void> => {
        if (loadingRecommendation) {
            return;
        }
        setLoadingRecommendation(true);
        try {
            if (!product) {
                return;
            }
            const response = await updateProductRecommendation(product.pk, token ?? '');
            if (response.status === 200) {
                const data = response.data as { message?: string };
                if (data.message === 'Product recommended successfully') {
                    dispatch(updateActiveRecommendedProduct(true));
                    const recomendations_count = product.recomendations_count ? product.recomendations_count + 1 : 1;
                    dispatch(updateProductItemInList({ id: product.pk, item: { ...product, is_recommended_by_user: true, recomendations_count } }) );
                }
                else {
                    dispatch(updateActiveRecommendedProduct(false));
                    const recomendations_count = product.recomendations_count ? Math.max(0, product.recomendations_count - 1) : 0;
                     dispatch(updateProductItemInList({ id: product.pk, item: { ...product, is_recommended_by_user: false , recomendations_count}}));
                }
            }

        } catch (error) {
            console.log("Error updating recommendation: ", error);
        }
        setLoadingRecommendation(false);
    }

    if (!product) {
        return <></>
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.semiTransparentCircle}>
                    <IconButton onPress={back}>
                        <BackIcon />
                    </IconButton>
                </View>

            </View>
            <View style={styles.centerContainer} />
            <View style={styles.righContainer}>
                <View style={styles.semiTransparentCircle}>
                    <HeartButton onPress={updateRecommendationRequest} pressed={product.is_recommended_by_user} />
                </View>
            </View>
        </View>
    )
}