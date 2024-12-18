import { deliveryConfigurationSchemaType } from "../forms/deliveryFormTypes";

export type createDeliveryLocaitonType = deliveryConfigurationSchemaType & {
    owner:number
};

export interface updateUserInformaiton {
    first_name: string,
    last_name: string,
    email: string,
    genre: string,
    ci: string,
    birthday: string
    token:string
}