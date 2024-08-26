import { object, string, InferType } from 'yup';
import { inputMetadata } from './generalFormTypes';

export const deliveryConfigurationSchema = object({
    name: string().required(),
    plus_code: string().required(),
    description: string().required(),
});

export type deliveryConfigurationSchemaType = InferType<typeof deliveryConfigurationSchema>;

export type deliveryFormMetadataType = Record<keyof deliveryConfigurationSchemaType, inputMetadata>;