import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxTypes";

// state type
type sessionStateType = {
    reducerStatus: 'INITIAL' | 'LOADING' | 'N_LOADING' | 'SUCCESSED' | 'ERROR',
    sessionObject: {
        sessionToken: null | string,
        sub:null|string,
        email:string | null,
        firstName: string | null,
        lastName: string | null,
        birthDate: string | null,
        genre: string | null,
        ci:  string | null
    }
    error: string | null
}

type objectSessionType ={
    email:string | null,
    firstName: string | null,
    lastName: string | null,
    birthDate: string | null,
    genre: string | null,
    ci:  string | null
}

//initial state
const initialState: sessionStateType =  {
    reducerStatus: 'INITIAL',
    sessionObject: {
        sessionToken:null,
        sub:null,
        email:null,
        firstName: null,
        lastName: null,
        birthDate: null,
        genre: 'male',
        ci: null
    },
    error: null
};


//slice
const sessionSlice = createSlice(
    {
        name : "session",
        initialState: initialState,
        reducers : {
            startRequest: (state) => {
                state.reducerStatus = 'LOADING'
            },
            finishRequestSuccessfully:(state, action: PayloadAction<objectSessionType>)=>{
                console.log(action.payload, 'super payload');
                state.reducerStatus = 'SUCCESSED'
                state.sessionObject.birthDate = action.payload.birthDate;
                state.sessionObject.email = action.payload.email;
                state.sessionObject.genre = action.payload.genre;
                state.sessionObject.firstName = action.payload.firstName;
                state.sessionObject.lastName = action.payload.lastName;
                state.sessionObject.ci = action.payload.ci;
            },

            finishRequestWithError: (state, action: PayloadAction<string>) => {
                state.reducerStatus = 'ERROR',
                state.error = action.payload
            },
            setSession: (state, action: PayloadAction<string>) => {
                state.sessionObject.sessionToken = action.payload
            },

            setSessionObject:(state, action: PayloadAction<objectSessionType>)=>{
                state.sessionObject.email=action.payload.email
                state.sessionObject.birthDate = action.payload.birthDate
                state.sessionObject.firstName = action.payload.firstName
                state.sessionObject.lastName = action.payload.lastName
                state.sessionObject.genre = action.payload.genre
            },
            resetSession: state => {
                state.sessionObject.sub= null
                state.sessionObject.email= null
                state.sessionObject.birthDate = null
                state.sessionObject.firstName = null
                state.sessionObject.lastName = null
                state.sessionObject.genre = null
            }
        },
    }
);

//actions export

export const {setSession, resetSession, setSessionObject, startRequest, finishRequestSuccessfully, finishRequestWithError} = sessionSlice.actions;

//selector export

export const sessionTokenSelector = (state:RootState): string | null => state.session.sessionObject.sessionToken;
export const sessionObjectSelector = (state:RootState) => state.session.sessionObject;

// reducer export
export default sessionSlice.reducer;