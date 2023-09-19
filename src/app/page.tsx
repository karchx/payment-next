import PaymentForm from "./components/PaymentForm";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold">Crear Solicitud de Pago</h1>
      <PaymentForm />
    </div>
  );
}
