import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <motion.div
      className="relative w-64 h-80 rounded-xl overflow-hidden perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Translucent backdrop */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
      
      {/* Album cover */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <motion.div
          className="w-full aspect-square rounded-lg overflow-hidden"
          animate={{
            rotateY: isHovered ? 15 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={albumCover}
            alt={`${title} by ${artist}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Song info */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
        animate={{
          y: isHovered ? 0 : 10,
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-white truncate">{title}</h3>
        <p className="text-sm text-white/80">{artist}</p>
        
        {spotifyLink && (
            <a 
                href={spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block"
            >
                <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
            </a>
            )}
      </motion.div>
    </motion.div>
  );
};