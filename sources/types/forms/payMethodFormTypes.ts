import { object, string, InferType } from 'yup';
import { inputMetadata } from './generalFormTypes';

export type paymethodType = 'mobile_pay';
export type availableBanks = 'mercantil' | 'bnc' | 'povincial';

export const payMethodConfigurationSchema = object(
    {
        type: string<paymethodType>().required(),
        ni: string().required(),
        phone: string().required(),
        bank: string<availableBanks>().required()
    }
)

export type payMethodConfigurationSchemaType = InferType<typeof payMethodConfigurationSchema>;

export type payMethodFormMetadatType = Record<keyof payMethodConfigurationSchemaType, inputMetadata>;
