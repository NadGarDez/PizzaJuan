import { useReducer } from "react";
import { defaultApiResponse, ListResponse } from "../types/api/defaultTypes"
import { loadMoreRequest } from "../utils/apiRequests";

interface requestStatus<T>  {
    reducerStatus: 'INITIAL' | 'LOADING' | 'SUCCESSED' | 'ERROR',
    responseObject: defaultApiResponse<ListResponse<T>> | null,
} 

interface methods {
    refetch: (params:Record<string,any>)=>Promise<any>
    clear: () => void,
    loadMore: (params:Record<string,any>) => Promise<any>
}


interface action {
    name: string,
    payload: any
}


function reducer<T extends object>(state: requestStatus<T>, action:action ): requestStatus<T> {
    switch (action.name) {
        case 'startRequest': {
            return {
                ...state,
                reducerStatus: 'LOADING'
            }
        }
        case 'finishRequestSuccessfully': {
            return {
                ...state,
                reducerStatus: 'SUCCESSED',
                responseObject: action.payload
            }
        }
        case 'finishRequestWithError': {
            return {
                ...state,
                reducerStatus: 'ERROR',
                responseObject: action.payload,
            }
        }

        case 'finishLoadMoreRequestSuccessfully': {
            if (state.responseObject !== null) {

                const payloadCopy = {...action.payload} as defaultApiResponse<ListResponse<T>> ;

                return {
                    ...state,
                    reducerStatus: 'SUCCESSED',
                    responseObject: {
                       ...payloadCopy,
                       data: {
                        ...payloadCopy.data,
                        results: [
                            ...state.responseObject.data.results,
                            ...payloadCopy.data.results,
                        ]
                       }
                    }
                }
            }
            return state
        }

        case 'finishLoadMoreRequestWithError': {
            return {
                ...state,
                reducerStatus: 'ERROR',
                responseObject: action.payload
            }
        }


        case 'clear': {
            return {
                reducerStatus: 'INITIAL',
                responseObject: null,
            }
        }
            
        default:
            return state
    }
}


export const useListLocalRequest = <T extends object>(request: (params:Record<string,any>)=>Promise<any>):requestStatus<T> & methods => {
    
    const [state, dispatch] = useReducer(reducer<T>, {
        reducerStatus: 'INITIAL',
        responseObject:null,
    })

    const refetch = async (params:Record<string,any>) => {
        dispatch({
            name: 'startRequest',
            payload: undefined
        })
        try {
            const result = await request(params);
            if (result.status > 299) {
                dispatch(
                    {
                        name: 'finishRequestWithError',
                        payload: result
                    }
                )
            } else {
                dispatch(
                    {
                        name: 'finishRequestSuccessfully',
                        payload: result
                    }
                )
            }
            
        } catch (e) {
            dispatch(
                {
                    name: 'finishRequestWithError',
                    payload: 'Unexpected error'
                }
            )
        }
    }

    const loadMore =  async (params:Record<string,any>) => {
        dispatch({
            name: 'startRequest',
            payload: undefined
        })
        try {
            const result = await loadMoreRequest(params);
            if (result.status > 299) {
                dispatch(
                    {
                        name: 'finishLoadMoreRequestWithError',
                        payload: result
                    }
                )
            } else {
                dispatch(
                    {
                        name: 'finishLoadMoreRequestSuccessfully',
                        payload: result
                    }
                )
            }
            
        } catch (e) {
            dispatch(
                {
                    name: 'finishLoadMoreRequestWithError',
                    payload: 'Unexpected error'
                }
            )
        }
    } 

    const clear =() => {
        dispatch(
            {
                name: 'clear',
                payload: undefined
            }
        )
    }
    
   return {
        ...state,
        refetch,
        clear,
        loadMore
   };
}