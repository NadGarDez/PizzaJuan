import { baseProduct, productVariant } from "../types/api/productTypes";


const getImagesFromVariants = (variant:productVariant):string[]=> {
    return variant.images.map(
        item => item.image
    )
}


export const getImagesFromBaseProduct = (product:baseProduct) => {
    const images:string[] = []
    const {variants, principal_image} = product;
    images.push(principal_image)
    variants.forEach(
        item => {
            images.push(...getImagesFromVariants(item))
        }
    )

    return images
    
}