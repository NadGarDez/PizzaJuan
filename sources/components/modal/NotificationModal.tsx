import React, {useEffect, useState} from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../styles/colors";
import { CheckIcon } from "../icons/CheckIcon";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',

    },
    windowErrorContainer: {
        width: '100%',
        backgroundColor: colors.white_card,
        borderRadius:13,
        paddingVertical: 8,
    },
    titleContainer: {
        paddingBottom:8,
        paddingHorizontal:16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    subtitleContainer: {
        paddingVertical:16,
        paddingHorizontal:16
    },
    buttonContainer: {
        paddingVertical:8,
        paddingHorizontal:16
    },
    titleText: {
        fontSize:18,
        fontWeight: "700",
        color:colors.principal,
        textAlign: 'center'
    },
    subtitleText: {
        fontSize:16,
        fontWeight: "200",
        color:colors.seconday_text,
        textAlign: 'center'
    },
    line: {
        borderStyle:"solid",
        borderWidth: 0,
        borderTopWidth:1,
        borderTopColor: colors.seconday_text + "30",
        width: "100%",
        marginBottom:8
    },
})

interface props {
    title:string,
    subtitle:string,
    onClose: ()=>void,
    visible:boolean
}

export const NotificationModal = (props:props):JSX.Element => {

    const {title, onClose, visible} = props;

    const close = ()=>{
        onClose()
    }

    useEffect(
        ()=>{
            if(visible===true){
                setTimeout(() => {
                    close()
                }, 1200);
            }
        },
        [visible]
    )


    return (
        <Modal isVisible={visible} animationIn='pulse' animationOut='zoomOut'>
            <View style={styles.windowErrorContainer}>
                <View style={styles.titleContainer}>
                    <CheckIcon 
                        color='#90EE90'
                        size={50}
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        {title}
                    </Text>
                </View>
            </View> 
        </Modal>
    )
}