import { TextReveal } from "../ui/aceternity";
import { Code2, Database, Globe, Layout, Server, Smartphone } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    technologies: ["Node.js", "Express", "Python"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "DevOps",
    technologies: ["Docker", "AWS", "CI/CD"]
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    technologies: ["Figma", "Adobe XD", "Sketch"]
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    technologies: ["React Native", "Flutter"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-black/50" id="skills">
      <TextReveal>
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
          Skills & Expertise
        </h2>
      </TextReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800"
          >
            <div className="text-neutral-300 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-neutral-200 mb-3">
              {skill.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm bg-neutral-800 text-neutral-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}