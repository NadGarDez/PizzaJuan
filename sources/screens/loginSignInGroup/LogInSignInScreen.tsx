import React, { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { LogInSignInStackPropType } from "../../navigation/Stacks/LogInSignInStack"
import { useAuth0 } from "react-native-auth0"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { sessionTokenSelector, setSession } from "../../redux/SessionReducer"
import { colors } from "../../styles/colors"
import { LoginButton } from "../../components/buttons/LoginButton"
import { requestUserInformationSagasAction } from "../../sagas/userSagas"
import { deliveryLocationRequestSagasAction } from "../../sagas/deliveryLocationSagas"
import { payMethodRequestSagasAction } from "../../sagas/paymethodSagas"
const image = require('../../../static/images/splash_screen.png');

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: colors.principal,
        },

        imageContainer: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonContainer: {
            marginVertical:32,
            paddingHorizontal:24
        },
        versionText: {
            color: colors.white_card,
            textAlign: 'center',
            marginTop: 8
        }
    }
)

type LogInSignInScreenPropType = StackNavigationProp<LogInSignInStackPropType, "LOG_IN_SIGN_IN_SCREEN">

export const LogInSignInScreen = ():JSX.Element=>{

    const {authorize, user,getCredentials} = useAuth0();
    const token = useAppSelector(sessionTokenSelector);
    const dispatch = useAppDispatch();
    

    const LoginSignInPanel=async ()=>{
        try {
            await authorize(
                {audience:"https://localhost/jhons_pizza_backend"}
            )
        } catch (error) {
            
        }
    } 

    const getCre = async ()=>{
        const credentials = await getCredentials();
        if(credentials?.accessToken !== undefined || credentials?.accessToken!==null){
            dispatch(setSession(credentials?.accessToken as string))
        }
    }

    console.log(user)

    useEffect(
        ()=>{
            if (user !== null && user !== undefined){
                getCre()
            }
        },
        [user, getCredentials]
    );

    useEffect(
        () => {
            if (token !== null) {
                dispatch(requestUserInformationSagasAction());
                dispatch(deliveryLocationRequestSagasAction());
                dispatch(payMethodRequestSagasAction())
            }
        },
        [token]
    )
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image 
                    source={image}
                    width={382}
                    height={382}
                />
            </View>
            <View style={styles.buttonContainer}>
                <LoginButton   onPress={LoginSignInPanel}/>
                <Text style={styles.versionText}>
                    Desarrollador: @NadGardez {"\n"}Version 0.0.1 (beta)
                </Text>
            </View>
        </View>
        
    )
}
