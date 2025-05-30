import { TextReveal } from "../ui/aceternity";
export default function About() {
  return (
    <section className="relative py-10 w-full" id="about">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <TextReveal>
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            About Me
          </h2>
        </TextReveal>

        <div className="space-y-6 text-neutral-300">
          <TextReveal>
            <p className="text-lg leading-relaxed">
              Hi! I'm Koji, a Computer Science, Mathematics, & Biomedical Data Science student at Washington University in St. Louis. I'm a developer passionate about developing innovative public-interest technology. 
            </p>
          </TextReveal>


          {/* <TextReveal>
            <p className="text-lg leading-relaxed">
              As a kid, I became passionate about technology through programming video games for the web, which sparked my love for both programming and developing creative products. Currently, I'm exploring new technologies ranging anywhere from autonomous vehicle decision systems, L2 rocket control systems, and full-stack applications for researchers in the WashU School of Medicine. 
            </p>
          </TextReveal> */}

          <TextReveal>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me running, playing poker, rabbit-holing internet niches, listening to music, low-balling on Depop, or spending time with friends. 
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}