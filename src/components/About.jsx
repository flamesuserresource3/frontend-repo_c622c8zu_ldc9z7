import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-slate-600">
            I’m Prajju, a 3D animation student exploring character performance, stylized motion, and playful world-building. I love blending cinematic storytelling with bold colors and expressive shapes.
          </p>
          <p className="mt-3 text-slate-600">
            My toolkit includes Blender, Maya, After Effects, and a sketchbook full of ideas. I’m always experimenting with new techniques — from toon shaders to motion graphics — to create delightful, memorable scenes.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Blender', 'Maya', 'After Effects', 'Substance', 'ZBrush', 'Storyboards', 'Rigging Basics'].map((chip) => (
              <span key={chip} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200 via-purple-200 to-fuchsia-200 p-1 shadow-xl md:w-72">
            <div className="flex h-full items-center justify-center rounded-2xl bg-white/70 backdrop-blur">
              <User className="h-20 w-20 text-sky-600" />
            </div>
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
