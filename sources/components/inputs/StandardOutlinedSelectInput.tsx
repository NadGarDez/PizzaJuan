import React, { Reducer, useReducer } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import RNPickerSelect from 'react-native-picker-select';
import { basicInputState, defaultInputActionTypes, defaultInputStates, inputAction } from "../../constants/inputConstants";

// types 
type localActionPayloadType = {
    value:string,
    error?:string | string[]
}

type actionObjectType = inputAction<localActionPayloadType>;

const styles = StyleSheet.create(
   {
        generalContainer: {
            display: "flex",
            flexDirection:"column",
            marginBottom:8
        },
        selectContainer: {
            width:"100%",
            paddingHorizontal:8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius:5,
            borderStyle: "solid",
            borderWidth:1,
        },
        neutralBorderStyles: {
            borderColor: colors.seconday_text + 90,
        },
        activeBorderStyles: {
            borderColor:colors.principal,
        },
        errorBorderStyles: {
            borderColor:"red",
        },
        placeholderTextStyles: {
            color:colors.seconday_text + 80
        },
        valueStyles: {

        },
        textContainer: {
            marginTop:4,
        },
        textStyles: {
            fontSize:12,
            fontWeight: "200",
            color:"red",
        },
   }
);

const initialState:basicInputState = {
    machineState: defaultInputStates.neutral,
    value:'',
    error:'',
};

type selectItemsType = {
   value: string,
   label:string
}

type props = {
    placeholder:string,
    initialValue?:string,
    data: selectItemsType[],
    onChangeCallback:(text:string)=>Promise<void>,
    inputName:string,
    error: string | string[] | undefined
}

const selectItems:selectItemsType[] = [
    {
        value:'male',
        label:'Masculino'
    },
    {
        value:'female',
        label:'Femenino'
    },
    {
        value:'other',
        label: 'Otre'
    }
]

const reducer: Reducer<basicInputState,actionObjectType> = (state, action)=> {
    const {type, payload} = action;
    switch (type) {
        case defaultInputActionTypes.neutralize : {
            return {
                ...state,
                machineState: defaultInputStates.neutral
            }
        }
        case defaultInputActionTypes.activating : {
            return {
                ...state,
                machineState: defaultInputStates.active
            }
        }
        case defaultInputActionTypes.changing : {
            const value =  !!payload ? payload.value : '';
            return {
                ...state,
                machineState: defaultInputStates.change,
                value:value
            }
        }
        case defaultInputActionTypes.failing : {
            return state
        }
        default: 
            return state
    }
}

const getContainerStyles = (state:basicInputState)=> {
    if(state.machineState  === defaultInputStates.active || state.machineState  === defaultInputStates.change ){
        return {
            ...styles.selectContainer,
            ...styles.activeBorderStyles
        };
    }
    else if (state.machineState  === defaultInputStates.fail) {
        return {
            ...styles.selectContainer,
            ...styles.errorBorderStyles
        };
    }
    return {
        ...styles.selectContainer,
        ...styles.neutralBorderStyles
    };
}

export const StandardOutlinedSelectInput = (props:props):JSX.Element=> {

    const {placeholder, onChangeCallback, initialValue = '', inputName, data } = props;

    const [state, dispatch] = useReducer(reducer,{...initialState, value:initialValue });

    const activate = ()=> dispatch({
        type:defaultInputActionTypes.activating,
    });

    const neutralize = ()=> dispatch({
        type:defaultInputActionTypes.neutralize
    });

    const change = (value:string)=> dispatch({
        type:defaultInputActionTypes.changing,
        payload: {
            value
        }
    });

    const manageOnChange = async (value:any)=> {
        change(value);
        await onChangeCallback(value);
        neutralize();
    }

    return (
        <View style={styles.generalContainer}>
            <Pressable
                onPress={activate}
            >
                <View 
                    style={
                        getContainerStyles(state)
                    }
                >
                    <RNPickerSelect
                        placeholder={{
                            label:placeholder
                        }}
                        value={state.value}
                        useNativeAndroidPickerStyle={false}
                        style={
                            {
                                inputIOS: {
                                    fontSize: 14,
                                    height:40,
                                    width:400,
                                    color: colors.seconday_text + 80
                                },
                                inputAndroid: {
                                    paddingVertical: 8,
                                    height:40,
                                    width:400
                                },
                                placeholder: {
                                    color:colors.seconday_text + 80
                                }
                            }
                        }
                        onValueChange={manageOnChange}
                        items={data}
                    /> 
                </View>
            </Pressable>
        </View>
    )
}