import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, glass = true, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-2xl overflow-hidden",
        glass ? "glass-card hover:border-white/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] bg-slate-900/40" : "bg-secondary",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";
