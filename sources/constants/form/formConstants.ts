import { ModalFormNames, allFormsType, inputTypes } from '../../types/forms/generalFormTypes';
import { personalFormMetadataType } from '../../types/forms/personalConfigurationTypes';
import { deliveryFormMetadataType } from '../../types/forms/deliveryFormTypes';
import { payMethodFormMetadatType } from '../../types/forms/payMethodFormTypes';
import { transcValidationMetadataType } from '../../types/forms/transcValidationFormTypes';


export const SECTION_ONE_TITLE = "Configuracion Personal"
const SECTION_ONE_SUBTITLE = "Configura nombre, appellido sexo y fecha de nacimiento"

export const SECTION_TWO_TITLE = "Direccion de envio"
const SECTION_TWO_SUBTITLE = "Configura donde quieres que llegue tu pedido"

export const SECTION_THREE_TITLE = "Configuracion de pago"
const SECTION_THREE_SUBTITLE = "Agrega medios de pago o recarga P'taxies"


const TRANSC_VALIDATION_FORM_TITLE = ""
const TRANSC_VALIDATION_FORM_SUBTITLE = ""

export const VenezuelanBancs = [
    {
        "value": "0001",
        "label": "Banco Central de Venezuela",
        "sms": false,
    },
    {
        "value": "0102",
        "label": "Banco de Venezuela",
        "sms": true,
    },
    {
        "value": "0104",
        "label": "Banco Venezolano de Crédito",
        "sms": false,
    },
    {
        "value": "0163",
        "label": "Banco del Tesoro",
        "sms": true,
    },
    {
        "value": "0166",
        "label": "Banco Agrícola de Venezuela",
        "sms": false,
    },
    {
        "value": "0168",
        "label": "Bancrecer",
        "sms": true,
    },
    {
        "value": "0169",
        "label": "Mi Banco",
        "sms": false,
    },
    {
        "value": "0177",
        "label": "Banco de la Fuerza Armada Nacional Bolivariana (BANFANB)",
        "sms": false,
    },
    {
        "value": "0191",
        "label": "Banco Nacional de Crédito (BNC)",
        "sms": false,
    },
    {
        "value": "0105",
        "label": "Banco Mercantil",
        "sms": false,
    },
    {
        "value": "0108",
        "label": "Banco Provincial",
        "sms": false,
    },
    {
        "value": "0114",
        "label": "Bancaribe",
        "sms": true,
    },
    {
        "value": "0115",
        "label": "Banco Exterior",
        "sms": true,
    },
    {
        "value": "0116",
        "label": "Banco Occidental de Descuento",
        "sms": false,
    },
    {
        "value": "0128",
        "label": "Banco Caroní",
        "sms": true,
    },
    {
        "value": "0134",
        "label": "Banesco",
        "sms": true,
    },
    {
        "value": "0137",
        "label": "Sofitasa",
        "sms": false,
    },
    {
        "value": "0138",
        "label": "Banco Plaza",
        "sms": false,
    },
    {
        "value": "0146",
        "label": "Bangente",
        "sms": false,
    },
    {
        "value": "0151",
        "label": "Banco Fondo Común (BFC)",
        "sms": true,
    },
    {
        "value": "0156",
        "label": "100% Banco",
        "sms": false,
    },
    {
        "value": "0157",
        "label": "Del Sur Banco Universal",
        "sms": true,
    },
    {
        "value": "0171",
        "label": "Activo Banco",
        "sms": false,
    },
    {
        "value": "0172", 
        "label": "Bancamiga",
        "sms": true,
    },
    {
        "value": "0174",
        "label": "Banplus",
        "sms": true,
    },
    {
        "value": "0175", 
        "label": "Banco Bicentenario del Pueblo",
        "sms": true,
    }
]

export const personalConfigurationMetadata:personalFormMetadataType = {
    name: {
        name: 'Nombres',
        placeholder: 'Agrega tus nombres. Ej. Pedro Julian.',
        inputType:inputTypes.TEXT
    },
    lastName: {
        name: 'Apellidos',
        placeholder: 'Agrega tus apellidos. Ej. Perez Lopez.',
        inputType:inputTypes.TEXT,
    },
    email: {
        name: 'Correo Electronico',
        placeholder: 'Agrega tu correo electronico. Ej. nombre@server.com.',
        inputType:inputTypes.TEXT
    },
    birthDate: { 
        name: 'Fecha de nacimiento',
        placeholder:'Agrega tu fecha de nacimiento',
        inputType:inputTypes.DATE
    },
    ci: {
        name: 'Cedula de Identidad / Numero de pasaporte',
        placeholder: 'Agrega tu numero de documento. Ej. V123456789.',
        inputType:inputTypes.TEXT
    },
    genre: { 
        name: 'Genero',
        placeholder: 'Agrega tu genero.',
        inputType:inputTypes.SELECT,
        aditionalData: {
            data: [
                {
                    value:'male',
                    label:'Masculino'
                },
                {
                    value:'female',
                    label:'Femenino'
                },
                {
                    value:'other',
                    label: 'Otre'
                }
            ]
        }
    }
}

export const deliveryConfigurationMetadata:deliveryFormMetadataType = {
    name: { 
        name: 'Nombre de Direccion',
        placeholder: 'Eje. Casa, Trabajo.',
        inputType:inputTypes.TEXT
    },
    plus_code: { 
        name: 'Codigo Plus',
        placeholder: 'Identificador de direccion. Eje. WH57+QFR',
        inputType:inputTypes.TEXT
    },
    description: { 
        name: 'Descripcion',
        placeholder: 'Detalles adicionales de la direccion',
        inputType:inputTypes.TEXT
    }
}

export const payMethodConfigurationMetadata: payMethodFormMetadatType = {
    type: {
        name: 'Tipo',
        placeholder: 'Agrega tu tipo de metodo de pago',
        inputType: inputTypes.SELECT,
        aditionalData:{
            data: [
                {
                    value:'mobile_pay',
                    label:'Pago Movil'
                },
            ]
        }
    },
    ni: {
        name: 'CI',
        placeholder: 'Cedula relacionada al metodo de pago',
        inputType: inputTypes.TEXT
    },
    bank: {
        name: 'Banco',
        placeholder: 'Banco relacionado al metodo de pago',
        inputType: inputTypes.SELECT,
        aditionalData: {
            data: VenezuelanBancs
        }
    },
    phone: {
        name: 'Telefono',
        placeholder: 'Numero de telefono relacionado al metodo de pago',
        inputType: inputTypes.TEXT
    }
}

export const transcValidationMetadata: transcValidationMetadataType = {
    transactionCode: {
        name: 'Numero de referencia',
        placeholder: 'Agregue los ultimos 4 digitos. Eje. 1234',
        inputType: inputTypes.TEXT
    }
}

export const modalFormData: allFormsType = {
    PERSONAL_CONFIGURATION: {
        title:SECTION_ONE_TITLE,
        subtitle:SECTION_ONE_SUBTITLE,
        formKey: ModalFormNames.PERSONAL_CONFIGURATION
    },
    DELIVERY_CONFIGURATION: {
        title:SECTION_TWO_TITLE,
        subtitle:SECTION_TWO_SUBTITLE,
        formKey:ModalFormNames.DELIVERY_CONFIGURATION
    },
    PAYMENT_CONFIGURATION:{
        title:SECTION_THREE_TITLE,
        subtitle:SECTION_THREE_SUBTITLE,
        formKey:ModalFormNames.PAYMENT_CONFIGURATION
    },
    TRANSACTION_CODE_FORM: {
        title:'Confirma tu pedido',
        subtitle:'Ejecuta el pago movil e ingresa la referencia en el siguiente formulario',
        formKey: ModalFormNames.TRANSACTION_CODE_FORM
    }
}