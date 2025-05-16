import { TextReveal } from "../ui/aceternity";
export default function About() {
  return (
    <section className="relative py-20 md:py-28 w-full" id="about">
      {/* Subtle angled gradient background */}
      <div 
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" 
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#800080] to-[#FFC0CB] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400">
            About Me
          </h2>
        </TextReveal>

        <div className="space-y-8 text-neutral-200 bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-neutral-700/50 shadow-xl">
          <TextReveal>
            <p className="text-lg md:text-xl leading-relaxed">
              Hi! I'm Koji, a Computer Science, Mathematics, & Biomedical Data Science student at Washington University in St. Louis. I'm a developer passionate about crafting innovative public-interest technology that makes a tangible impact.
            </p>
          </TextReveal>

          {/* You can uncomment and refine this section if you wish */}
          <TextReveal>
            <p className="text-lg md:text-xl leading-relaxed">
              My journey into tech began with programming web games, sparking a love for coding and creative product development. Now, I'm diving into diverse fields—from autonomous vehicle decision systems and L2 rocket control systems to full-stack applications for researchers at the WashU School of Medicine.
            </p>
          </TextReveal>

          <TextReveal>
            <p className="text-lg md:text-xl leading-relaxed">
              When I'm not coding, you'll find me running, strategizing at the poker table, exploring internet niches, curating playlists, hunting for deals on Depop, or simply enjoying time with friends.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}