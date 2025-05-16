import { TextReveal } from "../ui/aceternity";
import { LitCard } from "../ui/lit-card";

const projects = [
  {
    title: "Intern-X",
    description: "Llama-powered platform connecting students with internships, recruiters & alumni. 2nd @ WashU Meta x Llama Hackathon.",
    // image: "...", // Removed
    link: "https://github.com/Intern-X",
    awardWinning: true
  },
  {
    title: "UnveilAI",
    description: "Developer tool for rapid onboarding to new codebases. Finalist @ Google DevFest Hackathon.",
    // image: "...", // Removed
    link: "https://github.com/UnveilAI",
    awardWinning: true
  },
  {
    title: "Bear Eats",
    description: "Macro tracker & meal planning iOS app for WashU dining. 1st @ Hack WashU health & fitness track.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/BearEats",
    awardWinning: true
  },
  {
    title: "GameUpGPT",
    description: "AI-powered iMessage extension to craft the perfect reply and 'game up' your conversations.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/GameUpGPT",
    awardWinning: false
  },
  {
    title: "Issho",
    description: "Social productivity app inspired by Strava. Track your work, share progress, and motivate with friends.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/Issho",
    awardWinning: false
  },
  {
    title: "Community of Hope",
    description: "Mobile app connecting St. Louis community mentors with teenage moms, built for a local nonprofit.",
    // image: "...", // Removed
    link: "https://github.com/SamLubelsky/CommunityOfHope",
    awardWinning: false
  },
  {
    title: "GetWashU",
    description: "A 2048-style puzzle game with a WashU twist, inspired by the popular GetMIT game.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/GetWashU",
    awardWinning: false
  },
  {
    title: "ParkourIsland",
    description: "Classic 2D platformer game challenging players with intricate levels and agile movements.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/ParkourIsland",
    awardWinning: false
  },
  {
    title: "DuetGame",
    description: "Web-based adaptation of the popular mobile game Duet, testing reflex and coordination.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/DuetGame",
    awardWinning: false
  },
  {
    title: "This Portfolio",
    description: "The very site you're exploring now, built with React, TypeScript, Tailwind, and Framer Motion.",
    // image: "...", // Removed
    link: "https://github.com/koji0701/Portfolio",
    awardWinning: false
  }
];

export default function Projects() {
  return (
    <section className="relative py-20 md:py-28 w-full" id="projects">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(128, 0, 128, 0.1), transparent 50%), radial-gradient(circle at 50% 100%, rgba(76, 29, 149, 0.1), transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <TextReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-purple-300 to-pink-300">
            Things I've Built
          </h1>
        </TextReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12 justify-items-center"> {/* Slightly reduced gap-y for smallest screens */}
          {projects.map((project, index) => (
            <LitCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              awardWinning={project.awardWinning}
            />
          ))}
        </div>
      </div>
    </section>
  );
}