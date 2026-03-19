import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = links.map(l => l.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'glass py-3 border-white/10' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-400 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Warda Aziz</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white",
                activeSection === link.href.substring(1)
                  ? "bg-white/10 text-white" 
                  : "text-gray-400"
              )}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 ml-2 rounded-full hover:bg-white/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Desktop Resume Button */}
          <a href="/Warda_CV.pdf" target="_blank" rel="noreferrer" download className="ml-4">
            <Button size="sm" className="hidden md:flex">
              Download CV
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-white/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2 text-foreground hover:opacity-80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col container mx-auto px-6 py-4 gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-medium",
                    activeSection === link.href.substring(1)
                      ? "bg-white/10 text-white" 
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Resume Button */}
              <a href="/Warda_CV.pdf" target="_blank" rel="noreferrer" download className="mt-2 w-full">
                <Button className="w-full justify-center">Download CV</Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
