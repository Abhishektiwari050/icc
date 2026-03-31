import React from 'react';
import { Globe, Clock, Truck, Package } from 'lucide-react';
import { Service, Testimonial } from '@/types';

export const HERO_WORDS = ["Global", "India", "USA", "Europe", "Dubai", "Singapore"];

export const TRACKING_PLACEHOLDERS = [
  "Enter tracking number (e.g. MH-482-901)",
  "Track your international shipment",
  "Where is your package?",
  "MH-123-456",
];

export const HERO_IMAGE = "/images/hero-truck.png";

export const SERVICES: Service[] = [
  {
    title: "International Shipping",
    description: "Seamless global transit via air and sea with door-to-door tracking and customs clearance support across 220+ countries.",
    icon: React.createElement(Globe, { className: "w-10 h-10 text-yellow-500" }),
    className: "md:col-span-2",
    image: "/images/service-international.png"
  },
  {
    title: "Express Delivery",
    description: "Time-critical logistics for urgent documents and high-value small parcels.",
    icon: React.createElement(Clock, { className: "w-10 h-10 text-yellow-500" }),
    className: "md:col-span-1",
    image: "/images/service-express.png"
  },
  {
    title: "Domestic Courier",
    description: "Comprehensive nationwide network reaching every corner of India with precision.",
    icon: React.createElement(Truck, { className: "w-10 h-10 text-yellow-500" }),
    className: "md:col-span-1",
    image: "/images/service-domestic.png"
  },
  {
    title: "Business Logistics",
    description: "Tailored supply chain solutions and warehousing for enterprise partners requiring scale and reliability.",
    icon: React.createElement(Package, { className: "w-10 h-10 text-yellow-500" }),
    className: "md:col-span-2",
    image: "/images/service-business.png"
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Mahakaal Enterprises has completely transformed our supply chain. Their precision and reliability have allowed us to expand our operations globally with absolute confidence.",
    name: "Sarah Jenkins",
    designation: "Director of Operations, Nexus Tech",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    quote: "The real-time visibility and secure handling provided by Mahakaal Enterprises are unmatched. They truly understand the architectural precision required in logistics.",
    name: "David Chen",
    designation: "Head of Logistics, Global Build",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    quote: "Efficient, reliable, and professional. Mahakaal Enterprises is our go-to partner for all international shipping needs.",
    name: "Michael Roberts",
    designation: "CEO, Streamline Exports",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
];

export const PROCESS_DATA = [
  {
    title: "01 BOOK",
    description: "Schedule your pickup through our digital portal or contact our local hub for custom requirements.",
    image: "/images/process-book.png"
  },
  {
    title: "02 PICKUP",
    description: "Our specialized couriers collect the shipment with secure handling protocols and immediate scanning.",
    image: "/images/process-pickup.png"
  },
  {
    title: "03 TRANSIT",
    description: "Live tracking and optimized routing across our global air & sea hubs ensuring maximum efficiency.",
    image: "/images/process-transit.png"
  },
  {
    title: "04 DELIVERED",
    description: "Safe arrival with digital proof of delivery, instant notification, and recipient verification.",
    image: "/images/process-delivered.png"
  },
];

export const WORLD_DOTS = [
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 40.7128, lng: -74.0060, label: "New York" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 1.3521, lng: 103.8198, label: "Singapore" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: -23.5505, lng: -46.6333, label: "Sao Paulo" } },
  { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 30.0444, lng: 31.2357, label: "Cairo" } },
];
