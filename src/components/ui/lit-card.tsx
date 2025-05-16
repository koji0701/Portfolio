import React, { useState, useRef } from 'react';
import { PatternBackground } from './pattern-background';
import { Medal, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

interface LitCardProps {
  title: string;
  description: string;
  // image prop is removed
  link: string;
  awardWinning?: boolean;
}

export function LitCard({ title, description, link, awardWinning = false }: LitCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    setMousePosition({ x, y });
  };

  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block w-[300px] h-[260px] perspective-1000 rounded-xl" // Adjusted height
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 }); 
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label={`View project: ${title}`}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-xl overflow-hidden transform-style-3d transition-transform duration-300 ease-out group",
          "bg-gradient-to-br from-neutral-900 via-purple-950/50 to-neutral-900", // Base gradient
          "border border-neutral-800 hover:border-purple-700/50",
          "shadow-xl shadow-black/40"
        )}
        style={{
          transform: isHovering 
            ? `rotateY(${mousePosition.x * 7}deg) rotateX(${mousePosition.y * -7}deg)` // Slightly reduced rotation
            : 'rotateY(0deg) rotateX(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Pattern Overlay */}
        <PatternBackground 
          pattern="circuit" 
          primaryColor="transparent" // Base is handled by the div's bg-gradient
          secondaryColor={isHovering ? "rgba(192, 132, 252, 0.2)" : "rgba(168, 85, 247, 0.1)"} // Lighter purple, more visible on hover
          className="absolute inset-0 rounded-xl transition-all duration-500 opacity-70 group-hover:opacity-100"
        />
        
        {/* Gradient Overlay for depth (optional, can be removed if too busy) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300 rounded-xl" />
        
        {awardWinning && (
          <div className="absolute top-3.5 right-3.5 z-20 p-1 bg-yellow-500/20 rounded-full backdrop-blur-sm">
            <Medal className="w-4 h-4 text-yellow-400 drop-shadow-md" />
          </div>
        )}
        
        {/* Highlight effect (sheen) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          style={{
            background: isHovering
              ? `radial-gradient(
                  circle at ${((mousePosition.x + 1) / 2) * 100}% ${((mousePosition.y + 1) / 2) * 100}%, 
                  rgba(255, 255, 255, 0.08), 
                  transparent 50%
                )`
              : 'none'
          }}
        />
        
        {/* Content Area - Flex column to push link to bottom */}
        <div className="absolute inset-0 p-5 z-10 flex flex-col transform-gpu">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed line-clamp-4 mb-3"> 
              {description}
            </p>
          </div>
          
          <div className="mt-auto"> {/* Pushes the link to the bottom */}
            <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200 text-xs font-medium">
              View Project
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </div>
        </div>
        
        {/* Border light effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px rgba(192, 132, 252, 0.2), 0 0 12px rgba(192, 132, 252, 0.1)`, // Purple glow (using purple-400 shades)
            background: 'transparent'
          }}
        />
      </div>
    </motion.a>
  );
}