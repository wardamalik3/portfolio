import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ id, title, subtitle, className, children, ...props }, ref) => {
  return (
    <section 
      id={id} 
      ref={ref}
      className={cn("py-20 md:py-32 relative overflow-hidden", className)} 
      {...props}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";
