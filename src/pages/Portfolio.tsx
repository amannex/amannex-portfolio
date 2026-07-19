import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';

const Portfolio = () => {

    return (
        <>
            
    <header className={`${styles['page-header']}`}>
        <div className="container fade-up">
            <h1 className="gradient-text">Our Work</h1>
            <p>Explore a collection of recent projects spanning AI/ML, Full Stack Web Development, and Custom WordPress Solutions. I transform complex ideas into intuitive, scalable experiences.</p>
        </div>
    </header>

    
    <section className="section">
        <div className="container">
            
            <div className={`${styles['filter-container']} fade-up`} style={{"transitionDelay":"0.1s"}}>
                <button className={`${styles['filter-btn']} active interactive-element`} data-filter="all">All Projects</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="ai-ml">AI / ML</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="fullstack">Full Stack</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="wordpress">WordPress</button>
                <button className={`${styles['filter-btn']} interactive-element`} data-filter="design">Web Design</button>
            </div>

            
            <div className={`${styles['portfolio-grid']}`}>
                
                
                <div className={`${styles['portfolio-card']} fade-up interactive-element`} data-category="ai-ml" style={{"transitionDelay":"0.2s"}}>
                    <div className={`${styles['portfolio-img']}`}>
                        <i className="fas fa-shield-virus"></i>
                    </div>
                    <div className={`${styles['portfolio-info']}`}>
                        <span className={`${styles['portfolio-category']}`}>AI / ML</span>
                        <h3 className={`${styles['portfolio-title']}`}>Fake News Detector</h3>
                        <p className={`${styles['portfolio-desc']}`}>An advanced text-classification system built using Python and deep learning models (BiLSTM) to accurately identify and filter out misleading news articles.</p>
                        <a href="#" className={`${styles['portfolio-link']}`}>View Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                
                <div className={`${styles['portfolio-card']} fade-up interactive-element`} data-category="wordpress" style={{"transitionDelay":"0.3s"}}>
                    <div className={`${styles['portfolio-img']}`}>
                        <i className="fab fa-wordpress"></i>
                    </div>
                    <div className={`${styles['portfolio-info']}`}>
                        <span className={`${styles['portfolio-category']}`}>WordPress</span>
                        <h3 className={`${styles['portfolio-title']}`}>Markencia Agency</h3>
                        <p className={`${styles['portfolio-desc']}`}>A premium, high-conversion Marketing Agency website built exclusively on WordPress utilizing sophisticated layouts, custom post types, and dynamic filtering.</p>
                        <a href="#" className={`${styles['portfolio-link']}`}>View Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                
                <div className={`${styles['portfolio-card']} fade-up interactive-element`} data-category="fullstack" style={{"transitionDelay":"0.4s"}}>
                    <div className={`${styles['portfolio-img']}`}>
                        <i className="fas fa-server"></i>
                    </div>
                    <div className={`${styles['portfolio-info']}`}>
                        <span className={`${styles['portfolio-category']}`}>Full Stack</span>
                        <h3 className={`${styles['portfolio-title']}`}>E-Commerce Architecture</h3>
                        <p className={`${styles['portfolio-desc']}`}>A robust online shopping platform developed with Java/Spring Boot backend, secure authentication, and a responsive React JS frontend.</p>
                        <a href="#" className={`${styles['portfolio-link']}`}>View Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                
                <div className={`${styles['portfolio-card']} fade-up interactive-element`} data-category="design" style={{"transitionDelay":"0.5s"}}>
                    <div className={`${styles['portfolio-img']}`}>
                        <i className="fas fa-paint-brush"></i>
                    </div>
                    <div className={`${styles['portfolio-info']}`}>
                        <span className={`${styles['portfolio-category']}`}>Web Design</span>
                        <h3 className={`${styles['portfolio-title']}`}>SaaS Dashboard UI</h3>
                        <p className={`${styles['portfolio-desc']}`}>A highly interactive, data-rich analytics dashboard focusing on user experience, modern glassmorphism aesthetics, and data visualization best practices.</p>
                        <a href="#" className={`${styles['portfolio-link']}`}>View Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                
                <div className={`${styles['portfolio-card']} fade-up interactive-element`} data-category="ai-ml" style={{"transitionDelay":"0.6s"}}>
                    <div className={`${styles['portfolio-img']}`}>
                        <i className="fas fa-robot"></i>
                    </div>
                    <div className={`${styles['portfolio-info']}`}>
                        <span className={`${styles['portfolio-category']}`}>AI / ML</span>
                        <h3 className={`${styles['portfolio-title']}`}>Customer Support Bot</h3>
                        <p className={`${styles['portfolio-desc']}`}>Integrated natural language processing to build an intelligent conversational bot capable of resolving up to 70% of common customer tier-1 queries seamlessly.</p>
                        <a href="#" className={`${styles['portfolio-link']}`}>View Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                
                <div className={`${styles['portfolio-card']} fade-up interactive-element`} data-category="wordpress" style={{"transitionDelay":"0.7s"}}>
                    <div className={`${styles['portfolio-img']}`}>
                        <i className="fas fa-blog"></i>
                    </div>
                    <div className={`${styles['portfolio-info']}`}>
                        <span className={`${styles['portfolio-category']}`}>WordPress</span>
                        <h3 className={`${styles['portfolio-title']}`}>Tech Journal Blog</h3>
                        <p className={`${styles['portfolio-desc']}`}>Developed a highly optimized, SEO-friendly custom WordPress theme for a prominent tech publication, featuring lightning-fast load times and advanced monetization spots.</p>
                        <a href="#" className={`${styles['portfolio-link']}`}>View Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>
            
            <div style={{"textAlign":"center","marginTop":"4rem"}} className="fade-up">
                <p style={{"color":"var(--text-secondary)","marginBottom":"1.5rem"}}>Didn't find what you were looking for?</p>
                <Link to="/contact" className="btn btn-outline interactive-element">Start a New Project</Link>
            </div>
        </div>
    </section>

    
        </>
    );
};

export default Portfolio;
