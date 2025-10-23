import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    const browserLanguage = typeof window !== 'undefined' ? navigator.language.split('-')[0] : 'vi';
    const initialLanguage = savedLanguage || (browserLanguage === 'vi' ? 'vi' : 'en');
    setLanguage(initialLanguage);
  }, []);

  useEffect(() => {
    // Save language to localStorage when it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

