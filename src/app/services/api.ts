import http from "../http-common";
import { PayloadRequest, PaymentRequest } from "../interfaces/paymentRequest";

class ApiService {
  paymentRequest(payload: PayloadRequest) {
    return http.post<PaymentRequest[]>("/payment-request", payload, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        }
    });
  }
}

export default new ApiService();
