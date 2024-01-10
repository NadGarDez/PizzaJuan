import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"
import { StackNavigationProp } from "@react-navigation/stack"
import { CarStackProp } from "../../navigation/Stacks/CarStack"
import { LogInSignInStackPropType } from "../../navigation/Stacks/LogInSignInStack"
import { Credentials, useAuth0 } from "react-native-auth0"
import { useAppDispatch } from "../../redux/hooks"
import { setSession, setSessionObject } from "../../redux/SessionReducer"

const styles = StyleSheet.create(
    {
        container : {
            flex:1
        }
    }
)

type LogInSignInScreenPropType = StackNavigationProp<LogInSignInStackPropType, "LOG_IN_SIGN_IN_SCREEN">

export const LogInSignInScreen = ():JSX.Element=>{

    const {authorize,clearSession, user,getCredentials} = useAuth0();
    const dispatch = useAppDispatch();
    
    const LoginSignInPanel=async ()=>{
        try {
            await authorize()
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
                    sub:user.sub ?? "",
                    email:user.email ?? "",
                    nickname:user.nickname ?? "",
                    givenName:user.givenName ?? "",
                    picture:user.picture?? "",
                }))
            }
        },
        [user, getCredentials]
    )
    
    return (
        <View style={styles.container}>
            <HelloWorldComponent sectionMessage="Ventana de inicio de sesion" onPress={LoginSignInPanel} buttonText="Login"/>
        </View>
    )
}
