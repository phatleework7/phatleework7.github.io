import Navbar from './Navbar';

export default function Layout({ children, theme, setTheme }) {
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
        © {new Date().getFullYear()} Le Thanh Phat
      </footer>
    </div>
  );
}
