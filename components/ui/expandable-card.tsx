"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExpandableCard({
  cards,
}: {
  cards: {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: React.ReactNode | (() => React.ReactNode);
  }[];
}) {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[101] px-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-6 right-6 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-10 w-10 shadow-2xl z-[102]"
              onClick={() => setActive(null)}
            >
              <X className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={600}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 md:h-80 object-cover object-center"
                />
              </motion.div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-black font-headline text-neutral-800 dark:text-neutral-100 uppercase tracking-tighter"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-primary font-bold uppercase tracking-widest text-xs mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    className="px-6 py-2.5 text-xs rounded-full font-bold bg-primary text-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 dark:text-neutral-400 font-body leading-relaxed text-sm md:text-base"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex items-center gap-4 bg-surface-container-low dark:bg-neutral-800/50 hover:bg-surface-container-high dark:hover:bg-neutral-800 border border-white/5 rounded-2xl cursor-pointer transition-colors duration-200"
          >
            <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0">
              <img
                width={64}
                height={64}
                src={card.src}
                alt={card.title}
                className="h-16 w-16 rounded-xl object-cover"
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-bold text-neutral-800 dark:text-neutral-100 truncate text-sm md:text-base uppercase tracking-tight"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-500 dark:text-neutral-400 text-xs truncate"
              >
                {card.description}
              </motion.p>
            </div>
            <motion.span
              layoutId={`button-${card.title}-${id}`}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 group-hover:bg-primary group-hover:text-black transition-colors"
            >
              +
            </motion.span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
