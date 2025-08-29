import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { GoFoward } from "../icons/GoFoward";
import { shadows } from "../../styles/shadow";
import { WalletIcon } from "../icons/WalletIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useAuth0 } from "react-native-auth0";
import { activateWithoutValid, configure, modalFormSelector } from "../../redux/ModalFormReducer";
import { payMethodSlicerErrorSelector, payMethodSlicerReducersStaus, payMethodSlicerSelector } from "../../redux/payMethodSlicer";
import { getUserConstants } from "../../utils/asyncStore";
import { ModalFormNames } from "../../types/forms/generalFormTypes";
import { ErrorModal } from "../modal/ErrorModal";
import { Paymethod } from "../../types/api/paymethod";
import { isWalletPay } from "../../utils/typeGuard";
import { shortWalletAddress } from "../../utils/textFormatting";

const styles = StyleSheet.create({
    floatingContainer: {
        marginTop:16,
        width: "100%",
        borderRadius:10,
        paddingVertical:8,
        backgroundColor:colors.white_card,
        ...shadows.principalShadow,
    }, ////FDAFDSA
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

interface CustomerData {
    pk: number;
    ci: string; 
    bank_code: string;
    phone_number: string;
  }


const validCase = (data: any[], activeItem: string | undefined) => data.length > 0 && activeItem !== undefined;
const errorCase = (data: any[], activeItem: string | undefined) => data.length === 0 || activeItem === undefined;

const getMobilePayString = (data: Paymethod): string => {
    try {
        const parsedData = data as Paymethod;
        if(isWalletPay(parsedData.content_object)) {
            return `wallet address: ${shortWalletAddress(parsedData.content_object.address)}`;

        } else {
            const mobilePay = parsedData.content_object;
            return `Pago Móvil: ${mobilePay.ci} - ${mobilePay.phone_number} - ${mobilePay.bank_code}`
        }
    } catch (error) {
        return ''
    }
   
}

export const PayMethodSelector = () => {

    const [itemSelected, setItem] = useState<
        Record<string,any>
     | undefined>(undefined);

    const dispatch = useAppDispatch();
    const {user} = useAuth0();
    const { visible} = useAppSelector(modalFormSelector);

    const paymethods = useAppSelector(payMethodSlicerSelector);
    const status = useAppSelector(payMethodSlicerReducersStaus);
    const error = useAppSelector(payMethodSlicerErrorSelector);


    const initializeItem = async () => {
        const info = await getUserConstants(user?.sub ?? '')
        if (info !== null) {
            const obj = JSON.parse(info);

            if ('activePayMethod' in obj ) {
                const foundItem = paymethods.find(item => String(item.id) === String(obj.activePayMethod));
                setItem(foundItem)
            }
        }
    }

    useEffect(
        () => {
            if(status === 'SUCCESSED') {
                initializeItem();
            }
        },
        [status, visible]
    )


    const onPress = ()=> {
        dispatch(configure("PAYMENT_CONFIGURATION" as ModalFormNames))
        dispatch(activateWithoutValid());
    }

    return (
        <>
            {
                status === 'INITIAL' || status === 'LOADING' ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size={60} color={colors.principal}/>
                    </View>
                ) : null
            }

            { 
                status === 'ERROR' ? (
                    <ErrorModal 
                        title="Error cargando la lista de metodos de pago"
                        subtitle={error as string}
                    />
                ): null
            }

            {
                status === 'SUCCESSED' ? (
                    <View style={styles.floatingContainer}>
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
                                            validCase(paymethods, itemSelected?.id) ? (
                                                <View style={styles.informationContainerAndButton}>
                                                <View style={styles.iconContainer}>
                                                    <View style={styles.semiTransparentCircle}>
                                                        <WalletIcon color={colors.white_card} />
                                                    </View>
                                                </View>
                                                <View style={styles.directionContainer}>
                                                        <Text style={styles.firstLineDirection}>
                                                        {
                                                            ` Metodo de Pago #${itemSelected?.id}`
                                                        }
                                                        </Text>
                                                        <Text style={styles.secondLineDirection}>
                                                            {
                                                                getMobilePayString(itemSelected as Paymethod) 
                                                            }
                                                        </Text>
                                                </View>
                                                <View style={styles.buttonContainer}>
                                                    <GoFoward size={30} color={colors.seconday_text}/>
                                                </View>
                                            </View>
                                            ): null
                                        }

                                    {
                                        errorCase(paymethods, itemSelected?.id) ? (
                                            <View style={styles.informationContainerAndButton}>
                                            <View style={styles.iconContainer}>
                                                <View style={styles.semiTransparentCircle}>
                                                    <WalletIcon color={colors.white_card} />
                                                </View>
                                            </View>
                                            <View style={styles.directionContainer}>
                                                    <Text style={{...styles.firstLineDirection, color: colors.error}}>
                                                    El método de pago no esta configurado
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
                    </View>
                ) : null
            }
            
        </>

    )
}
