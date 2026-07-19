import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to close menu on link click
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    Aman<span style={{ color: 'var(--accent-color)' }}>neX</span>
                </Link>

                <button
                    className="mobile-toggle"
                    aria-label="Toggle Navigation"
                    onClick={toggleMobileMenu}
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink></li>
                    <li><NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink></li>
                    <li><NavLink to="/blogs" className="nav-link" onClick={closeMenu}>Blogs</NavLink></li>
                    <li className="mobile-only-btn"><Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Let's Talk</Link></li>
                </ul>

                <div className="nav-actions">
                    <Link to="/contact" className="btn btn-primary nav-btn" onClick={closeMenu}>Let's Talk</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
