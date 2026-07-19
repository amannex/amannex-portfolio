import styles from './Contact.module.css';


const Contact = () => {

    return (
        <>
            
    <header className={`${styles['page-header']} container fade-up`}>
        <h1 className={`${styles['page-title']}`}>Get in <span className="gradient-text">Touch</span></h1>
        <p className={`${styles['page-subtitle']}`}>Have a vision for your next digital product? Let's discuss how we can bring it to life with modern technology and elegant design.</p>
    </header>

    
    <section className={`section ${styles['pt-0']}`}>
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
                    
                    <div className={`${styles['info-item']} interactive-element`} style={{"display":"flex","alignItems":"flex-start","gap":"1.5rem","padding":"1.5rem","background":"var(--bg-primary)","borderRadius":"var(--border-radius)","border":"1px solid var(--border-light)","boxShadow":"var(--shadow-sm)","transition":"all var(--transition-fast)"}}>
                        <div className={`${styles['info-icon']}`} style={{"flexShrink":"0","width":"50px","height":"50px","borderRadius":"50%","background":"var(--accent-glow)","color":"var(--accent-secondary)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.25rem"}}><i className="fas fa-envelope"></i></div>
                        <div>
                            <h5 style={{"fontSize":"1.125rem","marginBottom":"0.25rem"}}>Email</h5>
                            <a href="mailto:hello@amannex.me" style={{"color":"var(--text-secondary)","textDecoration":"none","display":"block","overflowWrap":"break-word","wordBreak":"break-all"}}>hello@amannex.me</a>
                        </div>
                    </div>

                    <div className={`${styles['info-item']} interactive-element`} style={{"display":"flex","alignItems":"flex-start","gap":"1.5rem","padding":"1.5rem","background":"var(--bg-primary)","borderRadius":"var(--border-radius)","border":"1px solid var(--border-light)","boxShadow":"var(--shadow-sm)","transition":"all var(--transition-fast)"}}>
                        <div className={`${styles['info-icon']}`} style={{"flexShrink":"0","width":"50px","height":"50px","borderRadius":"50%","background":"var(--accent-glow)","color":"var(--accent-secondary)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.25rem"}}><i className="fas fa-phone-alt"></i></div>
                        <div>
                            <h5 style={{"fontSize":"1.125rem","marginBottom":"0.25rem"}}>Phone</h5>
                            <a href="tel:+1234567890" style={{"color":"var(--text-secondary)","textDecoration":"none","display":"block"}}>+1 (234) 567-890</a>
                        </div>
                    </div>

                </div>
            </div>

            
            <div className={`${styles['contact-form-wrapper']} fade-up`} style={{"transitionDelay":"0.2s","background":"var(--bg-primary)","padding":"3rem","borderRadius":"var(--border-radius-lg)","boxShadow":"var(--shadow-lg)","border":"1px solid var(--border-light)","position":"relative","overflow":"hidden"}}>
                <div style={{"position":"absolute","top":"-50px","right":"-50px","width":"150px","height":"150px","background":"var(--accent-gradient)","filter":"blur(60px)","opacity":"0.4","borderRadius":"50%","zIndex":"0"}}></div>
                
                <h4 style={{"fontSize":"1.75rem","marginBottom":"2rem","fontFamily":"'Outfit', sans-serif","position":"relative","zIndex":"1"}}>Send a Message</h4>
                
                <form action="#" method="POST" className={`${styles['contact-form']}`} style={{"display":"flex","flexDirection":"column","gap":"1.5rem","position":"relative","zIndex":"1"}}>
                    <div className={`${styles['form-row']}`} style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1.5rem"}}>
                        <div className="form-group">
                            <label style={{"display":"block","fontSize":"0.875rem","fontWeight":"600","marginBottom":"0.5rem","color":"var(--text-secondary)"}}>Your Name</label>
                            <input type="text" placeholder="John Doe" className="form-control interactive-element" required style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","fontFamily":"inherit","fontSize":"1rem","color":"var(--text-primary)","transition":"all var(--transition-fast)","outline":"none"}} />
                        </div>
                        <div className="form-group">
                            <label style={{"display":"block","fontSize":"0.875rem","fontWeight":"600","marginBottom":"0.5rem","color":"var(--text-secondary)"}}>Your Email</label>
                            <input type="email" placeholder="john@example.com" className="form-control interactive-element" required style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","fontFamily":"inherit","fontSize":"1rem","color":"var(--text-primary)","transition":"all var(--transition-fast)","outline":"none"}} />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label style={{"display":"block","fontSize":"0.875rem","fontWeight":"600","marginBottom":"0.5rem","color":"var(--text-secondary)"}}>Subject</label>
                        <input type="text" placeholder="Project Inquiry" className="form-control interactive-element" required style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","fontFamily":"inherit","fontSize":"1rem","color":"var(--text-primary)","transition":"all var(--transition-fast)","outline":"none"}} />
                    </div>
                    
                    <div className="form-group">
                        <label style={{"display":"block","fontSize":"0.875rem","fontWeight":"600","marginBottom":"0.5rem","color":"var(--text-secondary)"}}>Message</label>
                        <textarea placeholder="Tell me about your project..." rows={5} className="form-control interactive-element" required style={{"width":"100%","padding":"1rem 1.25rem","borderRadius":"12px","border":"1px solid var(--border-light)","background":"var(--bg-secondary)","fontFamily":"inherit","fontSize":"1rem","color":"var(--text-primary)","transition":"all var(--transition-fast)","outline":"none","resize":"vertical"}}></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary interactive-element" style={{"width":"100%","marginTop":"1rem","justifyContent":"center","padding":"1rem"}}>
                        Send Message <i className="fas fa-paper-plane" style={{"marginLeft":"0.5rem"}}></i>
                    </button>
                </form>
            </div>
        </div>
    </section>

    
    <section className="section section-alt">
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
