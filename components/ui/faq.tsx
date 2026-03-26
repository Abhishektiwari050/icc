"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExpandableCard } from "@/components/ui/expandable-card";

const faqs = [
  {
    title: "International Transit",
    description: "Global Shipping Times",
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600&h=400",
    ctaText: "Details",
    ctaLink: "#",
    content: () => (
      <p>
        Transit times vary by destination and service type. Express shipping typically takes 2-5 business days, while standard air freight ranges from 5-10 business days. Our logistics architects provide real-time estimates during booking.
      </p>
    ),
  },
  {
    title: "Customs Support",
    description: "Clearance & Compliance",
    src: "https://images.unsplash.com/photo-1623126756611-66487e472653?auto=format&fit=crop&q=80&w=600&h=400",
    ctaText: "Details",
    ctaLink: "#",
    content: () => (
      <p>
        Yes, we provide end-to-end customs support. Our experts manage all necessary documentation (Commercial Invoices, Packing Lists, Certificates of Origin) to ensure your cargo clears international borders without delay.
      </p>
    ),
  },
  {
    title: "Real-Time Tracking",
    description: "Live Shipment Monitoring",
    src: "https://images.unsplash.com/photo-1558236714-d1183182869c?auto=format&fit=crop&q=80&w=600&h=400",
    ctaText: "Details",
    ctaLink: "#",
    content: () => (
      <p>
        Every shipment is assigned a unique tracking number. You can use our integrated tracking widget on the homepage or mobile app for live updates, status milestones, and proof of delivery.
      </p>
    ),
  },
  {
    title: "Cargo Insurance",
    description: "Protecting Your Assets",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600&h=400",
    ctaText: "Details",
    ctaLink: "#",
    content: () => (
      <p>
        We offer comprehensive cargo insurance options for high-value architectural materials and industrial equipment. Protection coverage can be tailored to the specific value and nature of your shipment.
      </p>
    ),
  },
];

export const FAQ = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full mx-auto", className)}>
      <ExpandableCard cards={faqs} />
    </div>
  );
};
