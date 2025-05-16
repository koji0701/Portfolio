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
  BrainCircuit,
  Palette, // For Frontend
  Cog, // For Backend/Embedded
  Zap, // For ML
} from "lucide-react";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils";

interface Skill {
  icon: ReactNode;
  title: string;
  technologies: string[];
  gradient: string; // For card background/border
}

const getTechIcon = (techName: string): ReactNode => {
  const sharedClasses = "w-4 h-4";
  const iconMap: Record<string, ReactNode> = {
    // Frontend
    "SwiftUI": <Smartphone className={cn(sharedClasses, "text-blue-400")} />,
    "Swift UIKit": <Smartphone className={cn(sharedClasses, "text-orange-400")} />,
    "React": <Palette className={cn(sharedClasses, "text-sky-400")} />, // Using Palette for general frontend
    "TypeScript": <FileCode className={cn(sharedClasses, "text-blue-500")} />,
    "Tailwind CSS": <LayoutGrid className={cn(sharedClasses, "text-teal-400")} />,
    // Backend
    "Node.js": <Server className={cn(sharedClasses, "text-green-400")} />,
    "Python": <FileCode className={cn(sharedClasses, "text-yellow-400")} />, // Python is versatile
    "Supabase": <Database className={cn(sharedClasses, "text-emerald-400")} />,
    "PostgreSQL": <Database className={cn(sharedClasses, "text-blue-400")} />,
    "Java": <FileCode className={cn(sharedClasses, "text-orange-500")} />,
    // Embedded
    "C++": <Cpu className={cn(sharedClasses, "text-red-400")} />,
    // ML
    "PyTorch": <BrainCircuit className={cn(sharedClasses, "text-orange-500")} />,
    "Tensorflow": <Zap className={cn(sharedClasses, "text-yellow-500")} />, // Zap for ML power
    "Pandas": <Table className={cn(sharedClasses, "text-purple-400")} />,
    "Sci-Kit": <BrainCircuit className={cn(sharedClasses, "text-pink-400")} />
  };
  
  return iconMap[techName] || <Code2 className={cn(sharedClasses, "text-neutral-400")} />;
};

const skills: Skill[] = [
  {
    icon: <Palette className="w-7 h-7 text-sky-300" />,
    title: "Frontend Development",
    technologies: ["SwiftUI", "Swift UIKit", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-sky-900/70 to-blue-950/70 border-sky-700/50"
  },
  {
    icon: <Cog className="w-7 h-7 text-green-300" />,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "Supabase", "PostgreSQL", "Java"],
    gradient: "from-green-900/70 to-emerald-950/70 border-green-700/50"
  },
  {
    icon: <CircuitBoard className="w-7 h-7 text-red-300" />,
    title: "Embedded Systems",
    technologies: ["C++"],
    gradient: "from-red-900/70 to-rose-950/70 border-red-700/50"
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-300" />,
    title: "Machine Learning",
    technologies: ["PyTorch", "Tensorflow", "Pandas", "Sci-Kit"],
    gradient: "from-yellow-900/70 to-amber-950/70 border-yellow-700/50"
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Removed handleMouseMove and handleMouseLeave for individual cards as it might be too much.
  // The per-card hover scale and glow should be sufficient.

  return (
    <section className="py-20 md:py-28 px-4" id="skills">
      <TextReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400">
          My Toolkit
        </h2>
      </TextReveal>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                "bg-gradient-to-br", 
                skillGroup.gradient.replace('/70', '/40').replace('border-', 'border-2 border-opacity-60 ') // make group icon bg less opaque
              )}>
                {skillGroup.icon}
              </div>
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-300">
                {skillGroup.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skillGroup.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className={cn(
                    "skill-card relative p-4 rounded-xl cursor-default transition-all duration-300 overflow-hidden group",
                    "bg-neutral-900/50 border",
                    hoveredSkill === `${groupIndex}-${techIndex}` 
                      ? `${skillGroup.gradient.replace('/70', '/80')} shadow-lg shadow-current` // Use current color for shadow based on gradient
                      : `${skillGroup.gradient.replace('/70', '/50')} border-opacity-30`
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (techIndex * 0.05) }}
                  onMouseEnter={() => setHoveredSkill(`${groupIndex}-${techIndex}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.03, y: -2 }} // Subtle lift and scale
                >
                  {/* Gloss effect on hover */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                    "bg-gradient-to-tl from-white/5 via-white/20 to-white/5" 
                  )} />
                  
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                      "bg-white/5 group-hover:bg-white/10 transition-colors"
                    )}>
                      {getTechIcon(tech)}
                    </div>
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">{tech}</span>
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