import styles from './Contact.module.css';
import SEO from '../components/SEO';


const Contact = () => {

    return (
        <>
            <SEO 
                title="Contact"
                description="Get in touch with Aman Saifi for freelance opportunities, full stack development, and design services."
                canonicalUrl="https://amannex.me/contact"
            />
    <header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-envelope" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Contact Me</span>
            <h1 className="page-title">Get in <span className="gradient-text">Touch</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Have a vision for your next digital product? Let's discuss how we can bring it to life with modern technology and elegant design.</p>
        </div>
    </header>

    
    <section className="section section-alt">
        <div className={`container ${styles['contact-info-grid']}`} style={{"display":"grid","gridTemplateColumns":"1fr 1.5fr","gap":"4rem","alignItems":"flex-start"}}>
            
            
            <div className={`${styles['contact-info']} fade-up`}>
                <h3 style={{"fontSize":"2.25rem","fontFamily":"'Outfit', sans-serif","marginBottom":"1.5rem"}}>Let's Build Something <span className="gradient-text">Great</span></h3>
                <p style={{"color":"var(--text-secondary)","marginBottom":"2.5rem","fontSize":"1.125rem"}}>
                    Whether you have a specific project in mind, need technical advice, or just want to say hi, feel free to reach out. I'm always open to discussing new opportunities.
                </p>
                
                <div className={`${styles['info-items']}`} style={{"display":"flex","flexDirection":"column","gap":"1.5rem"}}>
                    
                    <div className={`${styles['info-item']}`} style={{"display":"flex","alignItems":"flex-start","gap":"1.5rem","padding":"1.5rem","background":"var(--bg-primary)","borderRadius":"var(--border-radius)","border":"1px solid var(--border-light)","boxShadow":"var(--shadow-sm)","transition":"all var(--transition-fast)"}}>
                        <div className={`${styles['info-icon']}`} style={{"flexShrink":"0","width":"50px","height":"50px","borderRadius":"50%","background":"var(--accent-glow)","color":"var(--accent-secondary)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.25rem"}}><i className="fas fa-map-marker-alt"></i></div>
                        <div>
                            <h5 style={{"fontSize":"1.125rem","marginBottom":"0.25rem"}}>Location</h5>
                            <p style={{"color":"var(--text-secondary)"}}>Remote / Global</p>
                        </div>
                    </div>
                    
                    
                    <div className={`${styles['info-item']}`} style={{"display":"flex","alignItems":"flex-start","gap":"1.5rem","padding":"1.5rem","background":"var(--bg-primary)","borderRadius":"var(--border-radius)","border":"1px solid var(--border-light)","boxShadow":"var(--shadow-sm)","transition":"all var(--transition-fast)"}}>
                        <div className={`${styles['info-icon']}`} style={{"flexShrink":"0","width":"50px","height":"50px","borderRadius":"50%","background":"var(--accent-glow)","color":"var(--accent-secondary)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.25rem"}}><i className="fas fa-envelope"></i></div>
                        <div>
                            <h5 style={{"fontSize":"1.125rem","marginBottom":"0.25rem"}}>Email</h5>
                            <p style={{"color":"var(--text-secondary)"}}>hello@amannex.me</p>
                        </div>
                    </div>
                    
                </div>
                
                <div style={{"marginTop":"3rem"}}>
                    <h4 style={{"marginBottom":"1rem","fontSize":"1.25rem"}}>Connect on Social</h4>
                    <div style={{"display":"flex","gap":"1rem"}}>
                        <a href="#" style={{"width":"40px","height":"40px","borderRadius":"50%","background":"var(--bg-secondary)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text-secondary)","border":"1px solid var(--border-light)","transition":"all var(--transition-fast)"}} className="interactive-element"><i className="fab fa-twitter"></i></a>
                        <a href="#" style={{"width":"40px","height":"40px","borderRadius":"50%","background":"var(--bg-secondary)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text-secondary)","border":"1px solid var(--border-light)","transition":"all var(--transition-fast)"}} className="interactive-element"><i className="fab fa-github"></i></a>
                        <a href="#" style={{"width":"40px","height":"40px","borderRadius":"50%","background":"var(--bg-secondary)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text-secondary)","border":"1px solid var(--border-light)","transition":"all var(--transition-fast)"}} className="interactive-element"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" style={{"width":"40px","height":"40px","borderRadius":"50%","background":"var(--bg-secondary)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text-secondary)","border":"1px solid var(--border-light)","transition":"all var(--transition-fast)"}} className="interactive-element"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            
            
            <div className={`${styles['contact-form-container']} fade-up`} style={{"background":"var(--bg-primary)","padding":"3rem","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-md)","border":"1px solid var(--border-light)","transitionDelay":"0.2s"}}>
                <form className={styles['contact-form']} style={{"display":"flex","flexDirection":"column","gap":"1.5rem"}}>
                    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1.5rem"}}>
                        <div className={styles['form-group']}>
                            <label style={{"display":"block","marginBottom":"0.5rem","fontWeight":"500","fontSize":"0.95rem"}}>First Name</label>
                            <input type="text" placeholder="John" style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","color":"var(--text-primary)","fontFamily":"inherit","fontSize":"1rem","outline":"none","transition":"border-color var(--transition-fast)"}} />
                        </div>
                        <div className={styles['form-group']}>
                            <label style={{"display":"block","marginBottom":"0.5rem","fontWeight":"500","fontSize":"0.95rem"}}>Last Name</label>
                            <input type="text" placeholder="Doe" style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","color":"var(--text-primary)","fontFamily":"inherit","fontSize":"1rem","outline":"none","transition":"border-color var(--transition-fast)"}} />
                        </div>
                    </div>
                    
                    <div className={styles['form-group']}>
                        <label style={{"display":"block","marginBottom":"0.5rem","fontWeight":"500","fontSize":"0.95rem"}}>Email Address</label>
                        <input type="email" placeholder="john@example.com" style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","color":"var(--text-primary)","fontFamily":"inherit","fontSize":"1rem","outline":"none","transition":"border-color var(--transition-fast)"}} />
                    </div>
                    
                    <div className={styles['form-group']}>
                        <label style={{"display":"block","marginBottom":"0.5rem","fontWeight":"500","fontSize":"0.95rem"}}>Subject</label>
                        <input type="text" placeholder="Project Inquiry" style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","color":"var(--text-primary)","fontFamily":"inherit","fontSize":"1rem","outline":"none","transition":"border-color var(--transition-fast)"}} />
                    </div>
                    
                    <div className={styles['form-group']}>
                        <label style={{"display":"block","marginBottom":"0.5rem","fontWeight":"500","fontSize":"0.95rem"}}>Message</label>
                        <textarea placeholder="Tell me about your project..." rows={5} style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","color":"var(--text-primary)","fontFamily":"inherit","fontSize":"1rem","outline":"none","transition":"border-color var(--transition-fast)","resize":"vertical"}}></textarea>
                    </div>
                    
                    <button type="button" className="btn btn-primary interactive-element" style={{"marginTop":"1rem","padding":"1rem","fontSize":"1.1rem","display":"flex","justifyContent":"center"}}>
                        Send Message <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
            
        </div>
    </section>

    
    <section className="section">
        <div className="container fade-up">
            <h2 className="section-title">Frequently Asked <span style={{"color":"var(--accent-color)"}}>Questions</span></h2>
            <p className="section-subtitle">A few common questions I get asked regarding services and workflows.</p>

            <div className={`${styles['faq-container']}`} style={{"maxWidth":"800px","margin":"0 auto","background":"var(--bg-primary)","borderRadius":"var(--border-radius-lg)","padding":"2rem","boxShadow":"var(--shadow-sm)","border":"1px solid var(--border-light)"}}>
                <div className={`${styles['faq-item']} interactive-element`}>
                    <div className={`${styles['faq-question']}`}>
                        <span>What is your typical turnaround time?</span>
                        <i className={`fas fa-chevron-down ${styles['faq-icon']}`}></i>
                    </div>
                    <div className={`${styles['faq-answer']}`}>
                        <p>Turnaround time varies based on the scope and complexity of the project. A standard multi-page website usually takes around 2-3 weeks, while more complex web applications with AI integrations can take 1-2 months.</p>
                    </div>
                </div>

                <div className={`${styles['faq-item']} interactive-element`}>
                    <div className={`${styles['faq-question']}`}>
                        <span>Do you provide ongoing support and maintenance?</span>
                        <i className={`fas fa-chevron-down ${styles['faq-icon']}`}></i>
                    </div>
                    <div className={`${styles['faq-answer']}`}>
                        <p>Yes! I offer dedicated maintenance packages to ensure your website remains secure, fast, and up-to-date with the latest features and plugin updates, particularly for WordPress platforms.</p>
                    </div>
                </div>

                <div className={`${styles['faq-item']} interactive-element`}>
                    <div className={`${styles['faq-question']}`}>
                        <span>What is your design process?</span>
                        <i className={`fas fa-chevron-down ${styles['faq-icon']}`}></i>
                    </div>
                    <div className={`${styles['faq-answer']}`}>
                        <p>Everything starts with a discovery call to understand your goals. From there, I create wireframes and UI mockups. Once approved, I move into semantic, responsive HTML/CSS/JS development and integrate necessary backends or CMS solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
        </>
    );
};

export default Contact;
