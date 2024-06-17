import axios, {RawAxiosRequestHeaders} from "axios"
import { urlFormatter } from "./apiUrlFormatter"

const {getProducts} = urlFormatter;

export const getProductList = async (category:string, token:string)=>{
    const url = getProducts(category);
    try {
        const {status, data, headers, statusText} = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            headers,
            statusText
        };
    } catch (error) {
        return {
            status: 500, 
            message:error
        }
    }
}