import Navbar from './Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Layout({ children, theme, setTheme }) {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="container">
      <div id="route-progress" />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <button
        className="back-to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
      <footer className="footer" role="contentinfo">
        © {new Date().getFullYear()} {t.footer.copyright}
      </footer>
    </div>
  );
}
