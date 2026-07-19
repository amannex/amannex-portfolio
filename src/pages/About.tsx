import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {

    return (
        <>
            
    <header className={`${styles['page-header']} container fade-up`}>
        <h1 className={`${styles['page-title']}`}>About <span className="gradient-text">Me</span></h1>
        <p className={`${styles['page-subtitle']}`}>Learn more about my background, skills, and the journey that got me here.</p>
    </header>

    
    <section className="section">
        <div className={`container ${styles['about-content']}`}>
            <div className={`${styles['about-image']} fade-up`}>
                
                <div style={{"background":"var(--accent-gradient)","height":"500px","display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontSize":"8rem","borderRadius":"var(--border-radius-lg)"}}>
                    <i className="fas fa-user-astronaut"></i>
                </div>
            </div>
            <div className={`${styles['about-text']} fade-up`} style={{"transitionDelay":"0.2s"}}>
                <h3 style={{"fontFamily":"'Outfit', sans-serif"}}>I'm Aman Saifi, a Full Stack Developer & Designer</h3>
                <p>
                    I am an aspiring software engineer with a strong passion for building digital experiences that combine stunning visual aesthetics with robust technical foundations. With a background seamlessly bridging design and development, my goal is to craft solutions that stand out.
                </p>
                <p>
                    Whether I'm developing dynamic web applications using React and Node, integrating machine learning models for intelligent automation, or setting up premium WordPress architectures, I strive for excellence and scalable results.
                </p>
                <Link to="/contact" className="btn btn-outline interactive-element" style={{"marginTop":"1rem"}}>Get in touch</Link>
            </div>
        </div>
    </section>

    
    <section className="section section-alt">
        <div className="container">
            <h2 className="section-title fade-up">My <span style={{"color":"var(--accent-color)"}}>Expertise</span></h2>
            <p className="section-subtitle fade-up" style={{"transitionDelay":"0.1s"}}>Technologies and tools I use to bring ideas to life.</p>

            <div className={`${styles['skills-grid']} fade-up`} style={{"transitionDelay":"0.2s"}}>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-react"></i></div>
                    <div className={`${styles['skill-name']}`}>React UI</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-js"></i></div>
                    <div className={`${styles['skill-name']}`}>JavaScript</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-java"></i></div>
                    <div className={`${styles['skill-name']}`}>Java/Spring</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-wordpress"></i></div>
                    <div className={`${styles['skill-name']}`}>WordPress</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-python"></i></div>
                    <div className={`${styles['skill-name']}`}>Python/ML</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fas fa-database"></i></div>
                    <div className={`${styles['skill-name']}`}>SQL/NoSQL</div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <h2 className="section-title fade-up">My <span style={{"color":"var(--accent-color)"}}>Journey</span></h2>
            <p className="section-subtitle fade-up" style={{"transitionDelay":"0.1s"}}>Academic milestones and professional software development experience.</p>

            <div className={`${styles.timeline} fade-up`} style={{"transitionDelay":"0.2s"}}>
                
                <div className={`${styles['timeline-item']}`}>
                    <div className={`${styles['timeline-dot']}`}></div>
                    <div className={`${styles['timeline-content']} interactive-element`}>
                        <span className={`${styles['timeline-date']}`}>2026 - Present</span>
                        <h4>Freelance Full Stack Developer</h4>
                        <h5>Amannex Global</h5>
                        <p style={{"color":"var(--text-secondary)"}}>Designing and developing bespoke websites, scaling e-commerce architectures, and crafting sophisticated user interfaces for clients globally.</p>
                    </div>
                </div>

                <div className={`${styles['timeline-item']}`}>
                    <div className={`${styles['timeline-dot']}`}></div>
                    <div className={`${styles['timeline-content']} interactive-element`}>
                        <span className={`${styles['timeline-date']}`}>2024 - 2026</span>
                        <h4>Core Developer Intern</h4>
                        <h5>Markencia Agency</h5>
                        <p style={{"color":"var(--text-secondary)"}}>Helped build dynamic filtering, custom WordPress solutions, and integrated deep learning AI systems to boost agency outreach workflows.</p>
                    </div>
                </div>

                <div className={`${styles['timeline-item']}`}>
                    <div className={`${styles['timeline-dot']}`}></div>
                    <div className={`${styles['timeline-content']} interactive-element`}>
                        <span className={`${styles['timeline-date']}`}>Graduated 2024</span>
                        <h4>B.Tech in Computer Science</h4>
                        <h5>University Level</h5>
                        <p style={{"color":"var(--text-secondary)"}}>Specialized in machine learning applications, software engineering principles, and led major projects including an advanced fake news detection model.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
        </>
    );
};

export default About;
