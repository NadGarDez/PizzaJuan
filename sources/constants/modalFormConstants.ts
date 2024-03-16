export enum ModalFormNames {
    PERSONAL_CONFIGURATION = "PERSONAL_CONFIGURATION",
    DELIVERY_CONFIGURATION = "DELIVERY_CONFIGURATION",
    PAYMENT_CONFIGURATION = "PAYMENT_CONFIGURATION"
}

export type valueOfModalFormNames<T> = T[keyof T]