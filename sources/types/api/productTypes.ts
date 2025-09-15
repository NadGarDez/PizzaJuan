
export interface image {
    image:string,
    name:string
}

export interface tax {
    value:number,
    name:string
}

export type categorires = 'Pizza' | 'Bebidas' | 'Snacks' | 'Acompañantes' | 'default';

export interface productVariant {
    name:string, 
    base_product:number, 
    price:number,
    disponibility:number,
    images:image[],
    taxes:tax[],
    pk:number
}

export interface baseProduct {
    pk:number,
    name:string,
    description:string,
    short_description:string,
    recomendations_count:number, 
    is_recommended_by_user: boolean
    principal_image:string,
    base_price:number,
    variants: productVariant[],
    category: {
        pk:number,
        name:categorires
    }
}

export type shoppingCarItemType =  {
    pk:number,
    name:string,
    short_description:string,
    recomendations_count:number, 
    principal_image:string,
    base_price:number,
    variant: Omit<productVariant, 'images'>,
    numberOfItems:number
}
