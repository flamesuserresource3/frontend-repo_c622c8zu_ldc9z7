import React from 'react';
import { Mail, Github, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Contact</h2>
          <p className="mt-3 text-slate-600">
            Want to collaborate or chat about animation? I’m open to internships, freelance projects, and creative experiments.
          </p>

          <div className="mt-6 space-y-3">
            <a href="mailto:hello@prajju.studio" className="inline-flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 text-sky-800 ring-1 ring-sky-200 transition hover:bg-sky-100">
              <Mail className="h-5 w-5" />
              hello@prajju.studio
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-slate-600">
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

        <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input type="text" className="mt-1 w-full rounded-xl border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:bg-white focus:ring-sky-300" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:bg-white focus:ring-sky-300" placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-xl border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-1 ring-transparent transition placeholder:text-slate-400 focus:bg-white focus:ring-sky-300" placeholder="Tell me about your project" />
            </div>
          </div>
          <button type="button" className="mt-5 w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700">
            Send Message
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">This form is a demo. Use the email link to reach out directly.</p>
        </form>
      </div>
    </section>
  );
}
