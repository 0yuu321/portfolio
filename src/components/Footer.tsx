const lastUpdated = "2026.10.19";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <small>&copy; 2026 Shuu Honma Portfolio</small>
        <p className="footer-updated">Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
