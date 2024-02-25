import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { HelloWorldComponent } from "../../components/HelloWorldComponent"
import { useAuth0 } from "react-native-auth0"
import { useAppDispatch } from "../../redux/hooks"
import { resetSession } from "../../redux/SessionReducer"
import { colors } from "../../styles/colors"
import { TransformedSquareWithoutRotation } from "../../components/surfaces/TransformedSquareWithoutRotation"
import { UserInformationContainer } from "../../components/surfaces/UserInformationContainer"

const styles = StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor:colors.background_white
        }
    }
)

export const UserScreen = ():JSX.Element=>{

    const {clearSession, user} = useAuth0()
    const dispatch = useAppDispatch()

    const onPress= async ()=>{
        await clearSession()
    }

    useEffect(
        ()=>{
            if(user === null){
                dispatch(resetSession());
            }
        },
        [user]
    )
    
    return (
        <>
            <View style={styles.container}>
                <TransformedSquareWithoutRotation />
                <UserInformationContainer />
                
            </View>
        </>
    )
}
