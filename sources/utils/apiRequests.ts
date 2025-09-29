import axios, { AxiosResponse } from "axios"
import { urlFormatter } from "./apiUrlFormatter"
import { createDeliveryLocaitonType, Order, userDataRequestInterface } from "../types/api/deliveryLocation";
import { defaultApiResponse, ListResponse } from "../types/api/defaultTypes";

const { getProducWithCategory, getCategory, createOrder, createPayMethod, createDeliveryLocation, deletePayMethod, deleteDeliveryLocation, updateUserUrl, getUserInformationUrl, getOrdersUrl } = urlFormatter;


type FilterPayload = {
    category?: string;
    q?: string;
};
export const getProductList = async (filterParams: FilterPayload, token: string): Promise<object> => {
    const url = getProducWithCategory(filterParams);
    try {
        const { status, data, statusText } = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: [],
                },
                statusText: data.detail
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
                statusText: 'Error inesperado'
            }
        }
    }
}

export const getCategoryList = async (token: string): Promise<object> => {
    const url = getCategory(null);
    try {
        const { status, data, statusText } = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: [],
                },
                statusText: data.detail
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
                statusText: 'Error inesperado'
            }
        }

    }
}

export const getResourceList = async (token: string, resource: string): Promise<object> => {
    const url = urlFormatter[resource](null);
    try {
        const { status, data, statusText } = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: [],
                },
                statusText: data.detail
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
                statusText: 'Error inesperado'
            }
        }
    }
}

export const getOrderInformation = async (params: Record<'token' | 'filter', string>): Promise<defaultApiResponse<ListResponse<Order>>> => {

    const { token, filter } = params

    const url = getOrdersUrl(filter);
    try {
        const { status, data, statusText } = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: [],
                },
                statusText: data.detail
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
                statusText: 'Error inesperado'
            }
        }
    }
}

export const getUserInformation = async (token: string): Promise<defaultApiResponse<userDataRequestInterface | null>> => {
    const url = getUserInformationUrl(null);
    try {
        const { status, data, statusText } = await axios.get<userDataRequestInterface>(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }
    }
}

export const getNext = async (token: string, url: string): Promise<object> => {
    try {
        const { status, data, statusText } = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: [],
                },
                statusText: data.detail
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
                statusText: 'Error inesperado'
            }
        }

    }
}

export const loadMoreRequest = async (params: Record<'token' | 'url', string>): Promise<defaultApiResponse<ListResponse<object>>> => {
    const { token, url } = params;

    try {
        const { status, data, statusText } = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return {
            status,
            data,
            statusText
        };

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: [],
                },
                statusText: data.detail
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
                statusText: 'Error inesperado'
            }
        }

    }
}

export const createPayMethodRequest = async (params: Record<'token' | 'bodyObject', any>) => {

    const url = createPayMethod(null);
    const { bodyObject, token } = params;

    try {
        const { status, statusText, data } = await axios.post(url,
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

    } catch (error: any) {
        if (error.response) {
            const { data, status, } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }
}

export const deletePayMethodRequest = async (params: Record<'token' | 'item', string>) => {
    const { token, item } = params;
    const url = deletePayMethod(item);

    try {
        const { status, statusText, data } = await axios.delete(url,
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

    } catch (error: any) {
        if (error.response) {
            const { data, status, } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }
}

export const deleteDeliveryLocationRequest = async (params: Record<'token' | 'item', string>) => {
    const { token, item } = params;
    const url = deleteDeliveryLocation(item);

    try {
        const { status, statusText, data } = await axios.delete(url,
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

    } catch (error: any) {
        if (error.response) {
            const { data, status, } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }
}

export const createDeliveryLocationRequest = async (params: Record<'token' | 'bodyObject', any>): Promise<defaultApiResponse<object | null>> => {

    const url = createDeliveryLocation(null)
    const { bodyObject, token } = params;

    try {
        const { status, statusText, data } = await axios.post(url,
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

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }

}

export const createOrderRequest = async (params: Record<'token' | 'bodyObject', any>): Promise<object | null> => {
    const { bodyObject, token } = params
    const url = createOrder(null);
    try {
        const { status, statusText, data } = await axios.post(url,
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

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }

}

export const updateUser = async (params: Record<string | 'token', any>) => {
    const { token, ...rest } = params

    const url = updateUserUrl(null);
    try {
        const { status, statusText, data } = await axios.put(url,
            {
                ...rest
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

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }

}

export const updateProductRecommendation = async (pk: number, token: string): Promise<defaultApiResponse<object | null>> => {
    const url = urlFormatter.recommendProduct(pk);
    try {
        const { status, statusText, data } = await axios.post(url, {},
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

    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response as AxiosResponse;
            return {
                status,
                data: null,
                statusText: data.detail
            }
        }
        else {
            return {
                status: 500,
                data: null,
                statusText: 'Error inesperado'
            }
        }

    }

}