import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar({ theme, setTheme }) {
  const { language } = useLanguage();
  const t = translations[language];

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
        <a href="#" className="brand">Lê Thành Phát</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#contact">{t.nav.contact}</a>
        <div className="nav-controls">
          <LanguageToggle />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}
