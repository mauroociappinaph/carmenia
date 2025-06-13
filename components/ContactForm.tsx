import React, { useState } from 'react';
import { FormData } from '../types';
import { submitForm } from '../services/contactService';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants';
import Modal from './Modal';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      await submitForm(formData);
      setSubmitStatus('success');
      setSubmitMessage('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
      setIsModalOpen(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      setIsModalOpen(true);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSubmitStatus(null);
    setSubmitMessage('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hablemos de tu <span style={{color: PRIMARY_COLOR}}>Proyecto</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Completa el formulario y cuéntanos cómo podemos ayudarte a automatizar tu éxito.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#6eb2ed] focus:border-[#6eb2ed] transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#6eb2ed] focus:border-[#6eb2ed] transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#6eb2ed] focus:border-[#6eb2ed] transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="¿Qué solución de automatización estás buscando?"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-semibold py-3 px-6 rounded-lg text-white transition-colors duration-300 ease-in-out flex items-center justify-center"
                style={{ backgroundColor: PRIMARY_COLOR }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = isSubmitting ? PRIMARY_COLOR : SECONDARY_COLOR}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = PRIMARY_COLOR}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        message={submitMessage}
        status={submitStatus}
      />
    </section>
  );
};

export default ContactForm;
