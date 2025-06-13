
import React from 'react';
import { Benefit } from '../types';
import { PRIMARY_COLOR } from '../constants';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const benefitsData: Benefit[] = [
  {
    id: '1',
    text: 'Eficiencia Optimizada en tus Operaciones',
    icon: <CheckCircleIcon className="w-6 h-6 text-[#6eb2ed]" />,
  },
  {
    id: '2',
    text: 'Reducción Significativa de Costos',
    icon: <CheckCircleIcon className="w-6 h-6 text-[#6eb2ed]" />,
  },
  {
    id: '3',
    text: 'Innovación Constante y Ventaja Competitiva',
    icon: <CheckCircleIcon className="w-6 h-6 text-[#6eb2ed]" />,
  },
  {
    id: '4',
    text: 'Soporte Personalizado y Adaptado a Ti',
    icon: <CheckCircleIcon className="w-6 h-6 text-[#6eb2ed]" />,
  },
  {
    id: '5',
    text: 'Toma de Decisiones Basada en Datos',
    icon: <CheckCircleIcon className="w-6 h-6 text-[#6eb2ed]" />,
  },
  {
    id: '6',
    text: 'Escalabilidad para Crecer sin Límites',
    icon: <CheckCircleIcon className="w-6 h-6 text-[#6eb2ed]" />,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Beneficios de <span style={{color: PRIMARY_COLOR}}>Elegirnos</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Potenciamos tu empresa con soluciones inteligentes que marcan la diferencia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-4">{benefit.icon}</div>
              <p className="text-gray-700 font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
