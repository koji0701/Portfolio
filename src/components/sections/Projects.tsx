import { TextReveal } from "../ui/aceternity";
import { Card3D } from "../ui/3d-card";
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
  }
];export default function Projects() {
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
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <Card3D
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