import { object, string, number, date, InferType } from 'yup';


type genre = 'male' | 'female' | 'other' ;

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
    inputType:string
};

type personalConfigurationSchemaTranslationsType = Record<keyof personalConfigurationSchemaType, personalConfigurationSchemaTranslationsValues>;

export const personalConfigurationMetadata:personalConfigurationSchemaTranslationsType = {
    name: {
        name: 'Nombres',
        placeholder: 'Agrega tus nombres. Ej. Pedro Julian.',
        inputType:'text'
    },
    lastName: {
        name: 'Apellidos',
        placeholder: 'Agrega tus apellidos. Ej. Perez Lopez.',
        inputType:'text',
    },
    email: {
        name: 'Correo Electronico',
        placeholder: 'Agrega tu correo electronico. Ej. nombre@server.com.',
        inputType:'text'
    },
    birthDate: { 
        name: 'Agrega tu Fecha de nacimiento',
        inputType:'text'// should be a date input
    },
    ci: {
        name: 'Cedula de Identidad / Numero de pasaporte',
        placeholder: 'Agrega tu numero de documento. Ej. V123456789.',
        inputType:'text'
    },
    genre: { 
        name: 'Genero',
        inputType:'text' // should be a select item 
    }
}
