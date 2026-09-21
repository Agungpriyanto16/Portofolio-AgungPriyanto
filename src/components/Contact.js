import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IconGitHub = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.22 10.22 0 0022 12.26C22 6.58 17.52 2 12 2z" /></svg>;
const IconLinkedIn = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M20.45 20.45h-3.56v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.47.62-1.71 1.22-.09.21-.11.5-.11.8v5.83H9.83s.04-9.46 0-10.44h3.56v1.48c.47-.73 1.32-1.77 3.22-1.77 2.35 0 4.11 1.54 4.11 4.85v5.88zM5.34 7.43a2.07 2.07 0 11-.02-4.14 2.07 2.07 0 01.02 4.14zm1.78 13.02H3.56V10.01h3.56v10.44z" /></svg>;
const IconInstagram = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg>;
const links = [
  { label: 'GitHub', href: 'https://github.com/Agungpriyanto16', Icon: IconGitHub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agung-priyanto-9b658b346/', Icon: IconLinkedIn },
  { label: 'Instagram', href: 'https://www.instagram.com/agungpriyanto16/', Icon: IconInstagram },
];

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', msg: 'Lengkapi nama, email, dan pesan.' });
      return;
    }
    setLoading(true);
    setStatus({ type: '', msg: '' });
    try {
      const res = await fetch('https://formsubmit.co/ajax/agungpriyanto160203@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: `Portfolio: pesan dari ${name}`, _captcha: 'false', _template: 'table' }),
      });
      const data = await res.json();
      if (data.success === 'true' || res.ok) {
        setStatus({ type: 'success', msg: 'Pesan terkirim! Saya akan balas via email segera.' });
        setName(''); setEmail(''); setMessage('');
      } else throw new Error();
    } catch {
      const subject = encodeURIComponent(`Portfolio: pesan dari ${name}`);
      const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
      window.location.href = `mailto:agungpriyanto160203@gmail.com?subject=${subject}&body=${body}`;
      setStatus({ type: 'success', msg: 'Membuka aplikasi email — silakan kirim untuk menyelesaikan.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-strong rounded-2xl sm:rounded-[28px] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-indigo-500/[0.04] to-violet-500/[0.04] pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-5 sm:p-8 lg:p-10 min-w-0">
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 break-words leading-tight">Let's build<br /><span className="text-gradient">something great.</span></h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 break-words">Have an idea or need a developer? Reach out — I reply fast and love turning concepts into shipped products.</p>
              <div className="mt-6 sm:mt-8 space-y-3">
                <a href="mailto:agungpriyanto160203@gmail.com" className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-3 sm:px-4 py-3 hover:bg-white hover:border-slate-300 transition-colors min-w-0">
                  <span className="w-9 h-9 rounded-xl btn-gradient grid place-items-center text-white text-sm shrink-0">✉</span>
                  <div className="min-w-0 flex-1"><p className="text-xs font-mono text-slate-500">EMAIL</p><p className="text-xs sm:text-sm font-medium text-slate-900 break-all">agungpriyanto160203@gmail.com</p></div>
                </a>
                <a href="tel:082143902154" className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-3 sm:px-4 py-3 hover:bg-white hover:border-slate-300 transition-colors">
                  <span className="w-9 h-9 rounded-xl bg-white border border-slate-200 grid place-items-center text-slate-700 text-sm shrink-0">☎</span>
                  <div className="min-w-0"><p className="text-xs font-mono text-slate-500">PHONE</p><p className="text-sm font-medium text-slate-900">0821-4390-2154</p></div>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {links.map(({ label, href, Icon })=>(
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap">
                    <Icon />{label} ↗
                  </a>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-8 lg:p-10 bg-slate-50/70 border-t lg:border-t-0 lg:border-l border-slate-200 min-w-0">
              <h3 className="text-sm font-bold text-slate-900">Send a message</h3>
              <p className="text-xs text-slate-500 mt-1 break-words">Your message will be sent directly to my email.</p>
              {status.msg && <div className={`mt-3 rounded-xl px-4 py-2.5 text-xs font-medium border break-words ${status.type==='success'?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-red-50 text-red-700 border-red-200'}`}>{status.msg}</div>}
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" required className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10" />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" type="email" required className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10" />
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Tell me about your project..." rows={4} required className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10 resize-none" />
                <button type="submit" disabled={loading} className="btn-gradient w-full inline-flex justify-center items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Mengirim...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;
