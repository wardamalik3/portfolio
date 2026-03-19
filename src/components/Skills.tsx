import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import { 
  Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell
} from 'recharts';

export function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: ["C++", "Java", "JavaScript", "TypeScript", "Python", "C"]
    },
    {
      title: "Web Technologies & Frameworks",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["MongoDB"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Cloudinary"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "Cloud Computing"]
    },
    {
      title: "Concepts & Engineering",
      skills: ["OOP", "UML Design", "Agile/Scrum", "CI/CD", "SOLID Principles", "Project Planning"]
    },
    {
      title: "Other Expertise",
      skills: ["AI-powered applications", "Risk Management", "Problem Solving", "Team Collaboration"]
    }
  ];

  const domainData = [
    { subject: 'Full Stack', A: 90, fullMark: 100 },
    { subject: 'DevOps', A: 85, fullMark: 100 },
    { subject: 'Cloud', A: 75, fullMark: 100 },
    { subject: 'AI / Data', A: 80, fullMark: 100 },
    { subject: 'Project Mgmt', A: 70, fullMark: 100 },
    { subject: 'System Design', A: 85, fullMark: 100 },
  ];

  const techStackData = [
    { name: 'JavaScript/TS', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Docker', level: 85 },
    { name: 'MongoDB', level: 70 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#14b8a6'];

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section 
      id="skills" 
      title="Engineering Arsenal" 
      subtitle="A comprehensive toolkit of languages, frameworks, and conceptual knowledge."
      className="bg-secondary/20"
    >
      <div className="grid lg:grid-cols-5 gap-8 mb-16">
        
        {/* Radar Chart */}
        <Card className="lg:col-span-2 p-6 flex flex-col justify-center items-center min-h-[400px]">
          <h3 className="text-xl font-semibold mb-6 w-full text-center">Domain Strengths</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={domainData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Expertise" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Bar Chart */}
        <Card className="lg:col-span-3 p-6 flex flex-col justify-center items-center min-h-[400px]">
          <h3 className="text-xl font-semibold mb-6 w-full text-left">Technology Focus Areas</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={techStackData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="level"
                >
                  {techStackData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="p-6 h-full border-t border-t-blue-500/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-full text-foreground/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
