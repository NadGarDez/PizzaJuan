import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { drawerItemsText } from "../../constants/drawerItems";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { HeartIconOutlined } from "../icons/HeartIconOutlined";
import { shadows } from "../../styles/shadow";

const styles = StyleSheet.create({
    itemContainerUnselected : {
        marginVertical:8,
        paddingLeft:8,
        display:"flex",
        flexDirection:"row",
        height:30,
        width: "100%",
        borderRadius:5,
    },
    itemContainerSelected : {
        marginVertical:8,
        paddingLeft:8,
        display:"flex",
        flexDirection:"row",
        height:30,
        width: "100%",
        borderRadius:5,
        backgroundColor:colors.white_card,
        ...shadows.principalShadow
    },
    iconContainer : {
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        height:"100%",
        marginRight:4
    }, 
    textContainer : {
        height:"100%",
        flex:1,
        justifyContent:"center"
    },
    textStylesSelected : {
        fontSize:20,
        color:colors.principal,
        fontWeight:"700"
    },
    textStylesUnselected : {
        fontSize:18,
        fontWeight:"400",
        color:colors.white_card,
    }
})

type iconProps = {
    color:string,
    size:number,

}

type props = {
    label:string,
    selected:boolean,
    onPress?:(item:string)=>void,
    onPressAsync?: ()=>Promise<void>,
    icon?:(props:iconProps)=>JSX.Element
}

export const DrawerItem = (props:props):JSX.Element=> {

    const {label, onPress, selected, onPressAsync, icon} = props;

    const jumpTo = async ()=>{
        if(onPress) {
            onPress(label)
            return
        }
        else if(onPressAsync) {
            await onPressAsync()
        }
    }

    return (
        <TouchableOpacity onPress={jumpTo}>  
            <View style={selected? styles.itemContainerSelected: styles.itemContainerUnselected}>
                <View style={styles.iconContainer}>
                    {
                        !!icon ? icon({
                            color:selected ? colors.principal: "white",
                            size:25
                        }):<HeartIconOutlined color={selected ? colors.principal: "white"}/>
                    }
                    
                </View>
                <View style={styles.textContainer}>
                    <Text style={selected ? styles.textStylesSelected : styles.textStylesUnselected}>
                        {
                            drawerItemsText[label]
                        }
                    </Text>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}