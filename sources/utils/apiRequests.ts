import axios, {RawAxiosRequestHeaders} from "axios"
import { urlFormatter } from "./apiUrlFormatter"

const {getProducts} = urlFormatter;

export const getProductList = async (category:string)=>{
    const url = getProducts(category);
    try {
        const {status, data, headers} = await axios.get(url);
        return {
            status,
            data,
            headers
        };
    } catch (error) {
        return {
            status: 500, 
            message:error
        }
    }
}