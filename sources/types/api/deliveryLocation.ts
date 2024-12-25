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

interface DeliveryLocation {
    description: string;
    name: string;
    owner: number;
    pk: number;
    plus_code: string;
  }
  
  interface Items {
    some: string; // Replace with actual type if known
  }
  
  interface OrderWorker {
    invoice: null | any; // Adjust type based on actual invoice structure
    order_status: {
      code: string;
      name: string;
    };
  }
  
  export interface Order {
    delivery_location: DeliveryLocation;
    items: Items;
    owner: number;
    pk: number;
    worker: OrderWorker;
  }
  

  