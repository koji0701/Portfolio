import { TextReveal } from "../ui/aceternity";
import { cn } from "../../utils";
import { useState } from "react";

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

  return (
    <section className="min-h-[80vh] relative py-20" id="work">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Title */}
        <TextReveal>
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            Work Experience
          </h2>
        </TextReveal>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-2">
            <div className="space-y-2">
              {sidebarLinks.map((link) => (
                <div 
                  key={link}
                  onClick={() => setSelectedTab(link)}
                  className={cn(
                    "p-3 text-base cursor-pointer transition-colors",
                    selectedTab === link ? "bg-indigo-950/50 text-indigo-400" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-9">
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="text-2xl font-bold">{selectedExperience.position}</h3>
                <span className="text-xl text-indigo-400">@</span>
                <h3 className="text-2xl font-bold text-indigo-400">{selectedExperience.company}</h3>
              </div>
              
              <p className="text-lg text-gray-400 mb-6">
                {selectedExperience.duration}
              </p>

              <ul className="space-y-3 mb-6">
                {selectedExperience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">▶</span>
                    <p className="text-base text-gray-300">{achievement}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {selectedExperience.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}