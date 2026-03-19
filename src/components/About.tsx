import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Code2, Server, Cloud, Lightbulb } from 'lucide-react';

export function About() {
  const interests = [
    {
      icon: <Code2 className="text-blue-400" size={28} />,
      title: "Full-Stack Engineering",
      desc: "Building scalable, responsive, and performance-optimized web applications with modern frameworks."
    },
    {
      icon: <Server className="text-emerald-400" size={28} />,
      title: "DevOps Practices",
      desc: "Implementing CI/CD pipelines, containerization, and automation to streamline development workflows."
    },
    {
      icon: <Cloud className="text-cyan-400" size={28} />,
      title: "Cloud Computing",
      desc: "Designing and deploying reliable cloud infrastructure and scalable application architectures."
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={28} />,
      title: "Continuous Learning",
      desc: "Driven by curiosity to solve complex problems and adapt to emerging technologies."
    }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Discover my background, career direction, and the engineering principles that drive me forward."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            I am a passionate <strong className="text-foreground">Software Engineer</strong> seeking opportunities to work on practical projects and grow alongside experienced teams.
          </p>
          <p>
            From creating AI-powered systems to full-stack web applications, I enjoy tackling engineering challenges and building scalable, fully automated solutions bridging development, <strong className="text-foreground">DevOps</strong>, and <strong className="text-foreground">Cloud Computing</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((item, idx) => (
            <Card key={idx} className="p-6 bg-secondary/50 border-foreground/5 hover:bg-secondary/80 transition-colors">
              <div className="p-3 bg-foreground/5 inline-block rounded-xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
