import { DrawerContentScrollView,DrawerContentComponentProps, } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { StyleSheet, Text , View} from "react-native";
import { colors } from "../../styles/colors";
import { AvatarImage } from "../surfaces/AvatarImage";
import { useAuth0 } from "react-native-auth0";
import { useDispatch } from "react-redux";
import { resetSession, sessionObjectSelector } from "../../redux/SessionReducer";
import { CustomDrawerItemList } from "./CustomDrawerItemList";
import { DrawerItem } from "../buttons/DrawerItem";
import { drawerIconSelector } from "../../utils/drawerIconSelector";
import { useAppSelector } from "../../redux/hooks";


const styles = StyleSheet.create({
    contaner : {
        flex:1,
        flexDirection:"column",
        backgroundColor:colors.principal,
    },
    closeContainer :{
        display: "flex",
        flexDirection: "row",
        paddingLeft:16,
        marginBottom:16
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "row",
        paddingLeft:16,
        height:100,
        marginBottom:16,
        marginTop:8
    },
    itemContainers:{
        flex:1,
        paddingHorizontal:8
    },
    avatarImage: {
        marginRight:8
    },
    avatarGreatings: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent:"center",
        marginBottom:16,
        marginTop:8
    },
    greetingsText: {
        fontSize:20,
        color: colors.black_thin,
        fontWeight: "400"
    },
    nameText: {
        fontSize:34,
        color: colors.black,
        fontWeight: "700"
    },
    logoutContainer:{
        marginBottom:32,
        paddingLeft:16
    }
})

export const CustomDrawer = (props:DrawerContentComponentProps):JSX.Element => {
    const {clearSession, user} = useAuth0();
    const dispatch = useDispatch();
    const {givenName, picture} = useAppSelector(sessionObjectSelector);

    const logout = async ():Promise<void>=> {
        await clearSession()
    }

    useEffect(
        ()=> {
            if(user === null){
                dispatch(resetSession());
            }
        },
        [user]
    )
    
    return (
       <View style={styles.contaner}>
           <DrawerContentScrollView>
               <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <AvatarImage 
                           
                        />
                    </View>
                    <View style={styles.avatarGreatings}>
                        <Text style={styles.greetingsText}>
                            Buenas Tardes,
                        </Text>
                        <Text style={styles.nameText}>
                            {givenName}
                        </Text>
                    </View>
               </View>
               <View style={styles.itemContainers}>
                    <CustomDrawerItemList {...props}/>
               </View>
           </DrawerContentScrollView>
           <View style={styles.logoutContainer}>
               <DrawerItem 
                    label="LOG_OUT" 
                    onPressAsync={logout}
                    selected={false}
                    icon={
                        drawerIconSelector("LOG_OUT")
                    }
               />
           </View>
       </View>
    )
}