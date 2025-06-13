import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import emailjs from '@emailjs/browser';

// Inicializar EmailJS
emailjs.init("sC0nv-1nCwvEJt4Du");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
