import React from 'react';
import { motion } from 'framer-motion';

const portfolio = [
  { name: 'Miyoot – E-Commerce Website', description: 'Full-Stack Developer — React.js, Tailwind CSS & Express.js. Modern e-commerce platform with cart, auth & payment flows.', link: 'https://github.com/Agungpriyanto16/Ecommerce-Miyoot', stack: ['React','Tailwind','Express.js','MySQL'], accent: 'from-cyan-400 via-blue-500 to-indigo-500', image: '/Images/Project1.png' },
  { name: 'SPK Konsultan Konstruksi', description: 'Decision support system for selecting construction consultants using Hierarchical IF-TOPSIS and Entropy. Built with Laravel and FastAPI (Python) for the calculation process.', link: 'https://github.com/Agungpriyanto16/SPK-Konsultan-Konstruksi', stack: ['Laravel','FastAPI','Python','Entropy','IF-TOPSIS'], accent: 'from-cyan-400 via-blue-500 to-indigo-500', image: '/Images/Project2.png'},
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Selected <span className="text-slate-500">work.</span></h2>
          <p className="mt-3 text-sm text-slate-600">Production-grade builds — clean architecture, fast UI, real-world use cases.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolio.map((p, i) => (
            <motion.a key={p.name} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group glass glass-hover rounded-[24px] overflow-hidden block">
              <div className={`h-1 w-full bg-gradient-to-r ${p.accent}`} />
              {p.image && (
                <div className="overflow-hidden bg-slate-100">
                  <img src={p.image} alt={p.name} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 grid place-items-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors text-sm">↗</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                {p.criteria && (
                  <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-xs font-bold tracking-wide text-slate-900">Kriteria & Subkriteria</p>
                    <ul className="mt-2 space-y-2">
                      {p.criteria.map(c=>(
                        <li key={c.name} className="text-xs leading-relaxed">
                          <span className="font-semibold text-slate-800">{c.name}:</span>{' '}
                          <span className="text-slate-600">{c.subs.join(' • ')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map(s=>(
                    <span key={s} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">{s}</span>
                  ))}
                </div>
                <span className="mt-5 inline-flex text-xs font-semibold tracking-wide text-cyan-600 group-hover:text-cyan-700">View on GitHub →</span>
              </div>
            </motion.a>
          ))}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="glass rounded-[24px] p-8 flex flex-col justify-center border-dashed">
            <p className="text-sm font-bold text-slate-900">More coming soon</p>
            <p className="text-sm text-slate-500 mt-1">More projects are in progress. Follow on GitHub for updates.</p>
            <a href="https://github.com/Agungpriyanto16" target="_blank" rel="noreferrer" className="mt-4 inline-flex w-fit text-xs font-mono px-4 py-2 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800">github.com/Agungpriyanto16</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
