import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { payMethodSlicerErrorSelector, payMethodSlicerReducersStaus, payMethodSlicerSelector } from "../../redux/payMethodSlicer";
import { payMethodRequestSagasAction } from "../../sagas/paymethodSagas";
import { ErrorModal } from "../modal/ErrorModal";
import { getUserConstants, removeData, storeData } from "../../utils/asyncStore";
import { useAuth0 } from "react-native-auth0";
import { useLocalRequest } from "../../hooks/useLocalRequest";
import { deletePayMethodRequest } from "../../utils/apiRequests";
import { sessionTokenSelector } from "../../redux/SessionReducer";

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom: 16
    },
    subtitleContainer: {
        width: "100%",
        marginBottom: 8
    },
    subtitleText: {
        fontSize:20,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    textStyles: {
        color:colors.white_card,
        fontWeight:"400"
    },
    textContainer: {
        height:24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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
    loading: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginBottom: 16
    },
});

type aditionalProps = {

}

type props = tabViewSceneProps & aditionalProps

const transformResults = (data: Record<string, any>[]) => data.map(
    item => {
        if(item['mobile_pay'] !== null) {
            return {
                name: `Pago Móvil ${item['mobile_pay'].pk}`,
                ['ID']: item.pk,
                ['Numero de telefono']: item['mobile_pay'].phone_number,
                ['CI']: item['mobile_pay'].ci,
                ['Código del banco']: item['mobile_pay'].bank_code,
            }
        }
        else {
            return {
                name: `Wallet ${item['wallet_pay'].pk ?? ''}`,
                ['ID']: item.pk,
                ['Clave Pública']: item['wallet_pay'].address,
                ['Dirección de wallet']: item['wallet_pay'].public_key,
            }
        }
    }
)


export const PayMethodContainer = (props:props): JSX.Element=> {

    const results = useAppSelector(payMethodSlicerSelector);
    const status = useAppSelector(payMethodSlicerReducersStaus);
    const error = useAppSelector(payMethodSlicerErrorSelector);
    const {refetch, clear, reducerStatus, responseObject} = useLocalRequest(deletePayMethodRequest);
    const {user} = useAuth0();
    const token = useAppSelector(sessionTokenSelector);
    const [itemSelected, setItem] = useState<string | null>(null);

    const dispatch = useAppDispatch();

    const onSelect = async (item:string) => {
        const object = {
            activePayMethod: item
        }
        const value = await getUserConstants(user?.sub ?? '');
        if (value === null) {
        // value previously stored
            await storeData(user?.sub ?? '', JSON.stringify(object))
        } else {
            const parsedValue = JSON.parse(value);
            await storeData(user?.sub ?? '', JSON.stringify({
                ...parsedValue,
                ...object
            }))
        }
        setItem(item);
    }

    const onDelete = async (item: string) => {
        const info = await getUserConstants(user?.sub ?? '')
        if (info !== null) {
            const {activePayMethod, ...rest} = JSON.parse(info);
            if (activePayMethod !== undefined && activePayMethod === item) {
                await removeData('activePayMethod');
            }
        }
        refetch({
            token: token ?? '',
            item
        })
    }

    const initializeItem = async () => {
        const info = await getUserConstants(user?.sub ?? '')
        if (info !== null) {
            const obj = JSON.parse(info);
            if ('activePayMethod' in obj) {
                setItem(obj.activePayMethod);
            }
        }
    }

    useEffect(
        () => {
            initializeItem();
            // dispatch(payMethodRequestSagasAction());
        },
        []
    );

    useEffect(
        () => {
            if(reducerStatus === 'SUCCESSED') {
                dispatch(payMethodRequestSagasAction());
                clear();
            }
        },
        [reducerStatus]
    )

    const {jumpTo} = props;

    const onPressCreate = ()=> {
        jumpTo("second");
    }

    const manageNext = ()=> {
        if(status === 'SUCCESSED') {
            dispatch({
                type: 'N_REQUEST_PAY_METHOD',
            })
        }   
    }
    const isLoading = () =>  status === 'INITIAL' || status === 'LOADING' || status === 'N_LOADING';
    return (
       <View style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    Metodos de Pago Disponibles
                </Text>
            </View>
             {
                status !=='ERROR' ? (
                    <>
                        <ToggableList onSelect={onSelect} onDelete={onDelete} data={transformResults(results ?? [])} onReachEnd={manageNext} voidMessage="No hay metodos de pago disponibles" itemSelected={itemSelected} loading={isLoading()}/> 
                        <PrincipalButton onPress={onPressCreate} radius={5}>
                            <View style={styles.textContainer}>
                                <Text style={styles.textStyles}>
                                    Agregar Metodo de Pago
                                </Text>
                            </View>
                        </PrincipalButton>
                    </>
                ): null
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
                reducerStatus === 'ERROR' ? (
                    <ErrorModal 
                    title="Error cargando eliminando el metodo de pago"
                    subtitle={responseObject?.statusText ?? ''}
                />
                ) : null
            }
            
       </View>
    )
}