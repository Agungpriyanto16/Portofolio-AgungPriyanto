import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  { title: 'Frontend', icon: '◧', items: ['HTML','CSS','Bootstrap','Tailwind CSS','JavaScript','React.js'], accent: 'from-cyan-400 to-blue-500' },
  { title: 'Backend', icon: '⬡', items: ['Node.js','Express.js','PHP','Laravel','Python','Fast API','REST API'], accent: 'from-violet-400 to-indigo-500' },
  { title: 'Database & Tools', icon: '⬢', items: ['MySQL','Git','Github'], accent: 'from-emerald-400 to-teal-500' },
];

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Stack that ships <span className="text-slate-500">fast.</span></h2>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl">Focused on modern web development across the full stack — from responsive user interfaces to backend systems and APIs.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.08 }} className="glass glass-hover rounded-[24px] p-6 relative overflow-hidden">
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${g.accent} opacity-15 blur-2xl`} />
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g.accent} grid place-items-center text-white text-sm shadow-lg`}>{g.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map(t=>(
                  <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-6 h-1 rounded-full bg-slate-100 overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${g.accent} ${i===0?'w-[88%]':i===1?'w-[84%]':'w-[80%]'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
