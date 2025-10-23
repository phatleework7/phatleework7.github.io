import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  const onMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--mx', x + '%');
    target.style.setProperty('--my', y + '%');
  };

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage} 
      onMouseMove={onMove} 
      aria-label="Toggle language"
    >
      <span aria-hidden>
        {language === 'vi' ? '🇻🇳' : '🇺🇸'}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.8 }}>
        {language === 'vi' ? 'VI' : 'EN'}
      </span>
    </button>
  );
}

