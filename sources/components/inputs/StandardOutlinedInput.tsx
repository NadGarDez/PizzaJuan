import React, { Reducer, useEffect, useReducer } from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { basicInputState, defaultInputActionTypes, defaultInputStates, inputAction } from "../../constants/inputConstants";
import { getErrorStrings, shouldRenderError } from "../../utils/inputUtils";

const styles = StyleSheet.create({
    generalContainer: {
        display: "flex",
        flexDirection:"column",
        marginBottom:8
    },
    container: {
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
    textContainer: {
        marginTop:4,
    },
    textStyles: {
        fontSize:12,
        fontWeight: "200",
        color:"red",
    },
    neutralBorderStyles: {
        borderColor: colors.seconday_text + 90,
    },
    textInput: {
        width: "100%",
        height:"100%",
        color: colors.seconday_text,
    },
    activeBorderStyles: {
        borderColor:colors.principal,
    },
    errorBorderStyles: {
        borderColor:"red",
    },
});

// local types

type payloadType = {
    value?:string,
    error?: string | string[]
}

type formAction = inputAction<payloadType>;

type props = {
    placeholder:string,
    initialValue?:string,
    onChangeCallback:(text:string)=>void,
    inputName:string
}

//default form value

const defaultValue:basicInputState = {
    machineState:defaultInputStates.neutral,
    value:'',
    error: ''
}

// form reducer

const formReducer: Reducer<basicInputState,formAction> = (state, action)=> {

    const {type, payload } = action;

    let newState = {...state};

    if (payload ==  null ) return  newState;

    switch (type) {
        case defaultInputActionTypes.neutralize : {
            return {
                ...state,
                machineState:defaultInputStates.neutral
            };;
        }
        case defaultInputActionTypes.activating : {
            return {
                ...state,
                machineState:defaultInputStates.active
            };
        }
        case defaultInputActionTypes.changing : {
            const {value = ''} =  payload;
            return {
                ...state,
                value,
                machineState: defaultInputStates.change
            }
        }
        case defaultInputActionTypes.failing : {
            const {error = ""} = payload;
            return {
                ...state,
                error
            }
        }
        default: 
            return state
    }
}

const getContainerStyles = (state:basicInputState)=> {
    if( state.machineState === defaultInputStates.active || state.machineState  === defaultInputStates.change ){
        return {
            ...styles.container,
            ...styles.activeBorderStyles
        };
    }
    else if (state.machineState  === defaultInputStates.fail) {
        return {
            ...styles.container,
            ...styles.errorBorderStyles
        };
    }
    return {
        ...styles.container,
        ...styles.neutralBorderStyles
    };
};
 

// simulation 

export const StandardOutlinedInput = ({placeholder, initialValue="", onChangeCallback, inputName}:props) => {

    const [state, dispatch] = useReducer(formReducer, {...defaultValue, value:initialValue});

    const containerStyles = getContainerStyles(state);

    const onFocusCallback = ()=> {
        dispatch({
            type:defaultInputActionTypes.activating,
            payload:{}
        })
    }

    const onChange = (e:NativeSyntheticEvent<TextInputChangeEventData>)=> {
        const inputValue = e.nativeEvent.text;
        onChangeCallback(inputValue);
        dispatch(
            {
                type:defaultInputActionTypes.changing,
                payload: {
                    value:inputValue
                }
            }
        )
    }

    const onBlur = ()=> {
        dispatch(
            {
                type:defaultInputActionTypes.neutralize,
                payload: {}
            }
        )
    }

    return (
        <View style={styles.generalContainer}>
            <View style={containerStyles}>
                <TextInput 
                    style={styles.textInput}
                    placeholder={placeholder}
                    onFocus={onFocusCallback}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={state.value}
                    autoFocus={false}
                    placeholderTextColor={colors.seconday_text + 80} 
                />
            </View>
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
        </View>
    )
}