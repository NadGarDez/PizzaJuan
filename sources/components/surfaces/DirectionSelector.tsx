import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { LocationIcon } from "../icons/LocationIcon";
import { GoFoward } from "../icons/GoFoward";
import { ModalForm } from "../modal/ModalForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { activateWithoutValid, configure, modalFormSelector } from "../../redux/ModalFormReducer";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { getUserConstants } from "../../utils/asyncStore";
import { useAuth0 } from "react-native-auth0";
import { deliveryLocationErrorSelector, deliveryLocationReducersStaus, deliveryLocationSelector } from "../../redux/deliveryLocationSlicer";
import { deliveryLocationRequestSagasAction } from "../../sagas/deliveryLocationSagas";
import { ErrorModal } from "../modal/ErrorModal";
import { object } from "yup";


const styles = StyleSheet.create({
    container: {
        paddingLeft:12,
        paddingRight:8,
        paddingVertical:8
    },
    titleStyles: {
        color:colors.seconday_text,
        fontSize:16,
        fontWeight:"600"
    },
    informationContainerAndButton: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    directionContainer: {
        flex:1,
        paddingHorizontal:4
    },
    iconContainer:{
        
    },
    semiTransparentCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#00000020",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    firstLineDirection: {
        color:colors.principal,
        fontSize:14,
        fontWeight:"500"
    },
    secondLineDirection: {
        marginTop:2,
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    }, 
    buttonContainer: {
        
    },
    loading: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginBottom: 16
    },

})

const validCase = (data: any[], activeItem: string | undefined) => data.length > 0 && activeItem !== undefined;
const errorCase = (data: any[], activeItem: string | undefined) => data.length === 0 || activeItem === undefined;

export const DireactionSelector = () => {

    const [itemSelected, setItem] = useState<
        Record<string,any>
     | undefined>(undefined);
    const { visible} = useAppSelector(modalFormSelector);
    const deliveryLocations = useAppSelector(deliveryLocationSelector);
    const deliveryLocationsStatus = useAppSelector(deliveryLocationReducersStaus);
    const error = useAppSelector(deliveryLocationErrorSelector);
    const dispatch = useAppDispatch();
    const {user} = useAuth0();

    const initializeItem = async () => {
        const info = await getUserConstants(user?.sub ?? '')
        if (info !== null) {
            const obj = JSON.parse(info);
            if ('activeLocation' in obj ) {
                console.log('paso por aqui');
                const foundItem = deliveryLocations.find(item => item.pk === obj.activeLocation);
                setItem(foundItem)
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

    useEffect(
        () => {
            if(deliveryLocationsStatus === 'INITIAL' ) {
                dispatch(deliveryLocationRequestSagasAction());
            }
        },
        []
    )

    const onPress = ()=> {
        dispatch(configure("DELIVERY_CONFIGURATION" as ModalFormNames))
        dispatch(activateWithoutValid());
    }

    return (
        <>
            {
                deliveryLocationsStatus === 'INITIAL' || deliveryLocationsStatus === 'LOADING' ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size={60} color={colors.principal}/>
                    </View>
                ) : null
            }

            { 
                deliveryLocationsStatus === 'ERROR' ? (
                    <ErrorModal 
                        title="Error cargando la lista de metodos de pago"
                        subtitle={error as string}
                    />
                ): null
            }
            <Pressable
                onPress={onPress}
            >
                {
                    ({pressed})=>(
                        <View style={{
                            ...styles.container,
                            backgroundColor: pressed ? colors.seconday_text + "10" : "transparent"
                        }}>
                            {
                                validCase(deliveryLocations, itemSelected?.pk) ? (
                                    <View style={styles.informationContainerAndButton}>
                                        <View style={styles.iconContainer}>
                                            <View style={styles.semiTransparentCircle}>
                                                <LocationIcon color={colors.white_card} />
                                            </View>
                                        </View>
                                        <View style={styles.directionContainer}>
                                                <Text style={styles.firstLineDirection}>
                                                   {
                                                    itemSelected?.name
                                                   }
                                                </Text>
                                                <Text style={styles.secondLineDirection}>
                                                    {
                                                        itemSelected?.description
                                                    }
                                                </Text>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <GoFoward size={30} color={colors.seconday_text}/>
                                        </View>
                                    </View>
                                ) : null
                            }

                            {
                                errorCase(deliveryLocations, itemSelected?.pk) ? (
                                    <View style={styles.informationContainerAndButton}>
                                    <View style={styles.iconContainer}>
                                        <View style={styles.semiTransparentCircle}>
                                            <LocationIcon color={colors.white_card} />
                                        </View>
                                    </View>
                                    <View style={styles.directionContainer}>
                                            <Text style={{...styles.firstLineDirection, color: colors.error}}>
                                               La dirección de envio no esta configurada
                                            </Text>
                                            <Text style={styles.secondLineDirection}>
                                                Presiona aqui para configurar
                                            </Text>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <GoFoward size={30} color={colors.seconday_text}/>
                                    </View>
                                </View>
                                ): null
                            }
                            
                            

                        </View>
                    )
                }
            </Pressable>
            <ModalForm />
        </>
    )
}
