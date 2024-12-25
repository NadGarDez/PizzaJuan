import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ReloadIcon } from '../icons/ReloadIcon';
import { Dropdown } from 'react-native-element-dropdown';



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    tabBarStyle: {
        backgroundColor: colors.white_card ,
        height: 70,
        paddingHorizontal: 16,
        borderTopEndRadius:12,
        borderTopLeftRadius:12,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    bottomLine: {
        height:2,
        borderStyle: "solid",
        borderBottomColor: "transparent",
        borderLeftColor:"transparent",
        borderRightColor: "transparent",
        borderTopColor: colors.seconday_text + "30",
        borderWidth: 1,
    },
    selectContainer: {
       flexDirection: 'row',
    },
    dropdown: {
        height: 50,
        borderColor: colors.seconday_text + "30",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '100%'
        
    },
    placeholderStyle: {
        fontSize:20,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    selectedTextStyle: {
        fontSize:20,
        fontWeight: "200",
        color:colors.seconday_text,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

const data = [
    { label: 'Todas las ordenes', value: '1' },
    { label: 'Ordenes creadas', value: '2' },
    { label: 'Ordenes Canceladas', value: '3' },
    { label: 'Ordenes Entregadas', value: '4' },
    { label: 'Ordenes Rechazadas', value: '5' },
  ];


interface props {
    onChange: (code: string) => void,
    onReload: () => void
}

export const OrderFilterSelect = (props: props):JSX.Element => {

    const {onChange, onReload} = props;

    return (
        <View style={styles.container}>

            <View style={styles.tabBarStyle}>
                <View style={styles.selectContainer}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Filtros'}
                        searchPlaceholder="Search..."
                        value={
                            { label: 'Item 1', value: '1' }
                        }
                        onChange={item => {
                            onChange(item.value)
                        }}
                    />
                </View>
                
            </View>
            <View style={styles.bottomLine}/>
        </View>

    )
}