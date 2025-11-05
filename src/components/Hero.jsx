import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Youtube, Instagram, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-100">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve text legibility without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-sky-100/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm ring-1 ring-sky-200">
          <Rocket className="h-4 w-4" />
          3D Animation • Motion Design • Storytelling
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-sky-600 via-purple-600 to-fuchsia-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Prajju — 3D Animation Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-slate-600 md:text-lg">
          A colorful collection of animation projects, short films, and playful design experiments. Crafted with a love for characters, motion, and vibrant worlds.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:translate-y-[-1px] hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-sky-700 ring-1 ring-sky-200 backdrop-blur transition hover:bg-white"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-slate-600">
          <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="group">
            <Youtube className="h-6 w-6 transition group-hover:text-sky-600" />
          </a>
          <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
            <Instagram className="h-6 w-6 transition group-hover:text-sky-600" />
          </a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="group">
            <Github className="h-6 w-6 transition group-hover:text-sky-600" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="group">
            <Linkedin className="h-6 w-6 transition group-hover:text-sky-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
