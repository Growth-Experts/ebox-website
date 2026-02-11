import React from 'react';

export type PageRoute = 'home' | 'home-2' | 'eforms' | 'eforms-2' | 'about' | 'contact' | 'book-demo';

export interface NavItem {
  label: string;
  route?: PageRoute;
  href?: string;
  isButton?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}