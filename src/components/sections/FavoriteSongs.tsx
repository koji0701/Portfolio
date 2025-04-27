import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SongCard } from '../ui/song-card';

// Sample data for favorite songs
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  return (
    <section 
      id="favorite-songs" 
      className="relative min-h-screen w-full py-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 backdrop-blur-2xl" /> */}
      
      {/* Content container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, y: yTransform }}
      >
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Current Favorites
          </h2>

        </div>
        
        {/* Music visualizer animation */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 flex space-x-1 mb-8">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
              animate={{
                height: [5, 15, 30, 20, 5],
                opacity: [0.5, 0.8, 1, 0.8, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Song grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {favoriteSongs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <SongCard
                title={song.title}
                artist={song.artist}
                albumCover={song.albumCover}
                spotifyLink={song.spotifyLink}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};