import { BackgroundGradient, TextReveal } from "../ui/aceternity";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden w-full px-4">
      {/* Content */}
      <div className="relative z-10 text-center">
        <TextReveal>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500 mb-2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(to right, #A855F7, #EC4899, #F97316, #EC4899, #A855F7)', // purple-500, pink-500, orange-500
              backgroundSize: "200% auto",
            }}
          >
            Koji Wong
          </motion.h1>
        </TextReveal>

        <TextReveal>
          <h2 className="text-2xl md:text-3xl text-neutral-300 mb-8 font-light tracking-wide">
            Full Stack Developer & Innovator
          </h2>
        </TextReveal>

        <TextReveal>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            Computer Science + Mathematics @ <a href="https://washu.edu" target="_blank" rel="noopener noreferrer" className="underline decoration-1 hover:text-purple-400 transition-colors duration-300">Washington University in St. Louis</a>
            <br />
            Incoming SWE Intern @ NYC Mayor's Office for Economic Opportunity
          </p>
        </TextReveal>

        <div className="flex gap-6 justify-center">
          {[
            { href: "https://github.com/koji0701", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/koji-wong-452285225/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:k.r.wong@wustl.edu", icon: Mail, label: "Email" },
          ].map((item) => (
            <BackgroundGradient key={item.href} className="rounded-full p-0.5 bg-black group" animate={false}>
              <a 
                href={item.href} 
                target={item.href.startsWith("http") ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                className="block p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-all duration-300"
                aria-label={`Visit Koji Wong's ${item.label}`}
              >
                <item.icon className="w-7 h-7 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </a>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
}