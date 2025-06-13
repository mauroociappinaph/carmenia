
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  id: string;
  text: string;
  icon: React.ReactNode;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
