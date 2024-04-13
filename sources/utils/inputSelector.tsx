import React from "react";
import { inputTypes } from "../constants/form/formConstants";
import { StandardOutlinedInput } from "../components/inputs/StandardOutlinedInput";
import { StandardOutlinedDatePicker } from "../components/inputs/StandardOutlinedDatePicker";
import { StandardOutlinedSelectInput } from "../components/inputs/StandardOutlinedSelectInput";

type inputSelectorType = {
    [key in inputTypes]: (props:any)=>JSX.Element
}

export const inputSelector:inputSelectorType = {
    TEXT: (props)=><StandardOutlinedInput {...props} />,
    SELECT: (props)=><StandardOutlinedSelectInput {...props}/>,
    LOCATION: ()=><></>,
    DATE: (props)=><StandardOutlinedDatePicker {...props}/>,
}