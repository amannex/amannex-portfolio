import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const elements = document.querySelectorAll(`.${styles['portfolio-grid']} .fade-up`);
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            el.classList.remove('visible'); // Reset visibility for animation
            observer.observe(el);
        });
        
        return () => observer.disconnect();
    }, [activeFilter]);

    const projects = [
        {
            id: 1,
            category: 'ai-ml',
            tag: 'AI / ML',
            title: 'Fake News Detector',
            desc: 'An advanced text-classification system built using Python and deep learning models (BiLSTM) to accurately identify and filter out misleading news articles.',
            img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
            delay: "0.2s"
        },
        {
            id: 2,
            category: 'wordpress',
            tag: 'WordPress',
            title: 'Markencia Agency',
            desc: 'A premium, high-conversion Marketing Agency website built exclusively on WordPress utilizing sophisticated layouts, custom post types, and dynamic filtering.',
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            delay: "0.3s"
        },
        {
            id: 3,
            category: 'fullstack',
            tag: 'Full Stack',
            title: 'E-Commerce Architecture',
            desc: 'A robust online shopping platform developed with Java/Spring Boot backend, secure authentication, and a responsive React JS frontend.',
            img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800",
            delay: "0.4s"
        },
        {
            id: 4,
            category: 'design',
            tag: 'Web Design',
            title: 'SaaS Dashboard UI',
            desc: 'A highly interactive, data-rich analytics dashboard focusing on user experience, modern glassmorphism aesthetics, and data visualization best practices.',
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            delay: "0.5s"
        },
        {
            id: 5,
            category: 'ai-ml',
            tag: 'AI / ML',
            title: 'Customer Support Bot',
            desc: 'Integrated natural language processing to build an intelligent conversational bot capable of resolving up to 70% of common customer tier-1 queries seamlessly.',
            img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
            delay: "0.6s"
        },
        {
            id: 6,
            category: 'wordpress',
            tag: 'WordPress',
            title: 'Tech Journal Blog',
            desc: 'Developed a highly optimized, SEO-friendly custom WordPress theme for a prominent tech publication, featuring lightning-fast load times and advanced monetization spots.',
            img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
            delay: "0.7s"
        }
    ];

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
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Explore a curated collection of projects and case studies delivering tailored user experiences through strategic research. </p>
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
                <button className={`${styles['filter-btn']} ${activeFilter === 'all' ? styles.active : ''} interactive-element`} onClick={() => setActiveFilter('all')}>All Projects</button>
                <button className={`${styles['filter-btn']} ${activeFilter === 'ai-ml' ? styles.active : ''} interactive-element`} onClick={() => setActiveFilter('ai-ml')}>AI / ML</button>
                <button className={`${styles['filter-btn']} ${activeFilter === 'fullstack' ? styles.active : ''} interactive-element`} onClick={() => setActiveFilter('fullstack')}>Full Stack</button>
                <button className={`${styles['filter-btn']} ${activeFilter === 'wordpress' ? styles.active : ''} interactive-element`} onClick={() => setActiveFilter('wordpress')}>WordPress</button>
                <button className={`${styles['filter-btn']} ${activeFilter === 'design' ? styles.active : ''} interactive-element`} onClick={() => setActiveFilter('design')}>Web Design</button>

                <select 
                    className={styles['filter-dropdown']}
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                >
                    <option value="all">All Projects</option>
                    <option value="ai-ml">AI / ML</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="wordpress">WordPress</option>
                    <option value="design">Web Design</option>
                </select>
            </div>

            
            <div className={`${styles['portfolio-grid']}`}>
                {projects.filter(p => activeFilter === 'all' || p.category === activeFilter).map(project => (
                    <div key={project.id} className={`${styles['project-card']} fade-up interactive-element`} data-category={project.category} style={{"transitionDelay": project.delay, backgroundImage: `url('${project.img}')`}}>
                        <div className={`${styles['project-details']}`}>
                            <span className={`${styles.tag}`}>{project.tag}</span>
                            <h3 className={`${styles['project-title']}`}>{project.title}</h3>
                            <div className={`${styles['project-content']}`}>
                                <p className={`${styles['project-desc']}`}>{project.desc}</p>
                                <a href="#" className={`${styles['project-link']}`}>View Case Study <i className="fas fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

        </div>
    </section>

    
        </>
    );
};

export default Portfolio;
