
import React from 'react';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;