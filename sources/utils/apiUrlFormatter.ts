import { BASE_API_URL } from "../constants/apiConstants";

export const urlFormatter= {
    getProducts: (category:string)=>`${BASE_API_URL}/products/`,
    getCategory: ()=>`${BASE_API_URL}/categories/`
}