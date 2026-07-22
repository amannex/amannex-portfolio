import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SEO from '../components/SEO';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 350 + 40; // card width + gap
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <SEO 
                title="Portfolio"
                description="Explore the web development, UI/UX, and AI integration projects crafted by Aman Saifi."
                canonicalUrl="https://amannex.me/portfolio"
            />
            
    <header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-briefcase" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Portfolio</span>
            <h1 className="page-title">My <span className="gradient-text">Work</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Discover a curated collection of my latest projects and case studies.</p>
        </div>
    </header>

    
    <section className="section section-alt">
        <div className="container">
            {/* Featured Projects Slider */}
            <div className={`${styles['featured-header']} fade-up`} style={{ transitionDelay: '0.1s' }}>
                <h2 className={styles['featured-title']}>Featured <span className="gradient-text">Projects</span></h2>
                <div className={styles['featured-controls']}>
                    <button className={styles['control-btn']} onClick={() => scrollSlider('left')} aria-label="Scroll Left">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className={styles['control-btn']} onClick={() => scrollSlider('right')} aria-label="Scroll Right">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className={`${styles['featured-slider']} fade-up`} style={{ transitionDelay: '0.2s' }} ref={sliderRef}>
                {/* Featured Project 1 */}
                <div className={`${styles['project-card']} interactive-element`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800')` }}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>AI / ML</span>
                        <h3 className={`${styles['project-title']}`}>NextGen Analytics</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>
                                An enterprise-level dashboard utilizing predictive machine learning models to forecast market trends and automate reporting.
                            </p>
                            <Link to="#" className={`${styles['project-link']}`}>View Project <i className="fas fa-arrow-up-right-from-square"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Featured Project 2 */}
                <div className={`${styles['project-card']} interactive-element`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800')` }}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>Full Stack</span>
                        <h3 className={`${styles['project-title']}`}>Seamless E-Commerce</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>
                                A highly scalable online marketplace architecture handling 10k+ daily transactions with ultra-fast page loads.
                            </p>
                            <Link to="#" className={`${styles['project-link']}`}>View Project <i className="fas fa-arrow-up-right-from-square"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Featured Project 3 */}
                <div className={`${styles['project-card']} interactive-element`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800')` }}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>WordPress</span>
                        <h3 className={`${styles['project-title']}`}>Elevated Agency</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>
                                A bespoke headless WordPress solution crafted for a top-tier digital agency, featuring modular block editing.
                            </p>
                            <Link to="#" className={`${styles['project-link']}`}>View Project <i className="fas fa-arrow-up-right-from-square"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Featured Project 4 */}
                <div className={`${styles['project-card']} interactive-element`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800')` }}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>SaaS App</span>
                        <h3 className={`${styles['project-title']}`}>Workflow Automator</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>
                                A cloud-based workflow automation tool integrating complex API chains to boost productivity by over 40%.
                            </p>
                            <Link to="#" className={`${styles['project-link']}`}>View Project <i className="fas fa-arrow-up-right-from-square"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Featured Project 5 */}
                <div className={`${styles['project-card']} interactive-element`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800')` }}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>React UI</span>
                        <h3 className={`${styles['project-title']}`}>FinTech Dashboard</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>
                                A real-time cryptocurrency tracking platform featuring WebSockets, advanced chart visualization, and a dark mode interface.
                            </p>
                            <Link to="#" className={`${styles['project-link']}`}>View Project <i className="fas fa-arrow-up-right-from-square"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section section-grid">
        <div className="container">
            <h2 className="section-title fade-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Search by <span style={{ color: 'var(--accent-color)' }}>Filter</span>
            </h2>
            <div className={`${styles['filter-container']} fade-up`} style={{"transitionDelay":"0.1s"}}>
                <button className={`${styles['filter-btn']} active interactive-element`} data-filter="all">All Projects</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="ai-ml">AI / ML</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="fullstack">Full Stack</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="wordpress">WordPress</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="design">Web Design</button>
            </div>

            
            <div className={`${styles['portfolio-grid']}`}>
                
                {/* Grid Project 1 */}
                <div className={`${styles['project-card']} fade-up interactive-element`} data-category="ai-ml" style={{"transitionDelay":"0.2s", backgroundImage: `url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800')`}}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>AI / ML</span>
                        <h3 className={`${styles['project-title']}`}>Fake News Detector</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>An advanced text-classification system built using Python and deep learning models (BiLSTM) to accurately identify and filter out misleading news articles.</p>
                            <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* Grid Project 2 */}
                <div className={`${styles['project-card']} fade-up interactive-element`} data-category="wordpress" style={{"transitionDelay":"0.3s", backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800')`}}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>WordPress</span>
                        <h3 className={`${styles['project-title']}`}>Markencia Agency</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>A premium, high-conversion Marketing Agency website built exclusively on WordPress utilizing sophisticated layouts, custom post types, and dynamic filtering.</p>
                            <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* Grid Project 3 */}
                <div className={`${styles['project-card']} fade-up interactive-element`} data-category="fullstack" style={{"transitionDelay":"0.4s", backgroundImage: `url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800')`}}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>Full Stack</span>
                        <h3 className={`${styles['project-title']}`}>E-Commerce Architecture</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>A robust online shopping platform developed with Java/Spring Boot backend, secure authentication, and a responsive React JS frontend.</p>
                            <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* Grid Project 4 */}
                <div className={`${styles['project-card']} fade-up interactive-element`} data-category="design" style={{"transitionDelay":"0.5s", backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800')`}}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>Web Design</span>
                        <h3 className={`${styles['project-title']}`}>SaaS Dashboard UI</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>A highly interactive, data-rich analytics dashboard focusing on user experience, modern glassmorphism aesthetics, and data visualization best practices.</p>
                            <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* Grid Project 5 */}
                <div className={`${styles['project-card']} fade-up interactive-element`} data-category="ai-ml" style={{"transitionDelay":"0.6s", backgroundImage: `url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800')`}}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>AI / ML</span>
                        <h3 className={`${styles['project-title']}`}>Customer Support Bot</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>Integrated natural language processing to build an intelligent conversational bot capable of resolving up to 70% of common customer tier-1 queries seamlessly.</p>
                            <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* Grid Project 6 */}
                <div className={`${styles['project-card']} fade-up interactive-element`} data-category="wordpress" style={{"transitionDelay":"0.7s", backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800')`}}>
                    <div className={`${styles['project-details']}`}>
                        <span className={`${styles.tag}`}>WordPress</span>
                        <h3 className={`${styles['project-title']}`}>Tech Journal Blog</h3>
                        <div className={`${styles['project-content']}`}>
                            <p className={`${styles['project-desc']}`}>Developed a highly optimized, SEO-friendly custom WordPress theme for a prominent tech publication, featuring lightning-fast load times and advanced monetization spots.</p>
                            <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    </section>

    
        </>
    );
};

export default Portfolio;
