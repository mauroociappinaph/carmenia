
import React from 'react';
import { PRIMARY_COLOR } from '../constants';

interface ImpactItemProps {
  percentage: string;
  title: string;
  description: string;
}

const ImpactItem: React.FC<ImpactItemProps> = ({ percentage, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div 
      className="text-4xl font-bold mb-3"
      style={{ color: PRIMARY_COLOR }}
    >
      {percentage}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const AutomationImpactSection: React.FC = () => {
  const impactData = [
    {
      percentage: '45%',
      title: 'Incremento de Productividad',
      description: 'Equipos que adoptan la automatización inteligente reportan un aumento en su capacidad productiva. Esto se traduce en más objetivos alcanzados, liberando tiempo para la innovación.',
    },
    {
      percentage: '25-40%',
      title: 'Reducción de Costos Operativos',
      description: 'La optimización de flujos de trabajo mediante IA puede disminuir los costos operativos, minimizando el desperdicio de recursos y el retrabajo por errores manuales.',
    },
    {
      percentage: '70%+',
      title: 'Precisión y Disminución de Errores',
      description: 'La automatización de tareas repetitivas reduce la incidencia de errores humanos. Esto mejora la calidad y fortalece la confianza y reputación.',
    },
    {
      percentage: '60%',
      title: 'Agilidad y Tiempo de Respuesta',
      description: 'Las empresas automatizadas pueden mejorar sus tiempos de respuesta al cliente y al mercado, una ventaja crucial para adaptarse rápidamente y superar a la competencia.',
    },
    {
      percentage: '50%+',
      title: 'Enfoque en Estrategia y Crecimiento',
      description: 'Al delegar lo rutinario a sistemas inteligentes, los equipos pueden reinvertir más de su tiempo en análisis estratégico, desarrollo y expansión del negocio.',
    },
  ];

  return (
    <section id="automation-impact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            La Diferencia <span style={{ color: PRIMARY_COLOR }}>Cuantificable</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            En el competitivo panorama actual, integrar la inteligencia artificial no es solo una mejora, es una transformación estratégica. Observa el impacto tangible que la automatización puede generar:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <ImpactItem
              key={index}
              percentage={item.percentage}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estos indicadores reflejan una realidad: la no automatización representa un costo de oportunidad significativo. La inteligencia artificial ya no es una visión futurista, sino una herramienta <span style={{ color: PRIMARY_COLOR, fontWeight: '600' }}>presente y accesible</span> para potenciar cada faceta de tu organización.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomationImpactSection;
