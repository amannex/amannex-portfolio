import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content fade-up">
                    <div className="footer-brand">
                        <h3>Aman<span style={{ color: 'var(--accent-color)' }}>neX</span></h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '320px' }}>
                            Transforming complex problems into elegant, scaleable, and intuitive digital solutions. Open for freelance opportunities.
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/saifiaman" target="_blank" rel="noreferrer" className="social-icon interactive-element"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/amannex/" target="_blank" rel="noreferrer" className="social-icon interactive-element"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/amannex_/" target="_blank" rel="noreferrer" className="social-icon interactive-element"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/" className="interactive-element">Home</Link></li>
                            <li><Link to="/about" className="interactive-element">About Me</Link></li>
                            <li><Link to="/portfolio" className="interactive-element">Portfolio</Link></li>
                            <li><Link to="/contact" className="interactive-element">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-links">
                        <h4>What I Do</h4>
                        <ul>
                            <li><Link to="/services" className="interactive-element">Web Development</Link></li>
                            <li><Link to="/services" className="interactive-element">WordPress Solutions</Link></li>
                            <li><Link to="/services" className="interactive-element">AI Integration</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>Made with ❤️ & <span style={{ color: 'var(--accent-color)' }}>⚡</span> | &copy; 2026 All rights reserved by Amannex.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
