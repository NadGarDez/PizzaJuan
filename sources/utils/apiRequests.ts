import axios, { AxiosResponse} from "axios"
import { urlFormatter } from "./apiUrlFormatter"

const {getProducts, getCategory} = urlFormatter;

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
        if(error.response){
            const {data, status} = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0, 
                    next: null, 
                    previous: null, 
                    results: [], 
                },
                statusText:data.detail
            }
        }
        else {
             return {
                status: 500,
                data: {
                    count: 0, 
                    next: null, 
                    previous: null, 
                    results: [], 
                },
                statusText:'Error inesperado'
            }
        }
    }
}

export const getCategoryList = async (token:string): Promise<object>=> {
    const url = getCategory();
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
        if(error.response){
            const {data, status} = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0, 
                    next: null, 
                    previous: null, 
                    results: [], 
                },
                statusText:data.detail
            }
        }
        else {
             return {
                status: 500,
                data: {
                    count: 0, 
                    next: null, 
                    previous: null, 
                    results: [], 
                },
                statusText:'Error inesperado'
            }
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