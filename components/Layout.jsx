import { useEffect } from 'react';
import Navbar from './Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Layout({ children, theme, setTheme }) {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Show/hide back-to-top button based on scroll position
    const handleScroll = () => {
      const backToTopBtn = document.querySelector('.back-to-top');
      if (backToTopBtn) {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div id="route-progress" />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <button
        className="back-to-top"
        aria-label={language === 'vi' ? 'Về đầu trang' : 'Back to top'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        type="button"
      >
        ↑
      </button>
      <footer className="footer" role="contentinfo">
        © {new Date().getFullYear()} {t.footer.copyright}
      </footer>
    </div>
  );
}
