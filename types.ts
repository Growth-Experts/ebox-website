import React from 'react';

export type PageRoute = 'home' | 'eforms' | 'econnect' | 'about' | 'contact' | 'book-demo';

export const ROUTE_PATHS: Record<PageRoute, string> = {
  home: '/',
  eforms: '/eforms',
  econnect: '/econnect',
  about: '/about',
  contact: '/contact',
  'book-demo': '/book-demo',
};

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