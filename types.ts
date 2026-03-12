import React from 'react';

export type PageRoute = 'home' | 'eforms' | 'econnect' | 'about' | 'contact' | 'contact-thank-you' | 'book-demo' | 'book-demo-thank-you' | 'privacy';

export const ROUTE_PATHS: Record<PageRoute, string> = {
  home: '/',
  eforms: '/eforms',
  econnect: '/econnect',
  about: '/about',
  contact: '/contact',
  'contact-thank-you': '/contact/thank-you',
  'book-demo': '/book-demo',
  'book-demo-thank-you': '/book-demo/thank-you',
  privacy: '/privacy',
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