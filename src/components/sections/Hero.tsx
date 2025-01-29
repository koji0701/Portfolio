import { BackgroundGradient, TextReveal } from "../ui/aceternity";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 text-center px-4">
        <TextReveal>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 mb-6">
            Koji Wong
          </h1>
        </TextReveal>
        
        <TextReveal>
          <h2 className="text-2xl md:text-3xl text-neutral-300 mb-8">
            Full Stack Developer
          </h2>
        </TextReveal>

        <TextReveal>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
            Creating cool stuff with code.
          </p>
        </TextReveal>

        <div className="flex gap-4 justify-center">
          <BackgroundGradient className="rounded-full p-4 bg-black">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
            </a>
          </BackgroundGradient>
          
          <BackgroundGradient className="rounded-full p-4 bg-black">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
            </a>
          </BackgroundGradient>
          
          <BackgroundGradient className="rounded-full p-4 bg-black">
            <a href="mailto:contact@example.com">
              <Mail className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
            </a>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}