import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";

// state type
type sessionStateType = {
    sessionToken: null | string,
    sub:null|string,
    email?:string | null,
    nickname?:string|null,
    givenName?:string|null,
    picture?:string|null,
    familyName:null | string
}

type objectSessionType ={
    sub:null | string,
    email:null | string,
    nickname:null | string,
    givenName:null | string,
    picture:null | string,
    familyName:null | string
}

//initial state
const initialState: sessionStateType =  {
    sessionToken:null,
    sub:null,
    email:null,
    nickname:null,
    givenName:null,
    picture:null,
    familyName:null
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
            setSessionObject:(state, action: PayloadAction<objectSessionType>)=>{
                state.sub=action.payload.sub
                state.email=action.payload.email
                state.nickname=action.payload.nickname
                state.givenName=action.payload.givenName
                state.picture=action.payload.picture
                state.familyName = action.payload.familyName
            },
            resetSession: state => {
                state.sub=null;
                state.email=null;
                state.nickname=null;
                state.givenName=null;
                state.picture=null;
                state.sessionToken=null;
            }
        },
    }
);

//actions export

export const {setSession, resetSession, setSessionObject} = sessionSlice.actions;

//selector export

export const sessionTokenSelector = (state:RootState) => state.session.sessionToken;
export const sessionObjectSelector = (state:RootState) => state.session;

// reducer export
export default sessionSlice.reducer;