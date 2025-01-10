import { DrawerContentScrollView,DrawerContentComponentProps, } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { ImageRequireSource, StyleSheet, Text , View} from "react-native";
import { colors } from "../../styles/colors";
import { AvatarImage } from "../surfaces/AvatarImage";
import { useAuth0 } from "react-native-auth0";
import { useDispatch } from "react-redux";
import { resetSession, sessionObjectSelector } from "../../redux/SessionReducer";
import { CustomDrawerItemList } from "./CustomDrawerItemList";
import { DrawerItem } from "../buttons/DrawerItem";
import { drawerIconSelector } from "../../utils/drawerIconSelector";
import { useAppSelector } from "../../redux/hooks";

import manAvatar from '../../../static/images/manAvatar.png';
import womenAvatar from '../../../static/images/womenAvatar.png'


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
        flexWrap: 'wrap',
        paddingHorizontal:16,
        marginBottom:16,
        height: 120,
        marginTop:8
    },
    itemContainers:{
        flex:1,
        paddingHorizontal:8
    },
    avatarImage: {
        marginRight:8,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    avatarGreatings: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent:"center",
        flexWrap: 'wrap',
        marginBottom:16,
        marginTop:8,
    },
    greetingsText: {
        fontSize:20,
        color: colors.black_thin,
        fontWeight: "400"
    },
    nameText: {
        fontSize:25,
        color: colors.black,
        fontWeight: "700"
    },
    logoutContainer:{
        marginBottom:32,
        paddingLeft:16
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

const getSource = (genre:string | null): ImageRequireSource => {
    if (genre === 'male' || genre === null || genre === 'otre') {
        return manAvatar
    }

    else {
        return womenAvatar
    }
}

export const CustomDrawer = (props:DrawerContentComponentProps):JSX.Element => {
    const {clearSession, user} = useAuth0();
    const dispatch = useDispatch();
    const {firstName, email, genre} = useAppSelector(sessionObjectSelector);

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
                           source={getSource(genre)}
                        />
                    </View>
                    <View style={styles.avatarGreatings}>
                        <Text style={styles.greetingsText}>
                            Buenas Tardes,
                        </Text>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText} numberOfLines={1}>
                                {firstName ?? email}
                            </Text>
                        </View>
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