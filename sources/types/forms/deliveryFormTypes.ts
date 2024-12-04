import { object, string, InferType } from 'yup';
import { inputMetadata } from './generalFormTypes';

export const deliveryConfigurationSchema = object({
    name: string().required('El campo Nombre es requerido'),
    plus_code: string().required('El campo Codigo Plus es requerido'),
    description: string().required('El campo Descripcion es requerido'),
});

export type deliveryConfigurationSchemaType = InferType<typeof deliveryConfigurationSchema>;

export type deliveryFormMetadataType = Record<keyof deliveryConfigurationSchemaType, inputMetadata>;