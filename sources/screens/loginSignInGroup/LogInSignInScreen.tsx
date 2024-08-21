import React, { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"
import { StackNavigationProp } from "@react-navigation/stack"
import { LogInSignInStackPropType } from "../../navigation/Stacks/LogInSignInStack"
import { useAuth0 } from "react-native-auth0"
import { useAppDispatch } from "../../redux/hooks"
import { setSession, setSessionObject } from "../../redux/SessionReducer"
import { colors } from "../../styles/colors"
import { WhiteButton } from "../../components/buttons/WhiteButton"
import { LoginButton } from "../../components/buttons/LoginButton"
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

    const {authorize,clearSession, user,getCredentials} = useAuth0();
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

    useEffect(
        ()=>{
            if (user !== null && user !== undefined){
                getCre()
                dispatch(setSessionObject({
                    sub:user.sub ?? null,
                    email:user.email ?? null,
                    nickname:user.nickname ?? null,
                    givenName:user.givenName ?? null,
                    picture:user.picture?? null,
                    familyName: user.familyName ?? null
                }))
            }
        },
        [user, getCredentials]
    )
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                {/* <HelloWorldComponent sectionMessage="Ventana de inicio de sesion" onPress={LoginSignInPanel} buttonText="Login"/> */}
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
