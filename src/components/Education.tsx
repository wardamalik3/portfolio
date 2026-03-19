import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "National University of Computer and Emerging Sciences",
      period: "Expected Graduation: 2026",
      location: "Pakistan"
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Fauji Foundation College",
      period: "Completed: 2021",
      location: "Pakistan"
    }
  ];

  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="Academic background laying the foundation for engineering excellence."
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {education.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card className="h-full p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all border-foreground/5">
              <div className="absolute -right-6 -top-6 text-foreground/5 group-hover:text-emerald-500/10 transition-colors">
                <GraduationCap size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-400 mb-6 w-fit">
                  <GraduationCap size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">{item.degree}</h3>
                <h4 className="text-blue-500 dark:text-blue-400 font-medium mb-6">{item.institution}</h4>
                
                <div className="mt-auto pt-6 border-t border-foreground/10 space-y-2">
                  <div className="flex items-center text-sm text-foreground/70">
                    <Calendar size={16} className="mr-3 text-foreground/50" />
                    {item.period}
                  </div>
                  <div className="flex items-center text-sm text-foreground/70">
                    <MapPin size={16} className="mr-3 text-foreground/50" />
                    {item.location}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
