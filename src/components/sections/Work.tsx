import { useState, useRef, useEffect } from "react";
import { TextReveal } from "../ui/aceternity";
import { cn } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, CalendarDays, CheckCircle } from "lucide-react"; // Added icons
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
// Work history data remains the same
const workHistory: WorkHistoryType = {
"Morgan Stanley Tokyo": {
company: "Morgan Stanley Tokyo",
position: "Early Insights Fellow",
duration: "April 2025 - Present",
achievements: [
"Learning about applying technology to the financial services industry and gaining insights into a career in Tokyo."
],
skills: ["Data Analysis", "Financial Modeling", "Python", "Finance", "Technology"]
},
"WashU CS Department": {
company: "Washington University in St. Louis",
position: "Artificial Intelligence Research Assistant",
duration: "Nov 2024 - Present",
achievements: [
"Developing AI to explore scenarios for autonomous vehicle decision systems with Python, PyTorch & Habitat Simulator."
],
skills: ["Python", "PyTorch", "Habitat", "AI", "Autonomous Systems", "Research"]
},
"Google Developer Student Club": {
company: "Google Developer Student Club",
position: "SWE Team Lead",
duration: "Sept 2024 - Present",
achievements: [
"Leading development of a full-stack web application for the WashU School of Medicine using React, TypeScript, FastAPI.",
"Developed a full-stack mobile app for local non-profit organization Community of Hope."
],
skills: ["React", "Expo", "TypeScript", "FastAPI", "Leadership", "Full-Stack"]
},
"Social Fabric": {
company: "Social Fabric LLC",
position: "Founding Software Engineer",
duration: "Oct 2024 - February 2025",
achievements: [
"Frontend development of a social media-esc cross-platform mobile app in React Native, TypeScript, Expo."
],
skills: ["React Native", "TypeScript", "Expo", "Mobile Development", "Frontend", "Startup"]
},
"WURocketry": {
company: "WURocketry",
position: "Software Developer",
duration: "Sept 2024 - January 2025",
achievements: [
"Product development of 10-foot rocket for NASA Student Launch; team nationally ranked in top 10.",
"Developed data logging systems (C & C++) in a subteam of 6 to log rocket flight trajectory and telemetry data.",
],
skills: ["C", "C++", "Embedded Systems", "Control Systems", "Team Collaboration", "Aerospace"]
},
"XR EDU": {
company: "XR EDU",
position: "President",
duration: "Aug 2020 - June 2024",
achievements: [
"Led 100+ person club to develop $2,500 winning project in the Samsung Solve For Tomorrow competition.",
"Co-founded annual hackathon 'Hack the Planet'; $5000 prize sponsored by Adobe, PG&E, AoPS, & Wolfram.",
],
skills: ["Leadership", "Project Management", "Fundraising", "Community Building", "Event Organization"]
},
"CoderDojo": {
company: "TriValley CoderDojo",
position: "Leadership Council",
duration: "Sept 2018 - Sept 2022",
achievements: [
"650+ hours of teaching Python weekly to a total of 60 kids; 1 of 2 teenage mentors out of 90+ adults.",
"Oversaw 14,000+ students, managed $28,000 in club finances, led switch to virtual learning."
],
skills: ["Teaching", "Mentorship", "Python", "Leadership", "Financial Management", "Adaptability"]
},
"Stanford": {
company: "Stanford Medicine Department of Psychiatry and Behavioral Sciences",
position: "Summer Neuroimaging Research Assistant",
duration: "June 2022 - July 2022",
achievements: [
"Under the mentorship of a Stanford postdoc researcher, studied the applications of using machine learning (denoising autoencoders) to reduce physiological noise in fNIRS (a noninvasive neuroimaging technique)."
],
skills: ["Machine Learning", "Research", "Neural Networks", "Data Analysis", "Scientific Computing", "Neuroscience"]
}
};
export default function Work() {
const [selectedTab, setSelectedTab] = useState<string>(Object.keys(workHistory)[0]); // Select first item by default
const sidebarLinks = Object.keys(workHistory);
const selectedExperience = workHistory[selectedTab];
const scrollContainerRef = useRef<HTMLDivElement>(null);
const scroll = (direction: 'left' | 'right') => {
if (scrollContainerRef.current) {
const scrollAmount = direction === 'left' ? -300 : 300; // Adjusted scroll amount
scrollContainerRef.current.scrollBy({
left: scrollAmount,
behavior: 'smooth'
});
}
};
return (
<section className="relative py-20 md:py-28 w-full overflow-hidden" id="work">
{/* Subtle grid background - kept as is, good for depth */}
<div className="absolute inset-0 bg-[length:60px_60px] bg-grid-white/[0.02] z-0" />
<div className="relative z-10 max-w-7xl mx-auto px-4">
    <TextReveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-purple-300 to-pink-300">
        Work Experience
      </h2>
    </TextReveal>

    <div className="relative mb-10"> 
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 group"
        aria-label="Scroll left through work experiences"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 group"
        aria-label="Scroll right through work experiences"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
      </button>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pt-5 pb-6 px-2 md:px-0" // Added pt-5 here
      >
        {sidebarLinks.map((company, index) => (
          <motion.div
            key={company}
            className={cn(
              "experience-card group flex-shrink-0 snap-center relative p-5 rounded-2xl cursor-pointer overflow-hidden w-72 min-h-[180px]",
              "bg-white/5 backdrop-blur-md border",
              selectedTab === company 
                ? "border-purple-500/70" 
                : "border-white/10"
            )}
            initial={{ opacity: 0.7, y: 20, scale: 0.95 }}
            animate={
              selectedTab === company
                ? {
                    opacity: 1, y: -4, scale: 1.03,
                    boxShadow: [
                      "0px 6px 18px rgba(168, 85, 247, 0.25)",
                      "0px 10px 22px rgba(168, 85, 247, 0.35)",
                      "0px 6px 18px rgba(168, 85, 247, 0.25)",
                    ],
                  }
                : { opacity: 1, y: 0, scale: 1, boxShadow: "0px 2px 4px rgba(0,0,0,0.05)" }
            }
            transition={
              selectedTab === company
                ? {
                    y: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.03 },
                    scale: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.03 },
                    opacity: { duration: 0.3, delay: index * 0.03 },
                    boxShadow: { duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
                  }
                : {
                    y: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.03 },
                    scale: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.03 },
                    opacity: { duration: 0.3, delay: index * 0.03 },
                    boxShadow: { duration: 0.3, ease: "easeInOut" },
                  }
            }
            whileHover={{
              scale: selectedTab === company ? 1.08 : 1.06,
              y: selectedTab === company ? -10 : -6,
              boxShadow: selectedTab === company
                ? "0px 18px 35px rgba(168, 85, 247, 0.45)"
                : "0px 12px 25px rgba(255, 255, 255, 0.12)",
              borderColor: selectedTab === company
                ? "rgba(192, 132, 252, 1)" 
                : "rgba(255, 255, 255, 0.5)", 
            }}
            onClick={() => setSelectedTab(company)}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedTab(company)}
            aria-pressed={selectedTab === company}
            aria-label={`Select work experience at ${company}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0 transition-colors duration-300",
                selectedTab === company 
                  ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white" 
                  : "bg-neutral-700/50 text-neutral-300 group-hover:bg-neutral-700 group-hover:text-neutral-100"
              )}>
                {company.substring(0, 1)}
              </div>
              <h3 className={cn(
                "text-lg font-semibold transition-colors duration-300 line-clamp-2",
                selectedTab === company ? "text-white" : "text-neutral-200 group-hover:text-white"
              )}>
                {company}
              </h3>
            </div>

            <p className="text-neutral-300 text-sm mb-1 line-clamp-2">
              {workHistory[company].position}
            </p>
            
            <p className="text-neutral-400 text-xs mb-3">
              {workHistory[company].duration}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {workHistory[company].skills.slice(0, 2).map((skill, i) => ( 
                <span 
                  key={i}
                  className={cn(
                    "px-2 py-0.5 text-xs rounded-full transition-colors duration-300",
                    selectedTab === company ? "bg-purple-500/30 text-purple-200" : "bg-neutral-700/60 text-neutral-300 group-hover:bg-neutral-600/80 group-hover:text-neutral-200"
                  )}
                >
                  {skill}
                </span>
              ))}
              {workHistory[company].skills.length > 2 && (
                <span className={cn("px-2 py-0.5 text-xs rounded-full transition-colors duration-300",
                    selectedTab === company ? "bg-purple-500/30 text-purple-200" : "bg-neutral-700/60 text-neutral-300 group-hover:bg-neutral-600/80 group-hover:text-neutral-200")}>
                  +{workHistory[company].skills.length - 2}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <AnimatePresence mode="wait">
      <motion.div
        key={selectedTab} // Ensures re-render on tab change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl shadow-black/40"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <Briefcase className="w-6 h-6 text-purple-400 shrink-0" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">{selectedExperience.position}</h3>
          </div>
          <div className="flex items-center gap-2 text-neutral-300 mb-2 sm:mb-0">
            <span className="text-purple-400">@</span>
            <h4 className="text-lg md:text-xl font-medium">
              {selectedExperience.company}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-400 sm:ml-auto">
            <CalendarDays className="w-4 h-4 text-neutral-500 shrink-0" />
            <span>{selectedExperience.duration}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-purple-300 mb-3 tracking-wider uppercase">Key Contributions</h5>
          <ul className="space-y-2.5">
            {selectedExperience.achievements.map((achievement, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-2.5"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-neutral-200 text-sm leading-relaxed">{achievement}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-purple-300 mb-3 tracking-wider uppercase">Skills & Technologies</h5>
          <div className="flex flex-wrap gap-2">
            {selectedExperience.skills.map((skill, i) => (
              <motion.span 
                key={i}
                className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-lg text-xs font-medium border border-purple-500/30 shadow-sm hover:bg-purple-500/30 hover:text-purple-100 transition-all"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
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