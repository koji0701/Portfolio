import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import About from './components/sections/about';
import { SparklesCore } from './components/ui/sparkles';
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import { FavoriteSongs } from './components/sections/FavoriteSongs';


function App() {
  return (
    <BrowserRouter> 
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Fixed background effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0">
            <SparklesCore
              id="app-sparkles"
              className="w-full h-full"
              particleDensity={40}
              particleColor="#FFFFFF"
              speed={0.3}
              minSize={0.8}
              maxSize={1.2}
            />
          </div>
        </div>
        
        {/* Main content with higher z-index */}
        <div className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Work />
                <Projects />
                {/* <FavoriteSongs /> */}
                {/* <Skills /> */}
              </>
            } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;