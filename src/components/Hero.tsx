import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Terminal } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen z-0" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-8 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">Available for Opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Warda Aziz</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6"
            >
              Software Engineer | DevOps & Cloud Enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-foreground/70 max-w-2xl mb-10 mx-auto lg:mx-0 leading-relaxed"
            >
              Aspiring Software Engineer with hands-on experience in full-stack development, AI-powered applications, and real-time systems, with a strong interest in DevOps and cloud computing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a href="#projects">
                <Button>
                  View Projects
                  <ChevronRight size={18} className="ml-2" />
                </Button>
              </a>
              <a href="/Warda_CV.pdf" target="_blank" rel="noreferrer" download>
                <Button variant="secondary">Download Resume</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Contact Me</Button>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a href="https://github.com/wardamalik3" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/warda-aziz-bb1889391/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:wardamalik3031@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 w-full max-w-md lg:max-w-none relative"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl glass-card border border-foreground/10 p-6 flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 pointer-events-none" />
              
              {/* Window Controls */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Fake Code / Terminal Animation */}
              <div className="font-mono text-sm space-y-2 flex-1">
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                  className="flex items-center text-blue-500 dark:text-blue-400"
                >
                  <Terminal size={14} className="mr-2" />
                  <span>~ initialize_profile.sh</span>
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-foreground/80">
                  <span className="text-emerald-500 dark:text-emerald-400">const</span> <span className="text-blue-500 dark:text-blue-400">developer</span> = {'{'}
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="pl-4 text-foreground/80">
                  name: <span className="text-yellow-600 dark:text-yellow-300">"Warda Aziz"</span>,
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="pl-4 text-foreground/80">
                  role: <span className="text-yellow-600 dark:text-yellow-300">"Software Engineer"</span>,
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="pl-4 text-foreground/80">
                  passions: [<span className="text-yellow-600 dark:text-yellow-300">"DevOps"</span>, <span className="text-yellow-600 dark:text-yellow-300">"Cloud"</span>, <span className="text-yellow-600 dark:text-yellow-300">"Full Stack"</span>],
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-foreground/80">
                  {'}'};
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="pt-4 flex items-center text-emerald-500 dark:text-emerald-400">
                  <span className="animate-pulse">_ system ready...</span>
                </motion.div>
              </div>

              {/* Floating Tech Pills */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 bottom-24 px-4 py-2 glass rounded-full text-xs font-semibold shadow-lg border-blue-500/30 text-blue-300"
              >
                React.js / Next.js
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-6 bottom-16 px-4 py-2 glass rounded-full text-xs font-semibold shadow-lg border-emerald-500/30 text-emerald-300"
              >
                Docker & DevOps
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
