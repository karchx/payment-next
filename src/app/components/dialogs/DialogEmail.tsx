import { NextPage } from "next";

interface Props {
  closeModal: () => void;
  sendEmail: () => void;
}

const DialogEmail: NextPage<Props> = ({ closeModal, sendEmail }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="transition-opacity duration-300 ease-in-out opacity-100 transform scale-100 bg-white p-8 rounded shadow-lg">
        <h2 className="text-lg font-semibold">
          ¿Enviar enlace de cobro por correo electrónico?
        </h2>

        <div className="mt-4">
          <label htmlFor="payer_name">Email</label>
          <input
            type="email"
            name="payer_name"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
            onClick={closeModal}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={sendEmail}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
export default DialogEmail;
