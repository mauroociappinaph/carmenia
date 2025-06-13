
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  whatsappLink: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappLink }) => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-transform transform hover:scale-110"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
