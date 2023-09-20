import { NextPage } from "next";
import { useState } from "react";

interface Props {
  checkoutUrl: string;
  copyToClipboard: () => void;
  closeModalCopy: () => void;
  copied: boolean;
}

const DialogCopy: NextPage<Props> = ({
  checkoutUrl,
  copyToClipboard,
  closeModalCopy,
  copied = false,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="transition-opacity duration-300 ease-in-out opacity-100 transform scale-100 bg-white p-8 rounded shadow-lg">
        <div>
          <label>Enlace de cobro:</label>
          <input
            type="text"
            value={checkoutUrl}
            className="w-full border p-2 rounded"
            readOnly
          />
        </div>

        <div className="mt-4">
          <button
            className="text-gray py-2 px-4 rounded mr-2"
            onClick={closeModalCopy}
          >
            Cerrar 
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={copyToClipboard}
          >
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogCopy;
