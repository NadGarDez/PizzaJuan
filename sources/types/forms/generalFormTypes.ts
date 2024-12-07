export enum ModalFormNames {
    PERSONAL_CONFIGURATION = "PERSONAL_CONFIGURATION",
    DELIVERY_CONFIGURATION = "DELIVERY_CONFIGURATION",
    PAYMENT_CONFIGURATION = "PAYMENT_CONFIGURATION",
    TRANSACTION_CODE_FORM = "TRANSACTION_CODE_FORM"
}

export interface configurationItem {
    title:string,
    subtitle: string,
    formKey:string
}

export type allFormsType = Record<ModalFormNames, configurationItem>;

export enum inputTypes {
    TEXT='TEXT',
    SELECT='SELECT',
    DATE='DATE',
    LOCATION='LOCATION'
}

export interface inputMetadata {
    name:string,
    placeholder?:string,
    inputType: inputTypes,
    aditionalData?:any
};

type title =  {
    name:string
}
export interface selectItemsType  {
    value: string,
    label:string
}

export type toggableListItem = Record<string, string> & title;
