import React, { Reducer, useEffect, useReducer } from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadow";

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
        height:"100%"
    },
    activeBorderStyles: {
        borderColor:colors.principal,
        ...shadows.principalShadow
    },
    errorBorderStyles: {
        borderColor:"red",
        ...shadows.principalShadow
    },
})

// types and enums

enum actionTypes {
    initialization,
    activate,
    change, 
    fail,
    neutralize
}

enum inputStatus {
    initialCreation ,
    initialEdition,
    active, 
    changing,
    error,
    neutral
}

type state = {
    inputStatus:inputStatus,
    inputValue:string,
    error:string[] | string,
}

type payloadType = {
    currentFormValue?:string,
    error?: string | string[]
}

type formAction = {
    actionType: actionTypes,
    payload: null | payloadType
}

type props = {
    placeholder:string,
    initialValue?:string,
    onChangeCallback:(text:string)=>void,
}

//default form value

const defaultValue:state = {
    inputStatus:inputStatus.initialCreation,
    inputValue:"",
    error: ""
}

// form reducer

const formReducer: Reducer<state,formAction> = (state, action)=> {

    const {actionType, payload } = action;

    let newState = {...state};

    if (payload ==  null ) return  newState;

    switch (actionType) {

        case actionTypes.initialization : 
            const inputValue = !!payload.currentFormValue ? payload.currentFormValue : "";
            newState =  {
                ...state,
                inputStatus: inputStatus.initialEdition,
                inputValue: inputValue,
            }
            break;

        case actionTypes.activate :
            newState = {
                ...state,
                inputStatus:inputStatus.active,
                error:""
            };
            break;

        case actionTypes.change :
            const {currentFormValue = ""} = payload;
            newState =  {
                ...state,
                inputStatus:inputStatus.changing,
                inputValue:currentFormValue
            }
            break;

        case actionTypes.fail : 
            const {error = ""} = payload;
            newState = {
                ...state,
                inputStatus:inputStatus.error,
                error:error
            }
            break;
            
        case actionTypes.neutralize :
            newState = {
                ...state,
                inputStatus:inputStatus.neutral
            };
            break;
    }

    return newState;

}

const getContainerStyles = (state:state)=> {
    if(state.inputStatus  === inputStatus.active || state.inputStatus  === inputStatus.changing ){
        return {
            ...styles.container,
            ...styles.activeBorderStyles
        };
    }
    else if (state.inputStatus  === inputStatus.error) {
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

const getErrorStrings = (state:state) => {
    const {error = ""} = state;

    if(Array.isArray(error)){
        return error;
    } 
    else {
        return [error]
    }
}

const shouldRenderError = (state:state):boolean=> {
    const {error = ""} = state;
    return (Array.isArray(error) || error.length > 0)
}   

// simulation 

const validate = (value:string)=> (value.length > 10);


export const StandardOutlinedInput = ({placeholder, initialValue="", onChangeCallback}:props) => {

    const [state, dispatch] = useReducer(formReducer, defaultValue);

    const containerStyles = getContainerStyles(state);

    useEffect(
        ()=> {
            if(initialValue.length > 0) dispatch(
                {
                    actionType:actionTypes.initialization,
                    payload: {}
                }
            );
        },
        [initialValue]
    );

    // simulate error
    useEffect(
        ()=> {
            if(initialValue!== state.inputValue){ // provitional
                if(validate(state.inputValue)) dispatch({
                    actionType:actionTypes.fail,
                    payload:{
                        error:[
                            "El nombre tiene mas de diez caracterez",
                            "El culo ya no le aprieta",
                            "Tu marido te monta cacho"
                        ]
                    }
                }) 
                else {
                    dispatch({
                        actionType:actionTypes.activate,
                        payload:{}
                    }) 
                }
            }
        },
        [state.inputValue, initialValue]
    )

    const onFocusCallback = ()=> {
        dispatch({
            actionType:actionTypes.activate,
            payload:{}
        })
    }

    const onChange = (e:NativeSyntheticEvent<TextInputChangeEventData>)=> {
        const inputValue = e.nativeEvent.text;
        dispatch(
            {
                actionType:actionTypes.change,
                payload: {
                    currentFormValue:inputValue
                }
            }
        )
    }

    const onBlur = ()=> {
        dispatch(
            {
                actionType:actionTypes.neutralize,
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
                    value={state.inputValue}
                    autoFocus={false}
                />
            </View>
            {
                !!shouldRenderError(state) ? 
                    getErrorStrings(state).map(
                        item => (
                            <View style={styles.textContainer}>

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