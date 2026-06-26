"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { siteConfig } from "@/lib/config";

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-navy relative overflow-hidden py-14"
      aria-label="Company statistics"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-72 h-72 bg-brand-green/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-gold-DEFAULT/8 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="flex items-end justify-center gap-1 mb-1">
                {isInView && (
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      delay={index * 0.1}
                    />
                    <span className="text-brand-green-light">{stat.suffix}</span>
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm font-ui font-medium leading-tight">
                {stat.label}
              </p>
              {/* Divider line on hover */}
              <div className="mt-3 mx-auto w-8 h-0.5 bg-brand-green/40 group-hover:w-16 group-hover:bg-brand-green transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
