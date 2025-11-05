import React from 'react';
import { Film, Image as ImageIcon } from 'lucide-react';

const ProjectCard = ({ title, description, tags, videoId }) => (
  <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
    <div className="aspect-video w-full overflow-hidden bg-slate-100">
      {videoId ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full items-center justify-center text-slate-400">No video</div>
      )}
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const GalleryImage = ({ src, alt }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <img src={src} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition group-hover:opacity-100" />
  </div>
);

export default function Showcase() {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Projects */}
        <div id="projects" className="scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-sky-100 p-2 text-sky-700 ring-1 ring-sky-200">
              <Film className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Projects</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Short films, character animations, and motion experiments. Each piece explores timing, appeal, and color-rich visual language.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Orbit — A Short Loop"
              description="A playful looping short exploring squash & stretch with toon-shaded cubes."
              tags={["Blender", "Toon Shader", "Loop"]}
              videoId="wX1x5N1h2E0"
            />
            <ProjectCard
              title="Character Beat — Gesture Study"
              description="Expressive body mechanics with snappy timing and cartoony arcs."
              tags={["Maya", "Body Mechanics", "Exaggeration"]}
              videoId="aqz-KE-bpKQ"
            />
          </div>
        </div>

        {/* Gallery */}
        <div id="gallery" className="mt-20 scroll-mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-2 text-purple-700 ring-1 ring-purple-200">
              <ImageIcon className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Gallery</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Frames, look-dev stills, and design experiments with bold, cartoon-inspired color palettes.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <GalleryImage src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1600&auto=format&fit=crop" alt="Neon abstract 1" />
            <GalleryImage src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="Neon abstract 2" />
            <GalleryImage src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop" alt="Neon abstract 3" />
            <GalleryImage src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop" alt="Colorful blocks" />
            <GalleryImage src="https://images.unsplash.com/photo-1611162619976-3d01897f5925?q=80&w=1600&auto=format&fit=crop" alt="3D spheres" />
            <GalleryImage src="https://images.unsplash.com/photo-1527786356706-4a1b3a48c6c1?q=80&w=1600&auto=format&fit=crop" alt="Gradient shapes" />
          </div>
        </div>
      </div>
    </section>
  );
}
