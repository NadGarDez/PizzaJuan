import { object, string, InferType } from 'yup';
import { inputMetadata } from './generalFormTypes';

export const deliveryConfigurationSchema = object({
    directionName: string().required(),
    pluscode: string().required(),
    description: string()
});

export type deliveryConfigurationSchemaType = InferType<typeof deliveryConfigurationSchema>;

export type deliveryFormMetadataType = Record<keyof deliveryConfigurationSchemaType, inputMetadata>;