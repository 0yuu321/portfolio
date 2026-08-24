const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORKS", href: "#works" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="メインナビゲーション">
        <a className="brand" href="#home" aria-label="HOMEへ移動">
          Shiyu Homma
        </a>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
