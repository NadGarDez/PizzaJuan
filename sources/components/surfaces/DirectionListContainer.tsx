import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ToggableList } from "../lists/ToggableList";
import { tabViewSceneProps } from "../../constants/sustituteTypes";
import { colors } from "../../styles/colors";
import { PrincipalButton } from "../buttons/PrincipalButton";
import { useDispatch } from "react-redux";
import { sessionTokenSelector } from "../../redux/SessionReducer";
import { deliveryLocationErrorSelector, deliveryLocationReducersStaus, deliveryLocationSelector } from "../../redux/deliveryLocationSlicer";
import { deliveryLocationRequestSagasAction } from "../../sagas/deliveryLocationSagas";
import { ErrorModal } from "../modal/ErrorModal";
import { useAppSelector } from "../../redux/hooks";
import { getUserConstants, removeData, storeData } from "../../utils/asyncStore";
import { useAuth0 } from "react-native-auth0";
import { useLocalRequest } from "../../hooks/useLocalRequest";
import { deleteDeliveryLocationRequest } from "../../utils/apiRequests";

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:16,
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
        backgroundColor: colors.blackTwentyPercent,
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
        return {
            name: item['name'],
            ['ID']: item.pk,
            ['Código Plus']: item['plus_code'],
            ['Descripción']: item['description'],
        }
    }
)

export const DirectionListContainer = (props:props): JSX.Element=> {

    const token = useAppSelector(sessionTokenSelector);
    const {user} = useAuth0();
    const data = useAppSelector(deliveryLocationSelector);
    const status = useAppSelector(deliveryLocationReducersStaus);
    const error = useAppSelector(deliveryLocationErrorSelector);
    const {refetch, clear, reducerStatus } = useLocalRequest(deleteDeliveryLocationRequest);
    const dispatch = useDispatch();

    const [itemSelected, setItem] = useState<string | null>(null);

    const onSelect = async (item:string) => {
        const object = {
            activeLocation: item
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

    const {jumpTo} = props;

    const initializeItem = async () => {
        const info = await getUserConstants(user?.sub ?? '')
        if (info !== null) {
            const obj = JSON.parse(info);
            if ('activeLocation' in obj) {
                setItem(obj.activeLocation);
            }
        }
    }

    useEffect(
        () => {
            initializeItem()
            // dispatch(deliveryLocationRequestSagasAction());
        },
        []
    )

    useEffect(
        () => {
            if(reducerStatus === 'SUCCESSED') {
                dispatch(deliveryLocationRequestSagasAction());
                clear();
            }
        },
        [reducerStatus]
    )


    const onPressCreate = ()=> {
        jumpTo("second");
    }

    const manageNext = ()=> {
        if(status !== 'LOADING' && status !== 'N_LOADING') {
            dispatch({
                type: 'N_REQUEST_DELIVERY_LOCATIONS',
            })
        }   
    }

    const isLoading = () =>  status === 'INITIAL' || status === 'LOADING' || status === 'N_LOADING'

    return (
       <View style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    Direcciones disponibles
                </Text>
            </View>
            {
                status !== 'ERROR' ? (
                    <>
                        <ToggableList 
                            onDelete={onDelete}
                            onSelect={onSelect}
                            data={transformResults(data)} 
                            voidMessage="No hay direcciones disponibles"
                            itemSelected={itemSelected}
                            onReachEnd={manageNext}
                            loading={isLoading()}
                        /> 
                        <PrincipalButton onPress={onPressCreate} radius={5}>
                            <View style={styles.textContainer}>
                                <Text style={styles.textStyles}>
                                    Agregar Direccion
                                </Text>
                            </View>
                        </PrincipalButton>
                    </>
            ): null }

{
                status === 'ERROR' ? (
                    <ErrorModal 
                        title="Error cargando la lista de direccciones"
                        subtitle={error as string}
                    />
                ): null
            }
       </View>
    )
}