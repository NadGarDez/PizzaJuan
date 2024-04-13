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
        inputType:inputTypes.SELECT
    }
}

export const deliveryConfigurationMetadata:deliveryFormMetadataType = {
    directionName: { 
        name: 'Nombre de Direccion',
        placeholder: 'Eje. Casa, Trabajo.',
        inputType:inputTypes.TEXT
    },
    pluscode: { 
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
        inputType: inputTypes.SELECT
    },
    ni: {
        name: 'CI',
        placeholder: 'Cedula relacionada al metodo de pago',
        inputType: inputTypes.TEXT
    },
    bank: {
        name: 'Banco',
        placeholder: 'Banco relacionado al metodo de pago',
        inputType: inputTypes.SELECT
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