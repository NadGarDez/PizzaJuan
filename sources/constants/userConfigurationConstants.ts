import { ModalFormNames, configurationItem } from "../types/forms/generalFormTypes"

export const SECTION_ONE_TITLE = "Configuracion Personal"
const SECTION_ONE_SUBTITLE = "Configura nombre, appellido sexo y fecha de nacimiento"

export const SECTION_TWO_TITLE = "Direccion de envio"
const SECTION_TWO_SUBTITLE = "Configura donde quieres que llegue tu pedido"

export const SECTION_THREE_TITLE = "Configuracion de pago"
const SECTION_THREE_SUBTITLE = "Agrega medios de pago o recarga P'taxies"


// export type configurationSectionTypes =  Omit<configurationObjectType, 'TRANSACTION_CODE_FORM'>; // this sentence should only add certain forms
// export const configurationSections: configurationSectionTypes = {
//     PERSONAL_CONFIGURATION: {
//         title:SECTION_ONE_TITLE,
//         subtitle:SECTION_ONE_SUBTITLE,
//         formKey: ModalFormNames.PERSONAL_CONFIGURATION
//     },
//     DELIVERY_CONFIGURATION: {
//         title:SECTION_TWO_TITLE,
//         subtitle:SECTION_TWO_SUBTITLE,
//         formKey:ModalFormNames.DELIVERY_CONFIGURATION
//     },
//     PAYMENT_CONFIGURATION:{
//         title:SECTION_THREE_TITLE,
//         subtitle:SECTION_THREE_SUBTITLE,
//         formKey:ModalFormNames.PAYMENT_CONFIGURATION
//     }
// }



export const defaultConfigurationSectionValue : configurationItem = {
    title:SECTION_ONE_TITLE,
    subtitle:SECTION_ONE_SUBTITLE,
    formKey: ModalFormNames.PERSONAL_CONFIGURATION
} 

// delivery location strings

export const PLUS_CODE = 'Codigo Plus';
export const DESCRIPTION = 'Descripcion';

