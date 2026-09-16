import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { role: 'Internship', company: 'RS PHC Surabaya', duration: '01 Oct 2019 – 31 Dec 2019', location: 'Surabaya, Indonesia', tag: 'IT Support / Web Development', accent: 'from-cyan-400 to-blue-500' },
  { role: 'Internship', company: 'PT. Webcare Digital Indonesia', duration: '20 Jan 2025 – 20 Mar 2025', location: 'Surabaya, Indonesia', tag: 'Web Development', accent: 'from-violet-400 to-indigo-500' },
];

function WorkExperience() {
  return (
    <section id="work-experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Where I've <span className="text-slate-500">built & learned.</span></h2>
        </motion.div>

        <div className="mt-10 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((e, i) => (
              <motion.div key={e.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }} className="glass glass-hover rounded-[24px] p-6 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${e.accent} opacity-60`} />
                <div className="flex items-start justify-between gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${e.accent} grid place-items-center text-white text-xs font-bold shadow-lg`}>{String(i+1).padStart(2,'0')}</div>
                  <span className="text-[11px] font-mono tracking-widest px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-cyan-600">{e.tag}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{e.role}</h3>
                <p className="text-sm font-medium text-slate-600">{e.company}</p>
                <div className="mt-4 space-y-2 text-xs font-mono text-slate-500">
                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />{e.duration}</p>
                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />{e.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WorkExperience;
