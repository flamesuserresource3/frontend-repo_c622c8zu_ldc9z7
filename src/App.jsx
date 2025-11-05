import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="bg-gradient-to-r from-sky-600 via-purple-600 to-fuchsia-600 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
            PRAJJU
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#home" className="hover:text-sky-700">Home</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#projects" className="hover:text-sky-700">Projects</a>
            <a href="#gallery" className="hover:text-sky-700">Gallery</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-700 sm:text-sm">
            Let’s Talk
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Prajju · Crafted with color and curiosity.
        </div>
      </footer>
    </div>
  );
}

export default App;
