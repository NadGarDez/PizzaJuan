import { deliveryConfigurationSchemaType } from "../forms/deliveryFormTypes";

export type createDeliveryLocaitonType = deliveryConfigurationSchemaType & {
    owner:number
};