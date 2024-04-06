import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";
import { ModalFormNames } from "../constants/userConfigurationConstants";

// this state should be util for almost every form in the app, all form screen in the projecto should use this pattern
// should be convinient find a abstract shape that fit to all form implementation, 

interface modalFormState {
    visible: boolean,
    name:  ModalFormNames,
    valid: boolean,
}


const defaultState: modalFormState = {
    visible:false,
    name: ModalFormNames.DELIVERY_CONFIGURATION,
    valid:false
} 

/*

    posible status :

        hidden-notconfigured
        hidden-configured
        active-invalid
        active-valid

*/

const modalFormSlice = createSlice(
    {
        name: 'modalForm',
        initialState: defaultState,
        reducers: {
            hide: (state)=>{
                state.visible = false;
            },
            configure: (state, action: PayloadAction<ModalFormNames>)=> {
                state.name = action.payload;
            },
            activateWithoutValid: (state)=>{
                state.visible = true;
                state.valid = false;
            },
            activateWithValid: (state)=>{
                state.visible = true;
                state.valid = true;
            }
        }
    }
)

// actions
export const {hide, configure, activateWithValid, activateWithoutValid } = modalFormSlice.actions

//selector export

export const modalFormSelector = (state:RootState) => state.modalForm;

// reducer export
export default modalFormSlice.reducer;