
import { useState, useRef, useEffect } from "react";
import { TextReveal } from "../ui/aceternity";
import { cn } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
  skills: string[];
};

type WorkHistoryType = {
  [key: string]: WorkExperience;
};

const workHistory: WorkHistoryType = {
  "AI Research": {
    company: "Washington University in St. Louis",
    position: "Artificial Intelligence Research Assistant",
    duration: "Nov 2024 - Present",
    achievements: [
      "Developing AI to explore scenarios for autonomous vehicle decision systems with Python, PyTorch & Carla"
    ],
    skills: ["Python", "PyTorch", "Carla", "AI", "Autonomous Systems"]
  },
  "Social Fabric": {
    company: "Social Fabric LLC",
    position: "Founding Software Developer",
    duration: "Oct 2024 - Present",
    achievements: [
      "Frontend development of a social media-esc cross-platform mobile app in React Native, TypeScript, Expo"
    ],
    skills: ["React Native", "TypeScript", "Expo", "Mobile Development", "Frontend"]
  },
  "WURocketry": {
    company: "WURocketry",
    position: "United Flight Software Developer",
    duration: "Sept 2024 - Present",
    achievements: [
      "Product development of 10-foot rocket for NASA Student Launch; team nationally ranked in top 10",
      "Developing airbrake control algorithms (C & C++) in a subteam of 6 to control rocket flight trajectory to predicted apogee",
      "Working closely with other subteams (60+ students) for full rocket development"
    ],
    skills: ["C", "C++", "Embedded Systems", "Control Systems", "Team Collaboration"]
  },
  "XR EDU": {
    company: "XR EDU",
    position: "President",
    duration: "Aug 2020 - June 2024",
    achievements: [
      "Led 100+ person club to develop $2,500 winning project in the Samsung Solve For Tomorrow competition",
      "Co-founded annual hackathon 'Hack the Planet'; $5000 prize sponsored by Adobe, PG&E, AoPS, & Wolfram",
      "Managed $100,000 club funds to establish the first maker space at my high school"
    ],
    skills: ["Leadership", "Project Management", "Event Planning", "Fundraising", "Team Building"]
  },
  "CoderDojo": {
    company: "TriValley CoderDojo",
    position: "Leadership Council",
    duration: "Sept 2018 - Sept 2022",
    achievements: [
      "650+ hours of teaching Java & Python weekly to a total of 60 kids; 1 of 2 teenage mentors out of 90+ adults",
      "Oversaw 14,000+ students, managed $28,000 in club finances, led switch to virtual learning"
    ],
    skills: ["Teaching", "Java", "Python", "Leadership", "Financial Management"]
  },
  "Stanford": {
    company: "Stanford Medicine Department of Psychiatry and Behavioral Sciences",
    position: "Summer Neuroimaging Research Assistant",
    duration: "June 2022 - July 2022",
    achievements: [
      "Under the mentorship of a Stanford postdoc researcher, studied the applications of using machine learning (denoising autoencoders) to reduce physiological noise in fNIRS (a noninvasive neuroimaging technique)"
    ],
    skills: ["Machine Learning", "Research", "Neural Networks", "Data Analysis", "Scientific Computing"]
  }
};

export default function Work() {
  const [selectedTab, setSelectedTab] = useState<string>("AI Research");
  const sidebarLinks = Object.keys(workHistory);
  const selectedExperience = workHistory[selectedTab];
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Add scroll container ref for carousel
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll function for carousel navigation
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".experience-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
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
    <section className="min-h-screen relative py-8 overflow-hidden" id="work">
      {/* Subtle grid background - neutral color */}
      <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-white/[0.02] z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Title */}
        <TextReveal>
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-indigo-200 to-neutral-300">
            Work Experience
          </h2>
        </TextReveal>

        {/* Experience cards carousel */}
        <div className="relative mb-6">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
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
            {sidebarLinks.map((company) => (
              <motion.div
                key={company}
                className={cn(
                  "experience-card flex-shrink-0 snap-center relative p-4 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden w-64",
                  selectedTab === company 
                    ? "bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-2 border-indigo-500/30" 
                    : "bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-800/20",
                  hoveredCard === company && selectedTab !== company ? "shadow-lg shadow-indigo-500/15" : ""
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: sidebarLinks.indexOf(company) * 0.1 }}
                onClick={() => setSelectedTab(company)}
                onMouseEnter={() => setHoveredCard(company)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  handleMouseLeave(e);
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glow effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-300",
                  selectedTab === company ? "opacity-100" : "",
                  "bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"
                )} />

                {/* Company circle indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                    selectedTab === company 
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white" 
                      : "bg-indigo-950 text-indigo-400"
                  )}>
                    {company.substring(0, 1)}
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold transition-colors",
                    selectedTab === company ? "text-white" : "text-indigo-300"
                  )}>
                    {company}
                  </h3>
                </div>

                <p className="text-indigo-200/80 mb-1 text-xs">
                  {workHistory[company].position}
                </p>
                
                <p className="text-indigo-300/60 text-xs mb-2">
                  {workHistory[company].duration}
                </p>

                {/* Preview skill tags */}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {workHistory[company].skills.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-full text-indigo-200 bg-indigo-800/30"
                    >
                      {skill}
                    </span>
                  ))}
                  {workHistory[company].skills.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-full text-indigo-200 bg-indigo-800/30">
                      +{workHistory[company].skills.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed view */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-indigo-950/70 to-purple-950/70 rounded-2xl p-5 border border-indigo-600/20 backdrop-blur-sm"
          >
            <div className="flex items-baseline flex-wrap gap-3 mb-3">
              <h3 className="text-xl font-bold text-white">{selectedExperience.position}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg text-indigo-400">@</span>
                <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                  {selectedExperience.company}
                </h4>
              </div>
              <div className="ml-auto">
                <span className="text-xs text-indigo-300 font-light">
                  {selectedExperience.duration}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="text-indigo-300 mb-2 text-sm font-medium">Experiences</h5>
              <ul className="space-y-2">
                {selectedExperience.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="min-w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px]">
                      {i + 1}
                    </div>
                    <p className="text-white/90 text-xs">{achievement}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-indigo-300 mb-2 text-sm font-medium">Technologies & Skills</h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedExperience.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="px-2.5 py-0.5 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white rounded-lg text-xs font-medium border border-indigo-500/30 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}