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
