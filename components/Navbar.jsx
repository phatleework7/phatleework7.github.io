import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="navbar" role="banner" aria-label="Primary">
      <nav className="nav" role="navigation" aria-label="Main">
        <a href="#" className="brand">My Site</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}
