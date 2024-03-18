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

export type personalConfigurationSchemaType = InferType<typeof personalConfigurationSchema>;

type personalConfigurationSchemaTranslationsValues = {
    name:string,
    placeholder?:string,
    inputType: inputTypes
};

type personalConfigurationSchemaTranslationsType = Record<keyof personalConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;

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
