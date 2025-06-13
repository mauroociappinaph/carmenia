import React from 'react';
import { TelegramIcon } from './icons/TelegramIcon';

interface TelegramButtonProps {
  telegramLink: string;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ telegramLink }) => {
  return (
    <a
      href={telegramLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por Telegram"
      className="fixed bottom-6 right-24 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg z-40 transition-transform transform hover:scale-110"
    >
      <TelegramIcon className="w-7 h-7" />
    </a>
  );
};

export default TelegramButton;
