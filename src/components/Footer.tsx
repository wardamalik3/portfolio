import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">Warda Aziz</h3>
            <p className="text-gray-400 max-w-sm">
              Built with passion for software, cloud, and impactful engineering. Constant learning and building for a better digital world.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://github.com/wardamalik3" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/warda-aziz-bb1889391/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:wardamalik3031@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Warda Aziz. All rights reserved.</p>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </footer>
  );
}
