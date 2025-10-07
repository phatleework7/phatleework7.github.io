export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const isDark = theme === 'dark';
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span aria-hidden>
        {isDark ? '🌙' : '🌞'}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.8 }}>
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
