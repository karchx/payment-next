export interface PayloadRequest {
  payment_request: PaymentRequest;
}

export interface PaymentRequest {
  description: string;
  first_due_date: string;
  first_total: number;
  payer_name: string;
}
