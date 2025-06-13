
import React from 'react';

export const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0" // Set to 0 if fill is used and no stroke is desired
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11.999 0C5.372 0 0 5.373 0 12s5.372 12 11.999 12C18.626 24 24 18.627 24 12S18.626 0 11.999 0zm5.636 8.046l-2.015 9.47c-.16.735-.634.918-1.22.576l-2.995-2.201-1.446 1.394c-.159.159-.292.292-.575.292-.265 0-.374-.108-.506-.343l-.999-3.095L4.053 11.39c-.735-.27-.735-.749.136-.954l11.025-4.226c.633-.238 1.2.146.985.93z"/>
  </svg>
);
