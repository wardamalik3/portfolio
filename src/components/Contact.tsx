import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';


export function Contact() {
  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Currently open for new opportunities. Let's discuss how I can contribute to your team."
      className="bg-secondary/10"
    >
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-900/20 to-emerald-900/20 p-1 md:p-px rounded-3xl">
        <div className="grid lg:grid-cols-5 gap-0 bg-background/80 rounded-[23px] overflow-hidden backdrop-blur-xl border border-foreground/5">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 p-8 md:p-12 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-foreground/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Let's connect</h3>
            <p className="text-foreground/70 mb-10 leading-relaxed">
              Whether you have a question, a project idea, or a job opportunity, feel free to reach out. I'll do my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:wardamalik3031@gmail.com" className="flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 transition-all group">
                <div className="p-3 bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-foreground/60 font-medium">Email</div>
                  <div className="text-foreground font-medium">wardamalik3031@gmail.com</div>
                </div>
              </a>

              <a href="tel:03128708970" className="flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 transition-all group">
                <div className="p-3 bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-foreground/60 font-medium">Phone</div>
                  <div className="text-foreground font-medium">03128708970</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/warda-aziz-bb1889391/" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 transition-all group">
                <div className="p-3 bg-blue-600/20 text-blue-600 dark:text-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div className="ml-4">
                  <div className="text-sm text-foreground/60 font-medium">LinkedIn</div>
                  <div className="text-foreground font-medium">Warda Aziz</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form (UI only placeholder or purely mailto) */}
          <div className="lg:col-span-3 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -z-10" />
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submission goes here!"); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-secondary border border-foreground/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-foreground/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-secondary border border-foreground/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-foreground/40" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 ml-1">Subject</label>
                <input type="text" placeholder="Opportunity for Software Engineer" className="w-full bg-secondary border border-foreground/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-foreground/40" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                <textarea rows={5} placeholder="Hello Warda, I'd like to discuss..." className="w-full bg-secondary border border-foreground/10 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none placeholder:text-foreground/40" />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send size={18} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
}
