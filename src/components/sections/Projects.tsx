import { TextReveal } from "../ui/aceternity";
import { LitCard } from "../ui/lit-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { SparklesCore } from "../ui/sparkles";
const projects = [
  {
    title: "Bear Eats",
    description: "Macro tracker & meal planner for WashU dining",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://github.com/koji0701/BearEats"
  },
  {
    title: "Issho",
    description: "Strava for student productivity",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop",
    link: "https://github.com/koji0701/Issho"
  },
  {
    title: "Community of Hope",
    description: "Mobile app that connects St. Louis community mentors with teenage moms; built for Community of Hope nonprofit",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2371&auto=format&fit=crop",
    link: "https://github.com/SamLubelsky/CommunityOfHope"
  },
  {
    title: "GetWashU",
    description: "A 2048 game variant inspired by GetMIT, playable with arrow keys or WASD",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2371&auto=format&fit=crop",
    link: "https://github.com/koji0701/GetWashU"
  },
  {
    title: "GameUpGPT",
    description: "AI-powered game development and enhancement tool using GPT technology",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2674&auto=format&fit=crop",
    link: "https://github.com/koji0701/GameUpGPT"
  },
  {
    title: "ParkourIsland",
    description: "3D parkour game set on a mysterious island with challenging obstacles",
    image: "https://images.unsplash.com/photo-1596662450730-384b8902ba8b?q=80&w=2525&auto=format&fit=crop",
    link: "https://github.com/koji0701/ParkourIsland"
  },
  {
    title: "DuetGame",
    description: "Two-player cooperative game with musical elements and synchronized gameplay",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop",
    link: "https://github.com/koji0701/DuetGame"
  },
  {
    title: "Intern-X",
    description: "Platform for connecting students with internship opportunities",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop",
    link: "https://github.com/Intern-X"
  },
  {
    title: "UnveilAI",
    description: "AI tools for content creation and analysis",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "https://github.com/UnveilAI"
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    link: "https://github.com/koji0701/Portfolio"
  }
];
export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 relative min-h-screen" id="projects">
      {/* Background sparkles */}
      <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            className="w-full h-full"
            particleDensity={100}
            particleColor="#FFFFFF"
            speed={0.3}
            minSize={0.8}
            maxSize={1.5}
          />
        </div>

      {/* Content with relative positioning */}
      <div className="relative z-10 max-w-7xl mx-auto px-2">
        <TextReveal>
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            Featured Projects
          </h1>
        </TextReveal>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <LitCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}