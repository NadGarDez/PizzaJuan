import React, {useState} from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../styles/colors";
import { OutlinedButton } from "../buttons/OutlinedButton";

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
        paddingHorizontal:16
    },
    subtitleContainer: {
        paddingBottom:8,
        paddingHorizontal:16
    },
    buttonContainer: {
        paddingVertical:8,
        paddingHorizontal:16
    },
    titleText: {
        fontSize:18,
        fontWeight: "700",
        color:colors.seconday_text,
    },
    subtitleText: {
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
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
    subtitle:string
}

export const ErrorModal = (props:props):JSX.Element => {

    const {title, subtitle} = props;

    const [visible, setVisible] = useState<boolean>(true);

    const close = ()=> setVisible(false)
    return (
        <Modal isVisible={visible}
            >
            <View style={styles.windowErrorContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                       {title}
                    </Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>
                        {subtitle}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <OutlinedButton onPress={close}>
                        <Text style={styles.subtitleText}>
                            Cerrar
                        </Text>
                    </OutlinedButton>
                </View>
            </View> 
        </Modal>
    )
}