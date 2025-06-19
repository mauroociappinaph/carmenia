import React from 'react';
import { TelegramIcon } from './icons/TelegramIcon';
// import { CalendarIcon } from './icons/CalendarIcon'; // CalendarIcon no longer needed
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants';

interface HeroProps {
  appName: string; // appName prop is still here, though not used in the H1's dynamic part anymore
  telegramLink?: string;
  // calendlyLink: string; // calendlyLink no longer needed
}

const Hero: React.FC<HeroProps> = ({ appName, telegramLink }) => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-100 via-gray-50 to-blue-100 py-20 md:py-32"
    >
      <div className="container mx-auto px-6 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          style={{ color: '#334155' }} // Using a darker slate for better contrast on light bg
        >
          Transforma tu Negocio con <span style={{ color: PRIMARY_COLOR }}>Inteligencia Artificial</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Automatizamos tus procesos con Inteligencia Artificial para que te enfoques en crecer.
          Eficiencia, innovación y resultados medibles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {telegramLink && (
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto"
              style={{ backgroundColor: PRIMARY_COLOR, borderColor: PRIMARY_COLOR }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = SECONDARY_COLOR)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
            >
              <TelegramIcon className="w-5 h-5 mr-2" />
              Contactar por Telegram
            </a>
          )}
          {/* <a
            href={calendlyLink} // calendlyLink is removed
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto"
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Agendar Reunión
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
