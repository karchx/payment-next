"use client";
import { useState } from "react";
import {
  Errors,
  PayloadRequest,
  PaymentRequest,
} from "../interfaces/paymentRequest";
import { formatDate } from "../utils/dates";
import ApiService from "../services/api";
import DialogEmail from "./dialogs/DialogEmail";
import DialogCopy from "./dialogs/DialogCopyCheckout";
import { toast } from "react-toastify";

function PaymentForm() {
  const [formData, setFormData] = useState<PaymentRequest>({
    description: "",
    first_due_date: "",
    first_total: 0,
    payer_name: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showModalCopy, setShowModalCopy] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload: PayloadRequest = {
      payment_request: {
        ...formData,
        first_due_date: formatDate(new Date(formData.first_due_date)),
      },
    };

    try {
      const response = await ApiService.paymentRequest(payload);
      if (response.status === 201) {
        setCheckoutUrl(response.data.checkout_url);
      }
      setShowModal(true);
    } catch (e: any) {
      const errors = e.response.data as { errors: Errors };
      const errorsObjects = errors.errors.children;

      for (const error in errorsObjects) {
        const errorKey = (errorsObjects as any)[error] as { errors: string[] };
        if (Object.keys(errorKey).length > 0) {
          errorKey.errors.forEach((e) => {
            toast(e, {
              hideProgressBar: true,
              autoClose: 2000,
              type: "error",
            });
          });
        }
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowModalCopy(true);
  };

  const sendEmail = () => {
    setShowModal(false);
    toast("Email enviado", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(checkoutUrl);
    setCopied(true);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="description">Concepto del Pago</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="first_due_date">Fecha de Vencimiento</label>
              <input
                type="date"
                name="first_due_date"
                value={formData.first_due_date}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="first_total">Total</label>
              <input
                type="number"
                name="first_total"
                value={formData.first_total}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="payer_name">Nombre del Pagador</label>
              <input
                type="text"
                name="payer_name"
                value={formData.payer_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Crear Solicitud de Pago
            </button>
          </form>

          {showModal && (
            <DialogEmail closeModal={closeModal} sendEmail={sendEmail} />
          )}
          {showModalCopy && (
            <DialogCopy
              checkoutUrl={checkoutUrl}
              copyToClipboard={copyToClipboard}
              closeModalCopy={() => {
                setShowModalCopy(false);
                setCopied(false);
              }}
              copied={copied}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
