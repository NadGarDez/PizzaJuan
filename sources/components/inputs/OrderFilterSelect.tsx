import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';
import { Dropdown } from 'react-native-element-dropdown';
import { ReloadIcon } from '../icons/ReloadIcon';



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
        display: 'flex',
       flexDirection: 'row',
    },
    dropdown: {
        height: 50,
        borderColor: colors.seconday_text + "30",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        flex: 1,
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
    reloadContainer: {
        height: 50,
        marginLeft: 4,
        borderColor: colors.seconday_text + "30",
        borderWidth: 1,
        borderRadius: 8,
        width: 50
    },
    reloadButtonStyles: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    }

});

const data = [
    { label: 'Todas las ordenes', value: 'all' },
    { label: 'Ordenes Creadas', value: 'created' },
    { label: 'Ordenes Canceladas', value: 'canceled' },
    { label: 'Ordenes Entregadas', value: 'finished' },
    { label: 'Ordenes Rechazadas', value: 'rejected' },
    { label: 'Ordenes Confirmadas', value: 'confirmed' },

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
                        iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Filtros'}
                        searchPlaceholder="Search..."
                        onChange={item => {
                            onChange(item.value)
                        }}
                    />
                    <View style={styles.reloadContainer}>
                        <TouchableOpacity style={styles.reloadButtonStyles} onPress={onReload}>
                            <ReloadIcon  color={colors.seconday_text + '60'} />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <View style={styles.bottomLine}/>
        </View>

    )
}