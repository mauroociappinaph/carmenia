import React from 'react';
import { TelegramIcon } from './icons/TelegramIcon';
import { EmailIcon } from './icons/EmailIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
// import { InstagramIcon } from './icons/InstagramIcon'; // InstagramIcon removed
import { PRIMARY_COLOR, APP_NAME } from '../constants';

interface FooterProps {
  appName: string;
  contactEmail: string;
  telegramLink?: string;
  linkedInUrl: string;
  // instagramUrl: string; // Removed
}

const Footer: React.FC<FooterProps> = ({ appName, contactEmail, telegramLink, linkedInUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">{appName}</h3>
            <p className="text-sm">Automatización inteligente para un futuro eficiente.</p>
          </div>
          {/* Enlaces Rápidos section removed */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contacto</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={`mailto:${contactEmail}`}
                aria-label="Contáctanos por Email"
                className="text-gray-400 hover:text-[#6eb2ed] transition-colors"
              >
                <EmailIcon className="w-6 h-6" />
              </a>
              {telegramLink && (
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Contáctanos por Telegram"
                >
                  <TelegramIcon className="w-6 h-6" />
                </a>
              )}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-[#6eb2ed] transition-colors"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
              {/* Instagram icon and link removed */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {appName}. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado con <span style={{color: PRIMARY_COLOR}}>♥</span> para la innovación.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
