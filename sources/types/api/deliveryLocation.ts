import { deliveryConfigurationSchemaType } from "../forms/deliveryFormTypes";

export type createDeliveryLocaitonType = deliveryConfigurationSchemaType & {
    owner:number
};


export interface userDataRequestInterface {
    aditional_user_info: {
        birthdate?: string,
        ci?: string, 
        genre?: string
    }, 
    user: {
        email: string, 
        first_name: string, 
        last_name: string
    }
}
export interface updateUserInformaiton {
    first_name: string,
    last_name: string,
    email: string,
    genre: string,
    ci: string,
    birthday: string
    token:string
}