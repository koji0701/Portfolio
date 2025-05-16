import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SongCard } from '../ui/song-card';
import { TextReveal } from '../ui/aceternity'; // Import TextReveal

// Sample data for favorite songs (remains the same)
const favoriteSongs = [
  {
    title: "Glimpse of Us",
    artist: "Joji",
    albumCover: "https://i.scdn.co/image/ab67616d0000b273f33ba583759cd0a8ada4c1b0",
    spotifyLink: "https://open.spotify.com/track/4kJbDHk70Y02Rq8oEvLLi1"
  },
  {
    title: "STAY",
    artist: "The Kid LAROI, Justin Bieber",
    albumCover: "https://i.scdn.co/image/ab67616d0000b2738e6551a2944764bc1e3331c4",
    spotifyLink: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    albumCover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    spotifyLink: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    albumCover: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
    spotifyLink: "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7"
  },
  {
    title: "bad guy",
    artist: "Billie Eilish",
    albumCover: "https://i.scdn.co/image/ab67616d0000b273546c25a2e327ec5132ebf2aa",
    spotifyLink: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"
  },
  {
    title: "drivers license",
    artist: "Olivia Rodrigo",
    albumCover: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
    spotifyLink: "https://open.spotify.com/track/7lPN2DXiMsVn7XUKtOW1CS"
  }
];

export const FavoriteSongs: React.FC = () => {
  const containerRef = useRef(null);
  // Note: The scroll-linked animations (opacity, yTransform) might conflict with
  // the fixed background if this section is very long. For now, let's keep them
  // but be mindful of overall page scroll performance and visual consistency.
  // If issues arise, these could be simplified or replaced with whileInView animations.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });
  
  // Adjusted transform ranges for a more subtle effect
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const yTransform = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [50, 0, 0, -50]);
  
  return (
    <section 
      id="favorite-songs" 
      className="relative w-full py-20 md:py-28 overflow-hidden" // Increased padding
      ref={containerRef}
    >
      {/* Optional: Subtle background gradient for this section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-purple-950/30 to-black" />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, y: yTransform }}
      >
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
            Current Jams
          </h2>
        </TextReveal>
        
        {/* Music visualizer animation - kept for visual flair */}
        {/* Consider making its position relative to the title or removing if too busy */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full flex space-x-1.5 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
          {[...Array(15)].map((_, i) => ( // Reduced count
            <motion.div
              key={i}
              className="w-1.5 bg-gradient-to-t from-purple-600 to-pink-600 rounded-full" // Thicker bars
              animate={{
                height: [4, 12, 24, 16, 4], // Adjusted heights
                opacity: [0.4, 0.7, 1, 0.7, 0.4]
              }}
              transition={{
                duration: 1.8, // Slightly slower
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
          {favoriteSongs.map((song, index) => (
            // The SongCard itself now has whileInView, so this outer motion.div might be redundant
            // unless used for a staggered effect NOT handled by the card.
            // For simplicity, we can rely on SongCard's internal animation.
            <SongCard
              key={index} // Ensure key is on the direct mapped element
              title={song.title}
              artist={song.artist}
              albumCover={song.albumCover}
              spotifyLink={song.spotifyLink}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};