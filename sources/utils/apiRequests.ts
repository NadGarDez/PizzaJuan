import axios, {AxiosError, RawAxiosRequestHeaders} from "axios"
import { urlFormatter } from "./apiUrlFormatter"
import { baseProduct } from "../types/api/productTypes";

const {getProducts} = urlFormatter;

export const getProductList = async (category:string, token:string):Promise<object>=>{
    const url = getProducts(category);
    try {
        const {status, data, statusText} = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };
        
    } catch (error:any) {
        const {status = 500} = error.toJSON() as object
        return {
            status: status, 
            data: {
                count: 0, 
                next: null, 
                previous: null, 
                results: [], 
            },
            statusText:error.message
        }
    }
}

export const getProductList2 = async (category:string, token:string):Promise<object>=>{
    const url = getProducts(category);
    return await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}