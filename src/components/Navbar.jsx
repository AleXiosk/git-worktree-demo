import { useState } from 'react';
import { NAV_LINKS, BRAND } from '../data/navigation';

function Navbar({ theme, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    return (
        <header className="navbar" role="banner">
            <div className="navbar__inner container">
                <a href="/" className="navbar__brand" aria-label={`${BRAND.name} 首頁`}>
                    <span className="navbar__logo" aria-hidden="true">◆</span>
                    <span className="navbar__brand-name">{BRAND.name}</span>
                </a>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    aria-label="切換導覽選單"
                >
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                </button>

                <nav
                    id="nav-menu"
                    className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
                    role="navigation"
                    aria-label="主要導覽"
                >
                    <ul className="navbar__list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} className="navbar__item">
                                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__actions">
                        <button
                            className="theme-toggle"
                            onClick={onToggleTheme}
                            type="button"
                            aria-label={`切換到${nextTheme === 'dark' ? '深色' : '淺色'}主題`}
                            aria-pressed={theme === 'dark'}
                        >
                            <span className="theme-toggle__icon" aria-hidden="true">
                                {theme === 'dark' ? '☀' : '☾'}
                            </span>
                            <span className="theme-toggle__text">
                                {`切換至${nextTheme === 'dark' ? '深色' : '淺色'}`}
                            </span>
                        </button>
                        <a href="#demo" className="btn btn--primary btn--sm navbar__cta">
                            預約 Demo
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
