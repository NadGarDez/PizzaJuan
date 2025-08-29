
export interface MobilePay {
  pk: number;
  bank_code: string;
  ci: string;
  phone_number: string;
};

export interface WalletPay {
  pk: number;
  address: string;
};

export interface Paymethod  {
  id: number;
  object_id: number;
  owner: number;
  content_type: number;
  content_object: MobilePay | WalletPay;
};