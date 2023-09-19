"use client";
import { useState } from "react";
import { PayloadRequest, PaymentRequest } from "../interfaces/paymentRequest";
import { formatDate } from "../utils/dates";

function PaymentForm() {
  const [formData, setFormData] = useState<PaymentRequest>({
    description: "",
    first_due_date: "",
    first_total: 0,
    payer_name: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload: PayloadRequest = {
      payment_request: {
        ...formData,
        first_due_date: formatDate(new Date(formData.first_due_date)),
      },
    };
    console.log(payload);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md">
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
                type="date" // Cambiamos el tipo a "date"
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
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Superposición semi-transparente */}
              <div className="fixed inset-0 bg-black opacity-50"></div>

              <div className="transition-opacity duration-300 ease-in-out opacity-100 transform scale-100 bg-white p-8 rounded shadow-lg">
                <h2 className="text-lg font-semibold">
                  ¿Enviar enlace de cobro por correo electrónico?
                </h2>
                <div className="mt-4 flex justify-end">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    onClick={() => {
                      // Aquí puedes implementar la lógica para enviar el enlace de cobro por correo electrónico.
                      closeModal();
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
