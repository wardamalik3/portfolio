import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Code, Server } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Truck It In",
      period: "Present",
      icon: <Server className="text-emerald-400" size={20} />,
      achievements: [
        "Worked on CI/CD pipelines, Docker-based deployments, and cloud infrastructure optimization.",
        "Contributed to deployment automation and more reliable release workflows.",
        "Managed frontend, backend, and database services using Docker Compose."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Various Projects",
      period: "2023 - Present",
      icon: <Code className="text-blue-400" size={20} />,
      achievements: [
        "Built multiple full-stack web applications using MERN stack, Next.js, Node.js, and MongoDB.",
        "Developed AI-powered, real-time, and CRUD-based systems with modern web technologies.",
        "Implemented secure architectures including RBAC, OAuth 2.0, and payment gateways."
      ]
    }
  ];

  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="A track record of building, optimizing, and deploying reliable software."
      className="bg-secondary/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-foreground/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 relative md:flex md:justify-between items-start md:gap-8 group">
              
              <div className="absolute -left-[21px] md:relative md:left-0 md:flex-shrink-0 w-10 h-10 rounded-full bg-secondary border border-foreground/20 flex items-center justify-center z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                {exp.icon}
              </div>

              <Card className="ml-8 md:ml-0 p-6 flex-1 bg-secondary/30 hover:bg-secondary/50 border-foreground/5 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/5 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-blue-500 dark:text-blue-400 font-medium">{exp.company}</div>
                  </div>
                  <span className="text-sm text-foreground/60 px-3 py-1 rounded-full bg-foreground/5 inline-block self-start sm:self-auto border border-foreground/5">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mt-4 text-foreground/80">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-sm leading-relaxed before:content-['▹'] before:mr-3 before:text-emerald-500 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
