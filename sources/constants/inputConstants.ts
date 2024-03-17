export enum defaultInputStates {
    neutral,
    active,
    change,
    fail
}

export enum defaultInputActionTypes {
    neutralize,
    activating,
    changing,
    failing
}

export type inputAction<T> = {
    type: defaultInputActionTypes,
    payload?:T
}

export type basicInputState = {
    machineState: defaultInputStates,
    value: string,
    error: string[] | string,
}