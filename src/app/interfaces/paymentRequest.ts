export interface PayloadRequest {
  payment_request: PaymentRequest;
}

export interface PaymentRequest {
  description: string;
  first_due_date: string;
  first_total: number;
  payer_name: string;
}

export interface PaymentResponse {
  id: number;
  type: string;
  state: string;
  created_at: Date;
  payer_name: string;
  description: string;
  first_due_date: Date;
  first_total: number;
  barcode: string;
  rapipago_barcode: string;
  checkout_url: string;
  barcode_url: string;
  rapipago_barcode_url: string;
  pdf_url: string;
}

export interface Errors {
  children: Children;
}

export interface Children {
  external_reference: BackURLPending;
  payer_name: BackURLPending;
  payer_email: BackURLPending;
  description: BackURLPending;
  first_due_date: FirstDueDate;
  first_total: BackURLPending;
  second_due_date: BackURLPending;
  second_total: BackURLPending;
  back_url_success: BackURLPending;
  back_url_pending: BackURLPending;
  back_url_rejected: BackURLPending;
  metadata: BackURLPending;
  risk_insights: BackURLPending;
  excluded_channels: BackURLPending;
  excluded_installments: BackURLPending;
  excluded_card_brands: BackURLPending;
  excluded_agreed_days: BackURLPending;
  items: BackURLPending;
  transfer_to: BackURLPending;
}

export interface BackURLPending {}

export interface FirstDueDate {
  errors: string[];
}
