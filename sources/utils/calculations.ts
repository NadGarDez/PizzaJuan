import { Order, OrderItem, Totals } from "../types/api/deliveryLocation";
import { shoppingCarItemType } from "../types/api/productTypes";

const subtotalCallbackCallculation = (acumulator: number, currentValue: shoppingCarItemType | OrderItem): number => {

    const { variant: { price } } = currentValue;

    const numberOfItems = 'numberOfItems' in currentValue ? currentValue.numberOfItems : currentValue.amount;

    const currentProductTotal = numberOfItems * Number(price);


    return acumulator + currentProductTotal;
}

const getTaxesValueFromProduct = (taxPercent: number, productValue: number) => {
    return (taxPercent * productValue) / 100;
}


const taxesCallbackCalculation = (acumulator: Record<string, number>, currentValue: shoppingCarItemType | OrderItem) => {
    const { variant: { taxes, price } } = currentValue;

    const numberOfItems = 'numberOfItems' in currentValue ? currentValue.numberOfItems : currentValue.amount;

    const copy = { ...acumulator };

    taxes.forEach(
        item => {
            const { name, value } = item;
            if (!(name in acumulator)) {
                copy[name] = 0
            }

            const acumulatedTaxValue = copy[name];

            const currentProductTotal = numberOfItems * Number(price);

            copy[name] = acumulatedTaxValue + getTaxesValueFromProduct(value, currentProductTotal);

        }
    )

    return copy;
}

const subtotalCalculation = (carItems: shoppingCarItemType[] | OrderItem[]) => {
    return carItems.reduce<number>(
        subtotalCallbackCallculation,
        0
    )
}

const taxesClculation = (carItems: shoppingCarItemType[] | OrderItem[]) => {
    return carItems.reduce<Record<string, number>>(
        taxesCallbackCalculation,
        {}
    )
}

const totalCalculation = (details: Record<string, number>) => {
    return Object.values(details).reduce((prev, current) => prev + current, 0);
}

export const orderCalculation = (value: shoppingCarItemType[]) => {
    const initial: Totals = {
        info: {

        },
        total: 0
    }

    const subtotal = subtotalCalculation(value)
    const taxes = taxesClculation(value);
    const total = totalCalculation({ subtotal, ...taxes })

    return {
        info: {
            ...initial.info,
            subtotal,
            ...taxes,
        },
        total
    }

}

export const OrderTotal = (order_items: OrderItem[]): number => {
    const subtotal = subtotalCalculation(order_items);
    const taxes = taxesClculation(order_items);
    const total = totalCalculation({ subtotal, ...taxes })
    return total;
}

export const orderTotals = (order_items: OrderItem[]): Totals => {
    const subtotal = subtotalCalculation(order_items);
    const taxes = taxesClculation(order_items);
    const total = totalCalculation({ subtotal, ...taxes })
    return {
        info: {
            subtotal,
            ...taxes,
        },
        total
    }
}   