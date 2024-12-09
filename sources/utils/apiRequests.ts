import axios, { AxiosResponse} from "axios"
import { urlFormatter } from "./apiUrlFormatter"
import { createDeliveryLocaitonType } from "../types/api/deliveryLocation";
import { defaultApiResponse } from "../types/api/defaultTypes";

const {getProducts,getProducWithCategory, getCategory, createOrder, createPayMethod, createDeliveryLocation} = urlFormatter;

export const getProductList = async (category:string, token:string):Promise<object>=>{
    const url = category === '' ? getProducts(null) : getProducWithCategory(category)
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
    const url = getCategory(null);
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

export const getResourceList = async (token:string, resource: string): Promise<object>=> {
    const url = urlFormatter[resource](null);
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

export const getNext = async (token:string, url:string):Promise<object> => {
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

export const createOrderRequest = (token:string, bodyObject:any)=>{
    const url = createOrder(null)

}

export const createPayMethodRequest = async (token:string, bodyObject:any)=> {
    const url = createPayMethod(null);
    try {
        const {status, statusText, data} = await axios.post(url, 
            {
                ...bodyObject
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            
            }
        )
        return {
            status, 
            data, 
            statusText
        }
        
    } catch (error:any) {
        if(error.response){
            const {data, status,} = error.response as AxiosResponse;
            console.log(data)
            return {
                status,
                data: null,
                statusText:data.detail
            }
        }
        else {
             return {
                status: 500,
                data: null,
                statusText:'Error inesperado'
            }
        }
        
    }
}

export const createDeliveryLocationRequest = async (token:string, bodyObject: createDeliveryLocaitonType): Promise<defaultApiResponse< object | null>> => {
    const url =  createDeliveryLocation(null)
    try {
        const {status, statusText, data} = await axios.post(url, 
            {
                ...bodyObject
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            
            }
        )
        return {
            status, 
            data, 
            statusText
        }
        
    } catch (error:any) {
        if(error.response){
            const {data, status} = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText:data.detail
            }
        }
        else {
             return {
                status: 500,
                data: null,
                statusText:'Error inesperado'
            }
        }
        
    }

}

export const updateUser = (token:string) => {
    
}