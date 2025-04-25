import { TextReveal } from "../ui/aceternity";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  CircuitBoard,
  Cpu,
  FileCode,
  LayoutGrid,
  Table,
  BrainCircuit
} from "lucide-react";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils";

interface Skill {
  icon: ReactNode;
  title: string;
  technologies: string[];
}

// Function to get an appropriate icon for a technology
const getTechIcon = (techName: string): ReactNode => {
  const iconMap: Record<string, ReactNode> = {
    "SwiftUI": <Smartphone className="w-4 h-4" />,
    "Swift UIKit": <Smartphone className="w-4 h-4" />,
    // "React": <CodeXml className="w-4 h-4" />,
    "TypeScript": <FileCode className="w-4 h-4" />,
    "Tailwind CSS": <LayoutGrid className="w-4 h-4" />,
    "Node.js": <Server className="w-4 h-4" />,
    "Python": <FileCode className="w-4 h-4" />,
    "Supabase": <Database className="w-4 h-4" />,
    "PostgreSQL": <Database className="w-4 h-4" />,
    "Java": <FileCode className="w-4 h-4" />,
    "C++": <Cpu className="w-4 h-4" />,
    "PyTorch": <BrainCircuit className="w-4 h-4" />,
    "Tensorflow": <BrainCircuit className="w-4 h-4" />,
    "Pandas": <Table className="w-4 h-4" />,
    "Sci-Kit": <BrainCircuit className="w-4 h-4" />
  };
  
  return iconMap[techName] || <Code2 className="w-4 h-4" />;
};

const skills: Skill[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    technologies: ["SwiftUI", "Swift UIKit", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "Supabase", "PostgreSQL", "Java"]
  },
  {
    icon: <CircuitBoard className="w-6 h-6" />,
    title: "Embedded Systems",
    technologies: ["C++"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Machine Learning",
    technologies: ["PyTorch", "Tensorflow", "Pandas", "Sci-Kit"]
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Handler for mouse move effect similar to Work.tsx
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    card.style.transition = "transform 0.5s";
  };

  return (
    <section className="py-10 px-4 bg-black/50" id="skills">
      <TextReveal>
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
          Skills & Expertise
        </h2>
      </TextReveal>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-gradient-to-r from-indigo-950 to-purple-950 text-indigo-300 border border-indigo-800/40"
              )}>
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-300">
                {skillGroup.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {skillGroup.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className={cn(
                    "skill-card relative p-3 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden",
                    "bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-indigo-800/20",
                    hoveredSkill === `${groupIndex}-${techIndex}` ? "shadow-lg shadow-indigo-500/15" : ""
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (techIndex * 0.05) }}
                  onMouseEnter={() => setHoveredSkill(`${groupIndex}-${techIndex}`)}
                  onMouseLeave={(e) => {
                    setHoveredSkill(null);
                    handleMouseLeave(e);
                  }}
                  onMouseMove={handleMouseMove}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Glow effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    hoveredSkill === `${groupIndex}-${techIndex}` ? "opacity-100" : "",
                    "bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"
                  )} />
                  
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center",
                      "bg-gradient-to-r from-indigo-600/40 to-purple-600/40 border border-indigo-500/20"
                    )}>
                      {getTechIcon(tech)}
                    </div>
                    <span className="text-sm font-medium text-indigo-200">{tech}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}