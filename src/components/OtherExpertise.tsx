import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Brain, Terminal } from 'lucide-react';

export function OtherExpertise() {
  const nlpProjects = [
    {
      title: "Financial Data Curation for FinTech",
      desc: "Python-based data curation collecting structured market data (OHLC prices, volume, etc.) and unstructured financial news/sentiment, aligning both by date in CSV/JSON for prediction.",
      link: "https://github.com/wardamalik3/Financial_data_curation"
    },
    {
      title: "Stock/Crypto/ForEx Forecasting Application",
      desc: "End-to-end forecasting with financial time-series prediction incorporating frontend, backend database, Python models, candlestick visualization, modular architecture, and version control.",
      link: "https://github.com/wardamalik3/Forecasting-application"
    }
  ];

  const devopsSkills = [
    {
      title: "Docker & Containerization",
      desc: "Containerized applications using Dockerfiles, image building, log handling, and Docker Hub publishing."
    },
    {
      title: "Docker Compose & Orchestration",
      desc: "Managed multi-container setups (frontend, backend, database), networks, volumes, environment variables."
    },
    {
      title: "Deployment & Troubleshooting",
      desc: "Configured Ubuntu-based environments, handled Node.js version mismatches, and validated through API testing."
    },
    {
      title: "Networking & Persistence",
      desc: "Configured subnets, private Docker networks, public container exposure, and persistent MongoDB volumes."
    },
    {
      title: "Project Management",
      desc: "Applied software project planning, WBS, scope management, Gantt charts, resource loading, and leveling."
    }
  ];

  return (
    <Section 
      id="expertise" 
      title="Other Expertise" 
      subtitle="Diverse technical experience in NLP, data curation, forecasting, and DevOps."
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* NLP Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/20 p-3 rounded-lg">
              <Brain className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">NLP & AI Modelling</h3>
          </div>
          <div className="space-y-4">
            {nlpProjects.map((project, idx) => (
              <Card key={idx} className="p-6 bg-secondary/50 border-foreground/5 hover:bg-secondary/80 transition-colors">
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{project.desc}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-primary text-sm hover:underline font-medium"
                >
                  View Repository &rarr;
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* DevOps Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-500/20 p-3 rounded-lg">
              <Terminal className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">DevOps & Project Mgt</h3>
          </div>
          <div className="space-y-4">
            {devopsSkills.map((skill, idx) => (
              <Card key={idx} className="p-5 bg-secondary/50 border-foreground/5 hover:bg-secondary/80 transition-colors flex flex-col justify-center">
                <h4 className="text-base font-semibold text-foreground mb-1">{skill.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{skill.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
