import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const S = { smooth: 'easeInOutQuart', duration: 900, offset: -88, spy: true, isDynamic: true };

const education = [
  { name: 'SDN Simomulyo VIII Surabaya', level: 'Elementary School', duration: '2009 – 2015' },
  { name: 'SMP Taman Pelajar Surabaya', level: 'Junior High School', duration: '2015 – 2018' },
  { name: 'SMK Barunawati Surabaya', level: 'Vocational — Computer & Network Engineering (TKJ)', duration: '2018 – 2021' },
  { name: 'Universitas 17 Agustus 1945 Surabaya', level: "Bachelor's — Informatics Engineering", duration: '2022 – 2026' },
];

const certificates = [
  { name: 'Reactjs Web Front End Bootcamp', org: 'Sanbercode', link: '/certificates/Sertifikat Bootchamp Sanbercode.pdf' },
  { name: 'Internship at PT Pelindo Husada Citra', org: 'RS PHC Surabaya', link: '/certificates/Sertifikat Internship at PT Pelindo Husada Citra.pdf' },
];

function About() {
  return (
    <section id="about" className="relative pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">

        <div className="mt-4 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[0.95] tracking-tight">
              <span className="text-slate-900">Full Stack</span> <span className="text-gradient">Developer</span>
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed text-justify">
              Informatics graduate focused on building functional, scalable & user-friendly web applications with React, Node.js, Laravel & modern technologies.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 text-justify">
              Hi, I’m Agung Priyanto — an Informatics graduate focused on Full Stack Web Development and passionate about building modern, functional, and user-focused web applications.
              I have hands-on experience developing web applications using technologies such as React.js, Tailwind CSS, JavaScript, Node.js, Express.js, PHP, and Laravel. I enjoy working across both frontend and backend development, from creating responsive and intuitive user interfaces to developing backend systems and APIs.
              I also have experience using Python and FastAPI to build a backend service for my final-year project, supporting the application’s calculation process. While continuing to strengthen my skills, I enjoy exploring new technologies and applying modern development practices to create functional and engaging digital solutions.
              As a fresh graduate, I continue to expand my technical knowledge through personal, academic, and project-based experience. Feel free to explore my projects and development journey on GitHub: github.com/Agungpriyanto16.

            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ScrollLink to="portfolio" spy={S.spy} smooth={S.smooth} duration={S.duration} offset={S.offset} isDynamic={S.isDynamic} className="btn-gradient text-white text-sm font-semibold px-7 py-3 rounded-full cursor-pointer shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                View Projects <span>↗</span>
              </ScrollLink>
              <ScrollLink to="contact" spy={S.spy} smooth={S.smooth} duration={S.duration} offset={S.offset} isDynamic={S.isDynamic} className="glass glass-hover text-slate-700 text-sm font-semibold px-7 py-3 rounded-full cursor-pointer inline-flex items-center gap-2">
                Contact Me
              </ScrollLink>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div><p className="text-2xl font-bold text-slate-900">10+</p><p className="text-[11px] font-mono tracking-widest text-slate-500">PROJECTS</p></div>
              <div className="w-px h-8 bg-slate-200" />
              <div><p className="text-2xl font-bold text-slate-900">2</p><p className="text-[11px] font-mono tracking-widest text-slate-500">INTERNSHIPS</p></div>
              <div className="w-px h-8 bg-slate-200" />
              <div><p className="text-2xl font-bold text-slate-900">∞</p><p className="text-[11px] font-mono tracking-widest text-slate-500">LEARNING</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.12 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/15 via-indigo-500/15 to-violet-500/15 blur-3xl rounded-[32px]" />
            <div className="relative glass-strong rounded-[28px] p-3 shadow-xl">
              <div className="rounded-[20px] overflow-hidden bg-white border border-slate-200">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" /><span className="w-3 h-3 rounded-full bg-yellow-400/80" /><span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 font-mono text-xs text-slate-500">portfolio — agung.dev</span>
                </div>
                <div className="p-5">
                <img src="/Images/Agung.png" alt="Agung" className="w-full aspect-[4/3] object-cover object-[center_32%] rounded-2xl border border-slate-200" onError={(e) => (e.target.style.display = 'none')}/>
                  <div className="mt-4 glass rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Agung Priyanto</p>
                      <p className="text-xs font-mono text-slate-500">Surabaya • Full Stack</p>
                    </div>
                    <a href="https://github.com/Agungpriyanto16" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full btn-gradient grid place-items-center text-white text-sm">↗</a>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['React','Node.js','Laravel','Tailwind'].map(t=>(
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -bottom-8 -left-2 glass rounded-2xl px-4 py-3 items-center gap-3 shadow-lg">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 grid place-items-center text-emerald-600 text-sm">✓</span>
              <div><p className="text-xs font-bold text-slate-900 leading-none">Clean Code</p><p className="text-[11px] text-slate-500">Maintainable & scalable</p></div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-xs font-mono tracking-[0.16em] text-slate-500 flex items-center gap-2"><span className="w-7 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" /> EDUCATION</h3>
            <div className="mt-3 grid gap-3">
              {education.map((e) => (
                <div key={e.name} className={`rounded-2xl p-4 border flex gap-3 ${e.highlight ? 'glass-strong border-cyan-500/20 shadow-sm' : 'glass'}`}>
                  <div className={`w-1 rounded-full shrink-0 ${e.highlight ? 'bg-gradient-to-b from-cyan-400 to-indigo-500' : 'bg-slate-200'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[11px] font-mono text-slate-500">{e.duration}</p>
                      {e.highlight && <span className="px-2 py-0.5 rounded-full btn-gradient text-white text-[10px] font-mono tracking-widest">CURRENT</span>}
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-900 leading-tight">{e.name}</p>
                    <p className="text-xs text-slate-500">{e.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}>
            <h3 className="text-xs font-mono tracking-[0.16em] text-slate-500 flex items-center gap-2"><span className="w-7 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500" /> CERTIFICATES</h3>
            <div className="mt-3 grid gap-3">
              {certificates.map((c) => (
                <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer" className="group glass glass-hover rounded-2xl p-4 flex gap-3 items-center">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 grid place-items-center text-white shrink-0 shadow-md">◈</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono tracking-widest text-slate-500">{c.org}</p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 leading-tight">{c.name}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-600 shrink-0">Open →</span>
                </a>
              ))}
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-4 py-3">
                <p className="text-xs font-semibold text-slate-700">More credentials on the way</p>
                <p className="text-xs text-slate-500">Continuously learning — new certificates will appear here.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default About;
