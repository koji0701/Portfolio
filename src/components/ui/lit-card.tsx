import React, { useState, useRef, useEffect } from 'react';
import { PatternBackground } from './pattern-background';


interface LitCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function LitCard({ title, description, image, link }: LitCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for lighting effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block w-[350px] h-[300px] perspective-1000"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-xl overflow-hidden transform-style-3d transition-transform duration-500 group"
        style={{
          transform: isHovering 
            ? `rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${(mousePosition.y - 0.5) * -10}deg)` 
            : 'rotateY(0deg) rotateX(0deg)',
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Card background with dynamic lighting */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 rounded-xl transition-all duration-500"
          style={{ 
            filter: 'brightness(0.8)',
            boxShadow: isHovering 
              ? `inset ${(mousePosition.x - 0.5) * -40}px ${(mousePosition.y - 0.5) * -40}px 120px rgba(255,255,255,0.1),
                  0 10px 20px rgba(0,0,0,0.2)`
              : 'inset 0 0 80px rgba(0,0,0,0.5)'
          }}
        /> */}
        <PatternBackground 
          pattern="circuit" 
          primaryColor="#1e1b4b" 
          secondaryColor="#4338ca"
          className="absolute inset-0 rounded-xl transition-all duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
        
        {/* Highlight effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          style={{
            background: isHovering
              ? `radial-gradient(
                  circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                  rgba(255, 255, 255, 0.15), 
                  transparent 40%
                )`
              : 'none'
          }}
        />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-10 transform-gpu transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        
        {/* Border light effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.1)`,
            background: 'transparent'
          }}
        />
      </div>
    </a>
  );
}