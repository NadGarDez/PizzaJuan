import { BASE_API_URL } from "../constants/apiConstants";

export const urlFormatter= {
    getProducts: ()=>`${BASE_API_URL}/products/`,
    getProducWithCategory: (category:string)=>`${BASE_API_URL}/products/${category}/`,
    getCategory: ()=>`${BASE_API_URL}/categories/`
}