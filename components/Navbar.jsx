import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, setTheme }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const header = document.querySelector('.navbar');
          if (header) {
            if (window.scrollY > 4) header.classList.add('is-scrolled');
            else header.classList.remove('is-scrolled');
          }
          const sections = [
            { id: 'about', link: '#about' },
            { id: 'projects', link: '#projects' },
            { id: 'contact', link: '#contact' },
          ];
          const margin = 140;
          const y = window.scrollY + margin;
          let active = null;
          for (const s of sections) {
            const el = document.getElementById(s.id);
            if (!el) continue;
            if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
              active = s.link;
              break;
            }
          }
          document.querySelectorAll('.nav a').forEach(a => {
            a.classList.toggle('is-active', a.getAttribute('href') === active);
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="navbar" role="banner" aria-label="Primary">
      <nav className="nav" role="navigation" aria-label="Main">
        <a href="#" className="brand">Martin Le</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}
