import { object, string, InferType } from 'yup';
import { inputMetadata } from './generalFormTypes';

export const transcValidationSchema = object(
    {
        transactionCode: string().min(3).required(),
    }
);

export type transcValidationSchemaType = InferType<typeof transcValidationSchema>;


export type transcValidationMetadataType = Record<keyof transcValidationSchemaType, inputMetadata>;
