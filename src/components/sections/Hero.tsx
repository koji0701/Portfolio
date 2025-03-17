import { BackgroundGradient, TextReveal } from "../ui/aceternity";
import { Github, Linkedin, Mail } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { SparklesCore } from "../ui/sparkles";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0">
          <SparklesCore
            id="hero-sparkles"
            className="w-full h-full"
            particleDensity={40}
            particleColor="#FFFFFF"
            speed={0.3}
            minSize={0.8}
            maxSize={1.2}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <TextReveal>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 mb-2">
            Koji Wong
          </h1>
        </TextReveal>

        <TextReveal>
          <h2 className="text-2xl md:text-2xl text-neutral-300 mb-8">
            Full Stack Developer
          </h2>
        </TextReveal>

        <TextReveal>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
            
            Computer Science + Mathematics @ <a href="https://washu.edu" className="underline decoration-1 hover:text-neutral-300 transition-colors">Washington University in St. Louis</a>
            
          </p>
        </TextReveal>

        <div className="flex gap-4 justify-center">
          <BackgroundGradient className="rounded-full p-4 bg-black">
            <a href="https://github.com/koji0701" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
            </a>
          </BackgroundGradient>
          
          <BackgroundGradient className="rounded-full p-4 bg-black">
            <a href="https://www.linkedin.com/in/koji-wong-452285225/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
            </a>
          </BackgroundGradient>
          
          <BackgroundGradient className="rounded-full p-4 bg-black">
            <a href="mailto:k.r.wong@wustl.edu">
              <Mail className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
            </a>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}