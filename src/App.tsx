import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import About from './components/sections/about';
import { SparklesCore } from './components/ui/sparkles';

function App() {
  return (
    <BrowserRouter> 

      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Work />
              <Projects />
              <Skills />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;