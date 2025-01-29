import { BackgroundGradient, TextReveal } from "../ui/aceternity";

const currentProjects = [
  
]

const projects = [
  {
    title: "Project Alpha",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Project Beta",
    description: "AI-powered content management system using OpenAI's GPT",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Project Gamma",
    description: "Real-time collaboration tool with WebSocket integration",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2371&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4" id="projects">
      <TextReveal>
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
          Featured Projects
        </h2>
      </TextReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] p-6 bg-black aspect-square flex flex-col"
          >
            <div className="relative flex-1 mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-neutral-200 mb-2">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              className="text-sm text-neutral-300 hover:text-white transition-colors"
            >
              Learn more →
            </a>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}