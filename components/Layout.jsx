import Navbar from './Navbar';

export default function Layout({ children, theme, setTheme }) {
  return (
    <div className="container">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <footer className="footer" role="contentinfo">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}
