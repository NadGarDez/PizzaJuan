import { BASE_URL } from "../constants/apiConstants";
import { OrderItem, ShoppingCartType, Totals } from "../types/api/deliveryLocation";
import { baseProduct, productVariant, shoppingCarItemType } from "../types/api/productTypes";


const getImagesFromVariants = (variant:productVariant):string[]=> {
    return variant.images.map(
        item => item.image
    )
}


export const getImagesFromBaseProduct = (product:baseProduct) => {
    const images:string[] = []
    const {variants, principal_image} = product;
    variants.forEach(
        item => {
            images.push(...getImagesFromVariants(item))
        }
    )

    return images
    
}

export const getImageFromOrderSkeleton = (value:string): string => {
    const {products} = JSON.parse(value) as ShoppingCartType;
    return `${BASE_URL}${Object.values(products)[0].principal_image}`
}

export const getImageFromOrderItems= (orderItems: OrderItem[]): string => {
    console.log(orderItems)
    return `${BASE_URL}${orderItems[0].variant.base_product.principal_image}`
    // return `${BASE_URL}${orderItem.variant.images[0].image}`
}

// export const getTotalsFromOrderItems = (orderItems: OrderItem[]): number => {

//     return orderItems
// }

export const getTotalFromOrderSkeleton = (value:string): number => {
    const {totals: {total}} = JSON.parse(value) as ShoppingCartType;
    return total
}

export const getTotalsFromOrderSkeleton = (value:string): Totals => {
    const {totals} = JSON.parse(value) as ShoppingCartType;
    return totals
}

export const getProductsFomOrderSkeleton = (value:string): shoppingCarItemType[] => {
    const {totals: {total}, products} = JSON.parse(value) as ShoppingCartType;
    return Object.values(products);
}