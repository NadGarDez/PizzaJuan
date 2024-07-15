import { totals } from "../redux/shoppingCardSlice";
import { shoppingCarItemType } from "../types/api/productTypes";

const subtotalCallbackCallculation = (acumulator:number, currentValue:shoppingCarItemType):number=> {

    const {numberOfItems, variant: {price}} = currentValue;

    const currentProductTotal = numberOfItems * price;


   return acumulator + currentProductTotal;
}

const getTaxesValueFromProduct = (taxPercent:number, productValue:number)=> {
    return (taxPercent * productValue) / 100;
}


const taxesCallbackCalculation = (acumulator:Record<string, number>, currentValue:shoppingCarItemType) => {
    const {variant:{taxes, price}, numberOfItems} = currentValue;
    const copy = {...acumulator};

    taxes.forEach(
        item => {
            const {name, value} = item;
            if(!(name in acumulator)){
                copy[name] = 0
            }

            const acumulatedTaxValue = copy[name];

            const currentProductTotal = numberOfItems * price;

            copy[name] = acumulatedTaxValue + getTaxesValueFromProduct(value, currentProductTotal);

        }
    )

    return copy;
}

const subtotalCalculation = (carItems: shoppingCarItemType[])=> {
    return carItems.reduce<number>(
        subtotalCallbackCallculation,
        0
    )
}

const taxesClculation = (carItems: shoppingCarItemType[])=> {
    return carItems.reduce<Record<string, number>>(
        taxesCallbackCalculation,
        {}
    )
}

const totalCalculation = (details:Record<string, number>) => {
    return Object.values(details).reduce((prev, current)=>prev + current, 0);
}

export const orderCalculation = (value: shoppingCarItemType[]) => {
    const initial:totals ={
        info: {

        } ,
        total: 0
    }
    
    const subtotal = subtotalCalculation(value)
    const taxes = taxesClculation(value);
    const total = totalCalculation({subtotal, ...taxes})

    return {
        info:{
            ...initial.info,
            subtotal,
            ...taxes,
        }, 
        total
    }

}