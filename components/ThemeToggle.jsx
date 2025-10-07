export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}
