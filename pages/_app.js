import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
