
import React from 'react';
import { HowItWorksStep } from '../types';
import { PRIMARY_COLOR } from '../constants';
import { ConsultationIcon } from './icons/ConsultationIcon';
import { DevelopmentIcon } from './icons/DevelopmentIcon';
import { SupportIcon } from './icons/SupportIcon';

const stepsData: HowItWorksStep[] = [
  {
    id: '1',
    title: 'Consulta Inicial',
    description: 'Analizamos tus necesidades y objetivos para diseñar una estrategia de automatización a medida.',
    icon: <ConsultationIcon className="w-16 h-16 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '2',
    title: 'Desarrollo e Implementación',
    description: 'Construimos e integramos las soluciones de IA, asegurando una transición fluida y eficiente.',
    icon: <DevelopmentIcon className="w-16 h-16 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '3',
    title: 'Soporte y Optimización',
    description: 'Ofrecemos acompañamiento continuo y optimizamos las soluciones para garantizar resultados sostenibles.',
    icon: <SupportIcon className="w-16 h-16 mb-4 text-[#6eb2ed]" />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">¿Cómo <span style={{color: PRIMARY_COLOR}}>Trabajamos</span>?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro proceso simple y efectivo para llevar la IA a tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stepsData.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="relative mb-6">
                {/* Removed the decorative circle: <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#6eb2ed] rounded-full opacity-30"></div> */}
                {step.icon}
                <span 
                    className="absolute -top-5 -right-3 flex items-center justify-center w-10 h-10 bg-[#6eb2ed] text-white text-xl font-bold rounded-full shadow-md"
                >
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
