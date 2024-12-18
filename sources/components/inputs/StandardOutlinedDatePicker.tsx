import React, { Reducer, useReducer } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { basicInputState, defaultInputActionTypes, defaultInputStates, inputAction } from "../../constants/inputConstants";
import DatePicker from "react-native-date-picker";
import { getErrorStrings, shouldRenderError } from "../../utils/inputUtils";

// types 
type localActionPayloadType = {
    value:string,
    error?:string | string[]
}

type actionObjectType = inputAction<localActionPayloadType>;

type props = {
    placeholder:string,
    initialValue?:string,
    onChangeCallback:(text:string)=>void,
    inputName:string
}

// constants
const styles = StyleSheet.create({
    generalContainer: {
        display: "flex",
        flexDirection:"column",
        marginBottom:8
    },
    dateContainer: {
        width:"100%",
        paddingHorizontal:8,
        height:40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius:5,
        borderStyle: "solid",
        borderWidth:1
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
});

const initialState:basicInputState = {
    machineState: defaultInputStates.neutral,
    value:'',
    error:''
};


//util functions 

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
            ...styles.dateContainer,
            ...styles.activeBorderStyles
        };
    }
    else if (state.machineState  === defaultInputStates.fail) {
        return {
            ...styles.dateContainer,
            ...styles.errorBorderStyles
        };
    }
    return {
        ...styles.dateContainer,
        ...styles.neutralBorderStyles
    };
};

const getDateFromString = (string:string) => string.length < 1 ? new Date() : new Date(string);

export const StandardOutlinedDatePicker = (props:props):JSX.Element=> {

    const {placeholder, onChangeCallback, initialValue = '', inputName, } = props;

    const [state, dispatch] = useReducer(reducer,{...initialState, value:initialValue });

    const {value, machineState } = state;

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

    const manageDate = (date:Date)=> {
        const value = date.toISOString().split('T')[0];
        change(value);
        onChangeCallback(value);
        neutralize();
    }

    return (
        <View style={styles.generalContainer}>
            <Pressable
                onPress={
                    activate
                }
            >
                <View 
                    style={
                        getContainerStyles(state)
                    }
                >
                    {
                        state.value === '' ? (
                            <Text style={styles.placeholderTextStyles}>{placeholder}</Text>
                        ): (
                            <Text style={styles.placeholderTextStyles}>{state.value}</Text>
                        )
                    }
                   
                </View>
            </Pressable>
            {
                !!shouldRenderError(state) ? 
                    getErrorStrings(state).map(
                        (item, index) => (
                            <View style={styles.textContainer} key={`error-${index}-input-${inputName}`}>

                                <Text style={styles.textStyles}>
                                    {item}
                                </Text>
                            </View>

                        )
                    ):null
            }
            <DatePicker 
                title={inputName}
                mode="date"
                androidVariant="iosClone"
                modal
                open={machineState === defaultInputStates.active}
                date={getDateFromString(value)}
                onConfirm={manageDate}
                onCancel={neutralize}
            
            />
        </View>
    )
}