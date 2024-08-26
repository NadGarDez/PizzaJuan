import { basicInputState } from "../constants/inputConstants";

export const getErrorStrings = (state:basicInputState):string[]=> {
    const {error = ""} = state;

    if(Array.isArray(error)){
        return error;
    } 
    else {
        return [error]
    }
}

export const shouldRenderError = (state:basicInputState):boolean=> {
    const {error = "", machineState } = state;
    return (Array.isArray(error) || error.length > 0)  && machineState === 3
}  