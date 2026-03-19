import { useState } from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Github, ExternalLink, Code, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Projects() {
  const [activeTab, setActiveTab] = useState<'featured' | 'other'>('featured');

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const featuredProjects = [
    {
      title: "AI Resume Analyzer",
      description: "A full-stack web application that helps users improve their resumes through AI-powered analysis, ATS-style scoring, and skill gap detection.",
      summary: "AI Resume Analyzer is a full-stack web application that helps users improve their resumes through AI-powered analysis, ATS-style scoring, job description matching, skill gap detection, and structured reporting.",
      tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "PDF/DOCX Parsing"],
      features: [
        "Resume upload and parsing for PDF/DOCX files",
        "ATS-style resume scoring",
        "Job description matching",
        "Skill gap and missing keyword detection",
        "AI-generated feedback and improvement suggestions",
        "Resume version tracking",
        "Structured dashboard-style reporting"
      ],
      demo: "https://ai-resume-aanlyzer.vercel.app",
      image: "/Ai_resume.png"
    },
    {
      title: "Real-Time Chat Application",
      description: "Built for live communication with user profiles, media sharing, reactions, message status indicators, and instant updates.",
      summary: "A real-time chat application built for live communication with user profiles, media sharing, reactions, message status indicators, and instant updates.",
      tech: ["MERN Stack", "WebSockets", "Cloudinary"],
      features: [
        "User registration and authentication",
        "Profile management with name, bio, and profile picture updates",
        "Real-time messaging using WebSockets",
        "Message reactions",
        "Delivery indicators and double-tick message status",
        "Audio sending",
        "File attachments",
        "Cloudinary integration for media uploads"
      ],
      demo: "https://realtimechatapp-eight.vercel.app",
      image: "/chatapp.png"
    },
    {
      title: "Weather Forecast App",
      description: "Provides current weather details, 5-day forecasting, chart-based visualisation, filtering, and a chatbot.",
      summary: "A weather web application that provides current weather details, 5-day forecasting, chart-based visualisation, filtering, sorting, and a chatbot for user interaction.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js", "Weather API"],
      features: [
        "Current weather information",
        "5-day forecast table",
        "Search by location",
        "Data visualisation using Chart.js",
        "Sorting and filtering options for forecast data",
        "Highest temperature and rainy-day filtering",
        "Chatbot for weather-related questions"
      ],
      demo: "https://weather-app-taupe-one-36.vercel.app",
      image: "/weatherapp.png"
    },
    {
      title: "QuickCart – E-Commerce",
      description: "Full-stack e-commerce application with customer and seller workflows, product listing, and order handling.",
      summary: "QuickCart is a full-stack e-commerce application with customer and seller workflows, product listing, cart management, order handling, and address management.",
      role: "I built the application structure, frontend pages, API routes, and modular flows for users, products, cart, and orders.",
      tech: ["Next.js", "JavaScript", "API Routes", "Context API"],
      features: [
        "Product listing and browsing",
        "Cart management",
        "Order placement flow",
        "Address management",
        "My Orders section",
        "Seller-side product management",
        "Seller-side order management",
        "API-based CRUD operations for products, cart, users, and orders"
      ],
      demo: "https://quick-cart-git-vercel-798ffe-wardamalik3031-gmailcoms-projects.vercel.app/",
      image: "/ecommerce.png"
    },
    {
      title: "Thinkpad – Note Management",
      description: "Intelligent note management system that supports secure note creation, RBAC, Google OAuth, and Python-based PDF parsing.",
      summary: "Thinkpad is a full-stack intelligent note management system that supports secure note creation, role-based access control, Google OAuth login, PDF export, Python-based PDF parsing, and admin-specific functionality.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Python", "PyMuPDF"],
      features: [
        "JWT authentication",
        "Role-Based Access Control (RBAC)",
        "Google OAuth 2.0 login",
        "Login email notifications",
        "Full CRUD support for notes",
        "PDF export from frontend",
        "Python-based PDF reading and extraction",
        "Admin dashboard with analytics planning",
        "Responsive interface with mobile-first navigation"
      ],
      demo: "https://thinkpad-beta.vercel.app",
      image: "/thinkpad.png"
    }
  ];

  const otherProjects = [
    {
      title: "CURA – Doctor-Patient System",
      description: "Healthcare management focusing on appointments, doctor scheduling, and diagnosis handling.",
      tech: ["MERN Stack", "JavaScript"],
      github: "https://github.com/wardamalik3/Cura"
    },
    {
      title: "EmpathAI – Emotion Assistant",
      description: "Emotional AI assistant detecting emotions from text and responding with motivational messages.",
      tech: ["Python", "TensorFlow", "HuggingFace", "Pandas"],
      github: "https://github.com/wardamalik3/EmpathAIrepo"
    },
    {
      title: "Financial Data Curation",
      description: "Python-based data curation for predicting stock/crypto. Scrapes live market data and combines with text sentiment.",
      tech: ["Python", "Web Scraping", "Data processing"],
      github: "https://github.com/wardamalik3/Financial_data_curation"
    },
    {
      title: "Forecasting Application",
      description: "End-to-end financial time-series prediction application with visualisation.",
      tech: ["Python", "Databases", "Candlestick charts"],
      github: "https://github.com/wardamalik3/Forecasting-application"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section 
      id="projects" 
      title="Featured Work" 
      subtitle="A showcase of full-stack engineering, AI integration, and robust system designs."
    >
      <div className="flex justify-center gap-4 mb-12">
        <Button 
          variant={activeTab === 'featured' ? 'primary' : 'ghost'} 
          onClick={() => setActiveTab('featured')}
        >
          Featured Projects
        </Button>
        <Button 
          variant={activeTab === 'other' ? 'primary' : 'ghost'} 
          onClick={() => setActiveTab('other')}
        >
          Additional Work & AI
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'featured' ? (
          <motion.div 
            key="featured"
            variants={container} initial="hidden" animate="show" exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, idx) => (
              <motion.div key={idx} variants={item} className="h-full">
                <Card className="flex flex-col h-full bg-secondary/40 hover:bg-secondary/60 transition-colors group">
                  <div className="h-48 bg-gradient-to-br from-blue-900/50 to-emerald-900/50 relative overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                    ) : (
                      <Code className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                    )}
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
                       <button onClick={() => setSelectedProject(project)} className="p-2 bg-indigo-500/80 rounded-full text-white hover:scale-110 transition-transform shadow-lg backdrop-blur-md">
                         <Info size={18} />
                       </button>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                      <Button onClick={() => setSelectedProject(project)} variant="primary" size="sm">View Details</Button>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <Button size="icon" variant="outline" className="rounded-full"><ExternalLink size={20} /></Button>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col pt-6 relative">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20">{t}</span>
                      ))}
                      {project.tech.length > 3 && <span className="text-xs font-medium px-2 py-1 rounded bg-foreground/5 text-foreground/60">+{project.tech.length - 3}</span>}
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors group/btn w-fit"
                    >
                      <Info size={16} /> See the project details
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="other"
            variants={container} initial="hidden" animate="show" exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {otherProjects.map((project, idx) => (
              <motion.div key={idx} variants={item}>
                <Card className="p-6 h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 flex text-emerald-500 group-hover:opacity-20 group-hover:scale-110 transition-all pointer-events-none">
                    <Github size={64} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 bg-clip-text group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-6 flex-1 pr-12">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                        <Github size={16} className="mr-2" /> View Repository
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-white/20 bg-secondary/95 shadow-2xl rounded-2xl flex flex-col"
            >
              <div className="sticky top-0 right-0 left-0 p-4 flex justify-between items-center border-b border-foreground/10 bg-secondary/80 backdrop-blur-md z-10">
                <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-foreground/5 hover:bg-foreground/10 rounded-full transition-colors text-foreground/70 hover:text-foreground"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 space-y-8 flex-1">
                {selectedProject.image && (
                  <div className="w-full h-[250px] sm:h-[350px] rounded-xl overflow-hidden border border-white/10 shadow-lg relative">
                     <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${selectedProject.image})` }}
                      ></div>
                  </div>
                )}
                
                <section>
                  <h3 className="text-xl font-semibold text-emerald-500 mb-3 flex items-center gap-2">Summary</h3>
                  <p className="text-foreground/80 leading-relaxed">{selectedProject.summary || selectedProject.description}</p>
                </section>
                
                {selectedProject.role && (
                  <section>
                    <h3 className="text-xl font-semibold text-blue-500 mb-3 flex items-center gap-2">My Role</h3>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.role}</p>
                  </section>
                )}
                
                <section>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-3 flex items-center gap-2">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features?.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-foreground/5 rounded-lg border border-foreground/5">
                        <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(250,204,21,0.6)] shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-500 mb-3 flex items-center gap-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
              
              <div className="p-6 border-t border-white/10 bg-secondary/50 flex justify-end">
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                    <Button variant="primary" className="flex items-center gap-2">
                       Visit Live Demo <ExternalLink size={18} />
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
