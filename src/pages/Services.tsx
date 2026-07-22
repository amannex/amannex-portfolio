import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './Services.module.css';

const Services = () => {

    return (
        <>
            <SEO 
                title="What I Do"
                description="Professional services including Full Stack Development, UI/UX Design, WordPress Solutions, and AI Integrations by Aman Saifi."
                canonicalUrl="https://amannex.me/services"
            />
    <header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-star" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Expertise & Offerings</span>
            <h1 className="page-title">What <span className="gradient-text">I Do</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Comprehensive suite of technical and design services tailored for modern digital experiences.</p>
        </div>
    </header>

    
    <section className="section section-alt">
        <div className="container">
            
            <div className={`${styles['services-grid']}`}>
                
                
                <div className={`${styles['service-details-card']} fade-up`}>
                    <div className={`${styles['service-content']}`}>
                        <h3>Full Stack Development</h3>
                        <p>End-to-end software development crafting robust backends and interactive frontends. I build scalable architectures tailored to specific business requirements, ensuring high performance, security, and exceptional user experiences.</p>
                        
                        <div className={`${styles['service-features']}`}>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> RESTful API Design</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Database Modeling</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Cloud Deployment</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> SPA Architecture</div>
                        </div>
                        
                        <Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fas fa-layer-group"></i>
                    </div>
                </div>

                
                <div className={`${styles['service-details-card']} fade-up`}>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fab fa-wordpress"></i>
                    </div>
                    <div className={`${styles['service-content']}`}>
                        <h3>WordPress Ecosystem</h3>
                        <p>Designing sophisticated, high-conversion websites utilizing the complete power of WordPress. From custom theme creation and plugin integration to seamless e-commerce setups with WooCommerce.</p>
                        
                        <div className={`${styles['service-features']}`}>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Custom Theme Design</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Divi / Elementor</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Speed Optimization</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> WooCommerce Setup</div>
                        </div>
                        
                        <Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>

                
                <div className={`${styles['service-details-card']} fade-up`}>
                    <div className={`${styles['service-content']}`}>
                        <h3>AI & ML Integrations</h3>
                        <p>Empowering businesses by integrating smart functionality. Whether it's setting up predictive models, natural language processing tools, or automated intelligent processes to reduce overhead.</p>
                        
                        <div className={`${styles['service-features']}`}>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Model Deployment</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Data Processing APIs</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Text Classification</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Python & TensorFlow</div>
                        </div>
                        
                        <Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link>
                    </div>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fas fa-brain"></i>
                    </div>
                </div>

                
                <div className={`${styles['service-details-card']} fade-up`}>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fas fa-pen-nib"></i>
                    </div>
                    <div className={`${styles['service-content']}`}>
                        <h3>UI/UX Design</h3>
                        <p>Going beyond code, I craft user interfaces that captivate and engage. Prototyping intuitive user flows and building design systems that perfectly balance visual aesthetic with accessibility.</p>
                        
                        <div className={`${styles['service-features']}`}>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Wireframing</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> High-Fidelity Mockups</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Interactive Prototypes</div>
                            <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Design Systems</div>
                        </div>
                        
                        <Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="section section-alt">
        <div className={`container ${styles['text-center']}`}>
            <h2 className="section-title fade-up">Technologies I <span style={{"color":"var(--accent-color)"}}>Utilize</span></h2>
            <p className="section-subtitle fade-up" style={{"transitionDelay":"0.1s"}}>A curated stack of modern tools ensuring high performance and scaleability.</p>
            
            <div className={`${styles['tech-stack-container']} fade-up`} style={{"transitionDelay":"0.2s"}}>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-java"></i><span>Java</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-envira"></i><span>Spring Boot</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-react"></i><span>React</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-python"></i><span>Python</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-node-js"></i><span>Node.js</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-wordpress"></i><span>WordPress</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-figma"></i><span>Figma</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-docker"></i><span>Docker</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fas fa-database"></i><span>SQL/NoSQL</span></div>
                <div className={`${styles['tech-item']} interactive-element`}><i className="fab fa-github"></i><span>Git & GitHub</span></div>
            </div>
        </div>
    </section>

    
    <div className="container">
        <div className={`${styles['cta-section']} fade-up`}>
            <h2>Ready to Transform Your Idea?</h2>
            <p>Let's collaborate to build something truly exceptional. I am currently open for exciting freelance projects and part-time opportunities.</p>
            <Link to="/contact" className="btn btn-outline interactive-element">Get In Touch Today</Link>
        </div>
    </div>

    
        </>
    );
};

export default Services;
