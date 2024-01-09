import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";

// state type
type sessionStateType = {
    sessionToken: null | string
}

//initial state
const initialState: sessionStateType =  {
    sessionToken:"123"
};

//slice
const sessionSlice = createSlice(
    {
        name : "session",
        initialState: initialState,
        reducers : {
            setSession: (state, action: PayloadAction<string>) => {
                state.sessionToken = action.payload
            },
            resetSession: state => {
                state.sessionToken = null
            }
        },
    }
);

//actions export

export const {setSession, resetSession} = sessionSlice.actions;

//selector export

export const sessionTokenSelector = (state:RootState) => state.session.sessionToken;

// reducer export
export default sessionSlice.reducer;