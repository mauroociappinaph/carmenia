import { FormData } from '../types';
import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const SERVICE_ID = 'service_syoe0vz';
const TEMPLATE_ID = 'template_5ho66on';
const PUBLIC_KEY = 'sC0nv-1nCwvEJt4Du'; // Reemplazar con tu Public Key de EmailJS

export const submitForm = async (data: FormData): Promise<void> => {
  try {
    const templateParams = {
      name: data.name,
      from_email: data.email,
      message: data.message,
      title: 'Nuevo Mensaje de Contacto',
    };

    console.log('Sending email with these parameters:', templateParams);
    console.log('Service ID:', SERVICE_ID);
    console.log('Template ID:', TEMPLATE_ID);
    console.log('Public Key:', PUBLIC_KEY);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    console.log('Email successfully sent!', response);
  } catch (error) {
    console.error('Error al enviar el email:', error);
    throw new Error('No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
  }
};

// Example of how you might structure Supabase integration (pseudo-code):
/*
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const submitFormToSupabase = async (data: FormData): Promise<void> => {
  const { name, email, message } = data;
  const submissionDate = new Date().toISOString();

  const { error }_ = await supabase
    .from('contact_submissions') // Ensure this table exists in Supabase
    .insert([{ name, email, message, submission_date: submissionDate }]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to save form data to Supabase.');
  }

  // Here, you would trigger email notifications, perhaps using Supabase Functions or another service.
  // await sendAdminNotification(data);
  // await sendUserThankYouEmail(data);
};
*/

// Example of how you might structure email sending (pseudo-code, e.g., using a serverless function):
/*
const sendAdminNotification = async (data: FormData) => {
  // Logic to send email to ADMIN_EMAIL_FOR_NOTIFICATIONS
  // e.g., using an API like SendGrid, Resend, or AWS SES
  // const emailPayload = {
  //   to: ADMIN_EMAIL_FOR_NOTIFICATIONS,
  //   from: 'noreply@carmenia.com',
  //   subject: 'New Contact Form Submission from Carmen IA Landing',
  //   html: `... details from data ...`,
  // };
  // await emailService.send(emailPayload);
};

const sendUserThankYouEmail = async (data: FormData) => {
  // Logic to send email to data.email
  // const emailPayload = {
  //   to: data.email,
  //   from: 'support@carmenia.com',
  //   subject: 'Thank You for Contacting Carmen IA!',
  //   html: `... thank you message ...`,
  // };
  // await emailService.send(emailPayload);
};
*/
