import axios, { AxiosResponse} from "axios"
import { urlFormatter } from "./apiUrlFormatter"
import { createDeliveryLocaitonType } from "../types/api/deliveryLocation";

const {getProducts,getProducWithCategory, getCategory, createOrder, createPayMethod, createDeliveryLocation} = urlFormatter;

export const getProductList = async (category:string, token:string):Promise<object>=>{
    const url = category === '' ? getProducts() : getProducWithCategory(category)
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
        console.log(error)
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
    const url = createOrder()

}

export const createPayMethodRequest = (token:string, bodyObject:any)=> {
    const url = createPayMethod()
}

export const createDeliveryLocationRequest = async (token:string, bodyObject: createDeliveryLocaitonType)=> {

    const url =  createDeliveryLocation()

    try {
        const response = await axios.post(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            bodyObject
        })
        console.log(response)
        
    } catch (error:any) {
        console.log(error);
        // if(error.response){
        //     const {data, status} = error.response as AxiosResponse;
        //     return {
        //         status,
        //         data: {
        //             count: 0, 
        //             next: null, 
        //             previous: null, 
        //             results: [], 
        //         },
        //         statusText:data.detail
        //     }
        // }
        // else {
        //      return {
        //         status: 500,
        //         data: {
        //             count: 0, 
        //             next: null, 
        //             previous: null, 
        //             results: [], 
        //         },
        //         statusText:'Error inesperado'
        //     }
        // }
        
    }

}

export const updateUser = (token:string) => {
    
}