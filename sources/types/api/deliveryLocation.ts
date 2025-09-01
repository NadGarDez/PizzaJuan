import { deliveryConfigurationSchemaType } from "../forms/deliveryFormTypes";
import { shoppingCarItemType, tax } from "./productTypes";

export type createDeliveryLocaitonType = deliveryConfigurationSchemaType & {
  owner: number
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
  token: string
}

export interface DeliveryLocation {
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
  updated_at: string;
}

export type OrderItem = {
  variant: {
    name: string;
    price: string;
    disponibility: number;
    images: Array<{
      image: string;
      name: string;
    }>;
    taxes: tax[]; // El tipo es `any[]` porque los impuestos están vacíos en el ejemplo.
    pk: number;
    base_product: {
      pk: number;
      name: string;
      short_description: string;
      recomendations: number;
      principal_image: string;
    }
  };
  amount: number;
}

export interface Order {
  delivery_location: DeliveryLocation;
  order_items: OrderItem[];
  owner: number;
  pk: number;
  worker: OrderWorker;
}

export interface Totals {
  info: Record<'subtotal' | string, number>;
  total: number;
}

export interface ShoppingCartType {
  products: Record<string, shoppingCarItemType>;
  totals: Totals;
}