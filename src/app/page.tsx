import PaymentForm from "./components/PaymentForm";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold">
        Crear Solicitud de Pago
      </h1>
      <PaymentForm />

      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
