import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import styles from './About.module.css';
import profileImg from '../assets/images/amannex-profile.png';

const storyData = [
    {
        period: "The Beginning",
        title: "First Lines of Code",
        subtitle: "Self-Taught Origins",
        summary: "Where it all started. I wrote my first lines of code and immediately fell in love with web development and building things from scratch.",
        struggle: "Learning completely on my own was incredibly overwhelming. There were nights I spent hours just trying to fix a single missing semicolon. I struggled with tutorial hell and imposter syndrome, constantly wondering if I was smart enough for this field.",
        breakthrough: "I finally built my first ugly but functional HTML/CSS website from scratch without a tutorial. That single moment of seeing my code come to life on the screen gave me the confidence to keep going."
    },
    {
        period: "The Grind",
        title: "The Academic & Skill Grind",
        subtitle: "B.Tech in Computer Science",
        summary: "I formally enrolled in a Computer Science degree to solidify my foundations and dive into complex architectures while learning modern frameworks on the side.",
        struggle: "Balancing intense university coursework with self-teaching modern web frameworks was exhausting. The theoretical math felt disconnected from the beautiful UI I wanted to build. Burnout was a constant shadow over me.",
        breakthrough: "I realized I could merge my academic knowledge with my web passion. I built an advanced AI Fake News detector for my major project, successfully combining machine learning with a full-stack interface."
    },
    {
        period: "The Professional World",
        title: "Entering the Professional Arena",
        subtitle: "Markencia Agency",
        summary: "I landed my first core developer role, tasked with building high-conversion, premium digital experiences for real clients and businesses.",
        struggle: "The transition from solo developer to working on production-level enterprise code was a huge shock. I faced massive pressure dealing with tight client deadlines, legacy codebases, and the anxiety of pushing code that users would interact with.",
        breakthrough: "I learned to communicate effectively with designers and stakeholders, mastered advanced WordPress architectures, and led the integration of AI tools that revolutionized the agency's workflow."
    },
    {
        period: "Now",
        title: "The Independent Developer",
        subtitle: "Aman Saifi / Amannex Global",
        summary: "Taking the leap to become a freelance Full Stack Developer and Content Creator, building a brand around my expertise.",
        struggle: "Freelancing means you are the developer, the marketer, and the project manager all at once. Finding consistent clients while maintaining the incredibly high standard of design and code quality I set for myself has been a massive balancing act.",
        breakthrough: "Establishing my own brand allowed me to pick projects I truly care about. I now consistently deliver bespoke, high-performance web solutions that empower businesses worldwide."
    }
];

const About = () => {
    return (
        <>
            <SEO 
                title="About Me"
                description="Learn more about Aman Saifi, a passionate Software Engineer and Full Stack Developer with expertise in Java, React, and WordPress."
                canonicalUrl="https://amannex.me/about"
            />
            
    <header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-user" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Who I Am</span>
            <h1 className="page-title">About <span className="gradient-text">Me</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Discover the journey behind my work, the skills I've developed, and the passion that drives me to build exceptional digital experiences.</p>
        </div>
    </header>

    
    <section className="section">
        <div className={`container ${styles['about-content']}`}>
            <div className={`${styles['about-image']} fade-up`}>
                
                <div style={{"height":"500px", "display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontSize":"8rem","borderRadius":"var(--border-radius-lg)"}}>
                    <img src={profileImg} alt="Aman Saifi Profile" style={{"width":"100%","height":"100%","objectFit":"cover","borderRadius":"inherit","position":"relative","zIndex":"1","border":"2px solid var(--accent-color)","boxSizing":"border-box"}} />
                </div>
            </div>
            <div className={`${styles['about-text']} fade-up`} style={{"transitionDelay":"0.2s"}}>
                <h3 style={{"fontFamily":"'Outfit', sans-serif"}}>I'm Aman Saifi, a Developer & Content Creator</h3>
                <p>
                    I build digital experiences that combine clean design, powerful functionality, and impactful content. My work bridges development, design, and content creation to help businesses establish a strong online presence.                </p>
                <p>
                    Whether I'm developing modern web applications with React and PHP, building high-performance WordPress websites, creating engaging content, or integrating AI-powered solutions to streamline workflows, I focus on delivering scalable, user-centric, and business-driven results.                </p>
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
                    <div className={`${styles['skill-name']}`}>React</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-js"></i></div>
                    <div className={`${styles['skill-name']}`}>JavaScript</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-java"></i></div>
                    <div className={`${styles['skill-name']}`}>Java</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-wordpress"></i></div>
                    <div className={`${styles['skill-name']}`}>WordPress</div>
                </div>
                <div className={`${styles['skill-card']} interactive-element`}>
                    <div className={`${styles['skill-icon']}`}><i className="fab fa-python"></i></div>
                    <div className={`${styles['skill-name']}`}>Python</div>
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
            <h2 className="section-title fade-up">My <span style={{"color":"var(--accent-color)"}}>Story & Struggles</span></h2>
            <p className="section-subtitle fade-up" style={{"transitionDelay":"0.1s"}}>The journey wasn't always easy. Here is the unvarnished path of my struggles and breakthroughs.</p>

            <div className={`${styles['horizontal-timeline']} fade-up`} style={{"transitionDelay":"0.2s"}}>
                {storyData.map((story, index) => (
                    <div key={index} className={`${styles['ht-item']}`}>
                        <div className={`${styles['ht-dot']}`}></div>
                        <div className={`${styles['ht-content']} interactive-element`}>
                            <span className={`${styles['ht-date']}`}>{story.period}</span>
                            <h4 className={styles['ht-title']}>{story.title}</h4>
                            <h5 className={styles['ht-subtitle']}>{story.subtitle}</h5>
                            
                            <div className={`${styles['ht-details']}`}>
                                <p style={{"color":"var(--text-secondary)", "marginBottom":"1rem"}}>{story.summary}</p>
                                <div className={styles['struggle-box']}>
                                    <h6><i className="fas fa-bolt"></i> The Struggle</h6>
                                    <p>{story.struggle}</p>
                                </div>
                                <div className={styles['breakthrough-box']}>
                                    <h6><i className="fas fa-star"></i> The Breakthrough</h6>
                                    <p>{story.breakthrough}</p>
                                </div>
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

export default About;
