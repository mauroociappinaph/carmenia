
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
      <div className="flex-shrink-0">{service.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
