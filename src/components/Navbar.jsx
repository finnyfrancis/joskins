import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--shadow' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__brand" onClick={(e) => nav(e, 'hero')}>
          <img src="/joskins-logo.png" alt="Joskins" className="navbar__logo" />
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {[
            ['about', 'About'],
            ['products', 'Our Spices'],
            ['why-us', 'Why Joskins'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => nav(e, id)}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__cta" onClick={(e) => nav(e, 'contact')}>
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
