import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react'; // Or Spotify icon if you prefer

interface SongCardProps {
  title: string;
  artist: string;
  albumCover: string;
  spotifyLink: string;
}

export const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  albumCover,
  spotifyLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    cardRef.current.style.setProperty('--mouse-x', `${x}`);
    cardRef.current.style.setProperty('--mouse-y', `${y}`);
  };

  return (
    <motion.a
      href={spotifyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-64 h-80 rounded-2xl overflow-hidden group perspective-1000"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={
        {
          '--mouse-x': 0,
          '--mouse-y': 0,
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          transition: 'transform 0.3s ease-out',
        } as React.CSSProperties
      }
      aria-label={`Listen to ${title} by ${artist} on Spotify`}
    >
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl shadow-black/30 transition-all duration-300 group-hover:bg-white/10" />
      
      {/* Album Cover Container with 3D tilt */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-5 transform-style-3d"
        style={{
          transform: isHovered 
            ? `rotateY(calc(var(--mouse-x) * 10deg)) rotateX(calc(var(--mouse-y) * -10deg)) translateZ(30px) scale(1.05)` 
            : 'rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)',
          transition: 'transform 0.3s ease-out',
        }}
      >
        <img
          src={albumCover}
          alt={`${title} by ${artist}`}
          className="w-full aspect-square rounded-lg object-cover shadow-lg shadow-black/40"
        />
      </motion.div>
      
      {/* Song Info - Improved positioning and appearance */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <motion.h3 
          className="text-xl font-semibold text-white truncate mb-1"
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ y: isHovered ? 0 : 5, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-sm text-neutral-300"
          initial={{ y: 10, opacity: 0.7 }}
          animate={{ y: isHovered ? 0 : 5, opacity: 0.9 }}
          transition={{ duration: 0.3, delay:0.05, ease: "easeOut" }}
        >
          {artist}
        </motion.p>
        
        {/* Spotify Icon / Play Button - more prominent on hover */}
        <motion.div 
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0}}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <PlayCircle className="w-10 h-10 text-green-500 filter drop-shadow(0 0 5px rgba(34,197,94,0.7))" />
        </motion.div>
      </div>
    </motion.a>
  );
};