import { TextReveal } from "../ui/aceternity";
import { SparklesCore } from "../ui/sparkles";

export default function About() {
  return (
    <section className="min-h-screen relative py-20" id="about">
      {/* Background sparkles */}
      <div className="absolute inset-0">
        <SparklesCore
          id="about-sparkles"
          className="w-full h-full"
          particleDensity={100}
          particleColor="#FFFFFF"
          speed={0.3}
          minSize={0.8}
          maxSize={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <TextReveal>
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            About Me
          </h2>
        </TextReveal>

        <div className="space-y-6 text-neutral-300">
          <TextReveal>
            <p className="text-lg leading-relaxed">
              Hi! I'm Koji, a Computer Science and Mathematics student at Washington University in St. Louis. I'm an avid learner passionate about building innovative public-interest technology. 
            </p>
          </TextReveal>

          <TextReveal>
            <p className="text-lg leading-relaxed">
              As a kid, I became passionate about technology through programming video games for the web, which sparked my love for both programming and developing creative products. Currently, I'm exploring new technologies ranging anywhere from autonomous vehicle decision systems, L2 rocket control systems, and full-stack applications for researchers in the WashU School of Medicine. 
            </p>
          </TextReveal>

          <TextReveal>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me running, playing poker, rabbit-holing internet niches, listening to music, or spending time with friends. 
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}