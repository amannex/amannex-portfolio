import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Portfolio.module.css';
import { portfolioProjects, featuredProjects } from '../data/static';

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

    const projects = portfolioProjects;

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
                {featuredProjects.map((project, index) => (
                    <div key={index} className={`${styles['project-card']} interactive-element`} style={{ backgroundImage: `url('${project.img}')` }}>
                        <div className={`${styles['project-details']}`}>
                            <span className={`${styles.tag}`}>{project.tag}</span>
                            <h3 className={`${styles['project-title']}`}>{project.title}</h3>
                            <div className={`${styles['project-content']}`}>
                                <p className={`${styles['project-desc']}`}>
                                    {project.desc}
                                </p>
                                <Link to={project.link} className={`${styles['project-link']}`}>View Project <i className="fas fa-arrow-up-right-from-square"></i></Link>
                            </div>
                        </div>
                    </div>
                ))}
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
