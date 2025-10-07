import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="navbar">
      <a href="#" className="brand">My Site</a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}
