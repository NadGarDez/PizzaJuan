import { BASE_API_URL } from "../constants/apiConstants";

export const urlFormatter: Record<string,(param:any)=> string> = {
    getProducts: (param)=>`${BASE_API_URL}/products/`,
    getProducWithCategory: (category:string)=>`${BASE_API_URL}/products/${category}/`,
    getCategory: (param)=>`${BASE_API_URL}/categories/`,
    getUserInformationUrl: (param) => `${BASE_API_URL}/user/`,
    createOrder: (param) => `${BASE_API_URL}/order/create/`,
    createDeliveryLocation: ()=>`${BASE_API_URL}/delivery_location/create/`,
    deleteDeliveryLocation: (param:any)=>`${BASE_API_URL}/delivery_location/delete/${param}/`,
    createPayMethod: (param)=>`${BASE_API_URL}/pay_method/create/`,
    deletePayMethod: (param:string)=>`${BASE_API_URL}/pay_method/delete/${param}/`,
    getDeliveryLocations: (param) => `${BASE_API_URL}/delivery_location/list/`,
    getPayMethods: (param) => `${BASE_API_URL}/pay_method/list/`,
    updateUserUrl: (param) => `${BASE_API_URL}/user/save_information/`,
    getOrdersUrl: (params:string) => `${BASE_API_URL}/order/list/${params}/`
}