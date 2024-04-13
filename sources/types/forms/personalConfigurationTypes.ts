import { object, string, date, InferType } from 'yup';
import { inputMetadata } from './generalFormTypes';

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


export type personalFormMetadataType = Record<keyof personalConfigurationSchemaType, inputMetadata>;
