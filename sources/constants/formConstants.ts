import { object, string, number, date, InferType } from 'yup';

export enum inputTypes {
    TEXT='TEXT',
    SELECT='SELECT',
    DATE='DATE',
    LOCATION='LOCATION'
}

export type genre = 'male' | 'female' | 'other' ;

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
})

export type personalConfigurationSchemaType = InferType<typeof personalConfigurationSchema>;
export type deliveryConfigurationSchemaType = InferType<typeof deliveryConfigurationSchema>;

type personalConfigurationSchemaTranslationsValues = {
    name:string,
    placeholder?:string,
    inputType: inputTypes
};

type personalConfigurationSchemaTranslationsType = Record<keyof personalConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;
type deliveryConfigurationSchemaTranslationsType = Record<keyof deliveryConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;

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
