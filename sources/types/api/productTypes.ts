
export interface image {
    image:string,
    name:string
}

export interface tax {
    value:number,
    name:string
}


export interface productVariant {
    name:string, 
    base_product:number, 
    price:number,
    disponibility:number,
    images:image[],
    total_with_taxes:number,
    taxes:tax[]
}

export interface baseProduct {
    pk:number,
    name:string,
    description:string,
    short_description:string,
    recomendations:number, 
    principal_image:string,
    base_price:number,
    variants: productVariant[]
}

export interface defaultApiResponse<T> {
    status:number,
    data:T,
    statusText:string
}