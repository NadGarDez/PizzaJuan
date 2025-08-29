import { WalletPay, MobilePay } from "../types/api/paymethod";

export const isWalletPay = (content_object: any): content_object is WalletPay => {
    return (content_object as WalletPay).address !== undefined;
}

export const isMobilePay = (content_object: any): content_object is MobilePay => {
    return (content_object as MobilePay).phone_number !== undefined;
}   