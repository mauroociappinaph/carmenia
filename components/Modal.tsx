import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  status: 'success' | 'error' | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, status }) => {
  if (!isOpen) return null;

  const bgColor = status === 'success' ? 'bg-green-500' : 'bg-red-500';
  const textColor = 'text-white';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-auto transform transition-all duration-300 scale-100 opacity-100">
        <div className={`py-3 px-4 rounded-t-lg text-center ${bgColor} ${textColor}`}>
          <h3 className="text-lg font-bold">{status === 'success' ? 'Éxito' : 'Error'}</h3>
        </div>
        <div className="p-6 text-center">
          <p className="text-gray-700 text-base mb-6">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-[#6eb2ed] hover:bg-[#5a9ed1] text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
