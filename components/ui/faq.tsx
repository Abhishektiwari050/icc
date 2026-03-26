"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the typical transit time for international shipments?",
    answer: "Transit times vary by destination and service type. Express shipping typically takes 2-5 business days, while standard air freight ranges from 5-10 business days. Our logistics architects provide real-time estimates during booking.",
  },
  {
    question: "Do you handle customs clearance and documentation?",
    answer: "Yes, we provide end-to-end customs support. Our experts manage all necessary documentation (Commercial Invoices, Packing Lists, Certificates of Origin) to ensure your cargo clears international borders without delay.",
  },
  {
    question: "How can I track my shipment in real-time?",
    answer: "Every shipment is assigned a unique tracking number. You can use our integrated tracking widget on the homepage or mobile app for live updates, status milestones, and proof of delivery.",
  },
  {
    question: "Are my shipments insured?",
    answer: "We offer comprehensive cargo insurance options for high-value architectural materials and industrial equipment. Protection coverage can be tailored to the specific value and nature of your shipment.",
  },
  {
    question: "Do you provide business-to-business (B2B) logistics solutions?",
    answer: "Absolutely. We specialize in enterprise-level logistics, including inventory management, warehousing, and bulk freight solutions for global architects and manufacturing firms.",
  },
];

export const FAQ = ({ className }: { className?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("max-w-4xl mx-auto px-6", className)}>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-outline/10 rounded-2xl overflow-hidden bg-surface-container-low hover:bg-surface-container-high transition-colors duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-headline font-bold text-lg md:text-xl text-on-surface tracking-tight">
                {faq.question}
              </span>
              <div className="flex-shrink-0 ml-4">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-on-surface-variant" />
                )}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
