import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  className: string;
  image: string;
}

export interface ProcessItem {
  title: string;
  content: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}
