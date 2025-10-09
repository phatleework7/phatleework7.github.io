export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const isDark = theme === 'dark';
  const onMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--mx', x + '%');
    target.style.setProperty('--my', y + '%');
  };
  return (
    <button className="theme-toggle" onClick={toggle} onMouseMove={onMove} aria-label="Toggle theme">
      <span aria-hidden>
        {isDark ? '🌙' : '🌞'}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.8 }}>
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
