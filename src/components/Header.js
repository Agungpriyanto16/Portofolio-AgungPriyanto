import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller, Events, scrollSpy } from 'react-scroll';

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work-experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const SCROLL = { smooth: 'easeInOutQuart', duration: 900, offset: -80, spy: true, isDynamic: true };

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = nav.map((n) => n.id);
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 110) cur = id;
        }
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    const t = setTimeout(() => { scrollSpy.update(); onScroll(); }, 300);
    return () => {
      window.removeEventListener('scroll', onScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      clearTimeout(t);
    };
  }, []);

  useEffect(() => { scrollSpy.update(); }, [location.pathname]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('resize', onResize);
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (section) => {
    setActive(section);
    setOpen(false);
    const opts = { ...SCROLL, smooth: 'easeInOutQuart' };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scroller.scrollTo(section, opts), 150);
    } else {
      scroller.scrollTo(section, opts);
    }
  };

  const linkClass = (id, isActive) =>
    `px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
      isActive ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-900 active:text-white'
    }`;

  const mobileClass = (isActive) =>
    `block w-full text-left px-4 py-3 rounded-xl text-sm cursor-pointer transition-colors ${
      isActive ? 'bg-slate-900 text-white font-semibold shadow-sm' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-900 active:text-white'
    }`;

  return (
    <>
      <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 py-2 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 ${scrolled || open ? 'glass-strong shadow-glow' : 'bg-transparent border border-transparent'}`}>
            <button onClick={() => go('about')} className="flex items-center gap-2 sm:gap-3 text-left shrink-0 min-w-0" aria-label="Go to home">
              <img src="/Images/screen.png" alt="AP" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover shadow-lg shrink-0" />
              <span className="block min-w-0">
                <span className="block text-xs sm:text-sm font-bold leading-none text-slate-900 truncate">Agung Priyanto</span>
                <span className="block text-[9px] sm:text-[10px] tracking-[0.18em] text-cyan-600 font-mono">FULL STACK DEV</span>
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-1 bg-slate-100 rounded-full p-1 border border-slate-200" aria-label="Primary">
              {nav.map((n) =>
                location.pathname === '/' ? (
                  <ScrollLink
                    key={n.id}
                    to={n.id}
                    spy
                    smooth={SCROLL.smooth}
                    duration={SCROLL.duration}
                    offset={SCROLL.offset}
                    isDynamic
                    onClick={() => setActive(n.id)}
                    className={linkClass(n.id, active === n.id)}
                  >
                    {n.label}
                  </ScrollLink>
                ) : (
                  <button key={n.id} onClick={() => go(n.id)} className={linkClass(n.id, active === n.id)}>
                    {n.label}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {location.pathname === '/' ? (
                <ScrollLink
                  to="contact"
                  spy
                  smooth={SCROLL.smooth}
                  duration={SCROLL.duration}
                  offset={SCROLL.offset}
                  isDynamic
                  onClick={() => setActive('contact')}
                  className="hidden lg:inline-flex btn-gradient text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-indigo-500/20 whitespace-nowrap"
                >
                  Hire Me →
                </ScrollLink>
              ) : (
                <button onClick={() => go('contact')} className="hidden lg:inline-flex btn-gradient text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                  Hire Me →
                </button>
              )}
              <button onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass grid place-items-center text-slate-700 hover:bg-slate-100 active:bg-slate-900 active:text-white transition-colors shrink-0">
                <span className="text-base sm:text-lg leading-none">{open ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>

          {open && (
            <nav id="mobile-nav" aria-label="Mobile" className="lg:hidden mt-3 glass-strong rounded-2xl p-2 shadow-2xl max-h-[70vh] overflow-auto">
              {nav.map((n) =>
                location.pathname === '/' ? (
                  <ScrollLink
                    key={n.id}
                    to={n.id}
                    spy
                    smooth={SCROLL.smooth}
                    duration={SCROLL.duration}
                    offset={SCROLL.offset}
                    isDynamic
                    onClick={() => go(n.id)}
                    className={mobileClass(active === n.id)}
                  >
                    {n.label}
                  </ScrollLink>
                ) : (
                  <button key={n.id} onClick={() => go(n.id)} className={mobileClass(active === n.id)}>
                    {n.label}
                  </button>
                )
              )}
              <div className="p-2 pt-3">
                <button onClick={() => go('contact')} className="w-full btn-gradient text-white text-sm font-semibold py-3 rounded-xl shadow-lg shadow-indigo-500/20">Hire Me →</button>
              </div>
            </nav>
          )}
        </div>
      </header>
      {open && <button aria-label="Close menu backdrop" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm lg:hidden" />}
    </>
  );
}

export default Header;
