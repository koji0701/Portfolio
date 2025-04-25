import { TextReveal } from "../ui/aceternity";
import { LitCard } from "../ui/lit-card";
import { SparklesCore } from "../ui/sparkles";

const projects = [
  {
    title: "Intern-X",
    description: "Platform for connecting students with internship opportunities. 2nd @ WashU Meta x Llama Hackathon",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop",
    link: "https://github.com/Intern-X",
    awardWinning: true
  },
  {
    title: "UnveilAI",
    description: "AI tools for content creation and analysis. Finalist @ Google DevFest Hackathon",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "https://github.com/UnveilAI",
    awardWinning: true
  },
  {
    title: "Bear Eats",
    description: "Macro tracker & meal planning iOS app for WashU dining. 1st @ Hack WashU health & fitness track",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://github.com/koji0701/BearEats",
    awardWinning: true
  },
  {
    title: "Issho",
    description: "Strava for student productivity. Track your productivity, give or send a thumbs up for completing work, & get your work done",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop",
    link: "https://github.com/koji0701/Issho",
    awardWinning: false
  },
  {
    title: "Community of Hope",
    description: "Mobile app that connects St. Louis community mentors with teenage moms; built for Community of Hope nonprofit",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2371&auto=format&fit=crop",
    link: "https://github.com/SamLubelsky/CommunityOfHope",
    awardWinning: false
  },
  {
    title: "GetWashU",
    description: "A 2048 game variant inspired by GetMIT, playable with arrow keys or WASD",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2371&auto=format&fit=crop",
    link: "https://github.com/koji0701/GetWashU",
    awardWinning: false
  },
  {
    title: "GameUpGPT",
    description: "AI-powered iMessage extension to help you 'game up'",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2674&auto=format&fit=crop",
    link: "https://github.com/koji0701/GameUpGPT",
    awardWinning: false
  },
  {
    title: "ParkourIsland",
    description: "2D platformer game",
    image: "https://images.unsplash.com/photo-1596662450730-384b8902ba8b?q=80&w=2525&auto=format&fit=crop",
    link: "https://github.com/koji0701/ParkourIsland",
    awardWinning: false
  },
  {
    title: "DuetGame",
    description: "Web version of the popular mobile game Duet",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop",
    link: "https://github.com/koji0701/DuetGame",
    awardWinning: false
  },
  
  {
    title: "Portfolio",
    description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    link: "https://github.com/koji0701/Portfolio",
    awardWinning: false
  }
];
export default function Projects() {
  return (
    <section className="py-10 relative" id="projects">
      {/* Content with relative positioning */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <TextReveal>
          <h1 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            Featured Projects
          </h1>
        </TextReveal>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <LitCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                awardWinning={project.awardWinning}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}