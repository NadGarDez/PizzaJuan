import { BASE_API_URL } from "../constants/apiConstants";

export const urlFormatter: Record<string,(param:any)=> string> = {
    getProducts: (param)=>`${BASE_API_URL}/products/`,
    getProducWithCategory: (category:string)=>`${BASE_API_URL}/products/${category}/`,
    getCategory: (param)=>`${BASE_API_URL}/categories/`,
    createOrder: (param) => `${BASE_API_URL}/order/create/`,
    createDeliveryLocation: ()=>`${BASE_API_URL}/delivery_location/create/`,
    createPayMethod: (param)=>`${BASE_API_URL}/pay_method/create/`,
    getDeliveryLocations: (param) => `${BASE_API_URL}/delivery_location/list/`

}