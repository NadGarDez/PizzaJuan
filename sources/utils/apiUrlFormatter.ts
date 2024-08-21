import { BASE_API_URL } from "../constants/apiConstants";

export const urlFormatter= {
    getProducts: ()=>`${BASE_API_URL}/products/`,
    getProducWithCategory: (category:string)=>`${BASE_API_URL}/products/${category}/`,
    getCategory: ()=>`${BASE_API_URL}/categories/`,
    createOrder: () => `${BASE_API_URL}/order/create/`,
    createDeliveryLocation: ()=>`${BASE_API_URL}/delivery_location/create/`,
    createPayMethod: ()=>`${BASE_API_URL}/pay_method/create/`

}