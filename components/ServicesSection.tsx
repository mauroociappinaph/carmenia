
import React from 'react';
import { Service } from '../types';
import ServiceCard from './ServiceCard';
import { AccountingIcon } from './icons/AccountingIcon';
import { ContentCreationIcon } from './icons/ContentCreationIcon';
import { CustomerServiceIcon } from './icons/CustomerServiceIcon';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { LandingPageIcon } from './icons/LandingPageIcon';
import { ShopifyIcon } from './icons/ShopifyIcon';
import { DataScrapingIcon } from './icons/DataScrapingIcon';
import { PRIMARY_COLOR } from '../constants';


const servicesData: Service[] = [
  {
    id: '1',
    title: 'Automatización Contable',
    description: 'Optimiza tus finanzas y contabilidad con procesos automatizados y precisos.',
    icon: <AccountingIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '2',
    title: 'Creación de Contenido y CM',
    description: 'Generación de contenido atractivo y gestión de comunidades online impulsada por IA.',
    icon: <ContentCreationIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '3',
    title: 'Atención al Cliente Automatizada',
    description: 'Brinda respuestas rápidas y eficientes 24/7 con nuestros sistemas de atención inteligente.',
    icon: <CustomerServiceIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '4',
    title: 'Chatbots Personalizados',
    description: 'Desarrollamos chatbots a medida para interactuar con tus clientes y optimizar tareas.',
    icon: <ChatbotIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '5',
    title: 'Diseño de Landing Pages',
    description: 'Creamos landing pages optimizadas y atractivas que convierten visitantes en clientes.',
    icon: <LandingPageIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '6',
    title: 'Automatización para Shopify',
    description: 'Integramos soluciones de IA para potenciar tu tienda online en Shopify.',
    icon: <ShopifyIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
  {
    id: '7',
    title: 'Scraping de Datos',
    description: 'Extracción y análisis de datos web para obtener insights valiosos para tu negocio.',
    icon: <DataScrapingIcon className="w-12 h-12 mb-4 text-[#6eb2ed]" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Algunas de Nuestras Soluciones de <span style={{color: PRIMARY_COLOR}}>Automatización</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo la Inteligencia Artificial puede revolucionar cada aspecto de tu empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;