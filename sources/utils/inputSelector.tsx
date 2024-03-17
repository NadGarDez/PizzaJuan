import React from "react";
import { inputTypes } from "../constants/formConstants";
import { StandardOutlinedInput } from "../components/inputs/StandardOutlinedInput";
import { StandardOutlinedDatePicker } from "../components/inputs/StandardOutlinedDatePicker";

type inputSelectorType = {
    [key in inputTypes]: (props:any)=>JSX.Element
}

export const inputSelector:inputSelectorType = {
    TEXT: (props)=><StandardOutlinedInput {...props} />,
    SELECT: ()=><></>,
    LOCATION: ()=><></>,
    DATE: (props)=><StandardOutlinedDatePicker {...props}/>,
}