import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { StandardOutlinedSelectInput } from "../inputs/StandardOutlinedSelectInput";
import { VenezuelanBancs } from "../../constants/form/formConstants";
import { mobilePaySMSFormatter } from "../../utils/mobilePaySMSFormatter";
import { OutlinedButton } from "../buttons/OutlinedButton";
import { IconButton } from "../buttons/IconButton";
import { SendIcon } from "../icons/SendIcon";
import { CopyIcon } from "../icons/CopyIcon";

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:8,
    },
    textStyles: {
        fontSize:14,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    smsContainer: {
        marginTop: 8,
        flex: 1
    },
    imageStyles: {
        width:'100%',
        height: '100%'
    },
    selectContainer: {
        marginTop:8
    },
    textContainer: {
        marginTop:8,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smsTextStyles: {
        fontSize:25,
        fontWeight:"700",
        color:colors.seconday_text,
        textAlign: 'center'
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent : "center",
        marginTop:12
    },
    buttonContainer: {
        flex:1,
        marginVertical:8,
        display: "flex",
        flexDirection: "row",
        justifyContent : "center"
    },
})

const data = VenezuelanBancs.filter(
    item => item.sms === true
);

export const StoreSMS = ()=> {

    const [issuingBank, setIssuingBank] = useState<string>('');
    const onChangeSelect = (value: string) => setIssuingBank(value);

    const msjData = mobilePaySMSFormatter(
        issuingBank,
        '0105',
        'V',
        '26177497',
        '04243121846',
        '20,00'
    )

    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Envia un pago movil con el monto de tu compra usando el siguiente mensaje de texto</Text>
            <View style={styles.smsContainer}>
               <View style={styles.selectContainer}>
                    <StandardOutlinedSelectInput 
                        onChangeCallback={onChangeSelect}
                        inputName="Formato del mensaje de texto"
                        placeholder="Formato del mensaje"
                        initialValue="0102"
                        data={data}
                    />
               </View>
               <View style={styles.textContainer}>
                    <Text style={styles.smsTextStyles}>
                        {msjData.sms}
                    </Text>
                    <View style={styles.buttonsContainer}>
                            <IconButton onPress={()=>{}}>
                                <SendIcon color={colors.seconday_text + 80}/>
                            </IconButton>
                            <View style={{marginLeft:10}}>
                                <IconButton onPress={()=>{}}>
                                    <CopyIcon color={colors.seconday_text + 80}/>
                                </IconButton>
                            </View>
                    </View>
               </View>
            </View>
        </View>
    )
}