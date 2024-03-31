import { object, string, number, date, InferType } from 'yup';

export enum inputTypes {
    TEXT='TEXT',
    SELECT='SELECT',
    DATE='DATE',
    LOCATION='LOCATION'
}

export type genre = 'male' | 'female' | 'other' ;
export type paymethodType = 'mobile_pay';
export type availableBanks = 'mercantil' | 'bnc' | 'povincial';

export const personalConfigurationSchema = object(
    {
        name: string().required(),
        lastName: string().required(),
        email: string().email().required(),
        genre: string<genre>().required(),
        birthDate: date().required(),
        ci: string().required()
    }
);

export const deliveryConfigurationSchema = object({
    directionName: string().required(),
    pluscode: string().required(),
    description: string()
});

export const payMethodConfigurationSchema = object(
    {
        type: string<paymethodType>().required(),
        ni: string().required(),
        phone: string().required(),
        bank: string<availableBanks>().required()
    }
)

export type personalConfigurationSchemaType = InferType<typeof personalConfigurationSchema>;
export type deliveryConfigurationSchemaType = InferType<typeof deliveryConfigurationSchema>;
export type payMethodConfigurationSchemaType = InferType<typeof payMethodConfigurationSchema>;

type personalConfigurationSchemaTranslationsValues = {
    name:string,
    placeholder?:string,
    inputType: inputTypes
};

type personalConfigurationSchemaTranslationsType = Record<keyof personalConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;
type deliveryConfigurationSchemaTranslationsType = Record<keyof deliveryConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;
type payMethodConfigurationSchemaTranslationsType = Record<keyof payMethodConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;

export const personalConfigurationMetadata:personalConfigurationSchemaTranslationsType = {
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

export const deliveryConfigurationMetadata:deliveryConfigurationSchemaTranslationsType = {
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

export const payMethodConfigurationMetadata: payMethodConfigurationSchemaTranslationsType = {
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