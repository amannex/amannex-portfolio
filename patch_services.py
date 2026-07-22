import sys
import re

with open('src/pages/Services.module.css', 'r') as f:
    content = f.read()

new_css = '''        /* Minimalist Interactive List */
        .service-list-container {
            display: flex;
            flex-direction: column;
            margin-top: 3rem;
            border-top: 1px solid var(--border-light);
        }

        .service-row {
            border-bottom: 1px solid var(--border-light);
            padding: 3rem 0;
            position: relative;
            cursor: pointer;
            overflow: hidden;
        }

        .service-header {
            display: flex;
            align-items: center;
            gap: 2rem;
            transition: all var(--transition-smooth);
            z-index: 2;
            position: relative;
        }

        .service-index {
            font-family: 'Outfit', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-muted);
            min-width: 60px;
            transition: color var(--transition-smooth);
        }

        .service-header h3 {
            font-size: clamp(2rem, 4vw, 3.5rem);
            margin: 0;
            flex: 1;
            transition: color var(--transition-smooth);
        }

        .service-arrow {
            font-size: 2rem;
            color: var(--text-muted);
            transition: all var(--transition-smooth);
            transform: rotate(-45deg);
        }

        .service-body {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-body-inner {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-left: calc(60px + 2rem);
        }

        .service-row p {
            color: var(--text-secondary);
            font-size: 1.125rem;
            margin-top: 1.5rem;
            max-width: 800px;
        }

        /* Hover Reveal Styles */
        .service-row:hover .service-body {
            grid-template-rows: 1fr;
        }

        .service-row:hover .service-header {
            transform: translateX(10px);
        }

        .service-row:hover .service-header h3,
        .service-row:hover .service-index {
            color: var(--accent-color);
        }

        .service-row:hover .service-arrow {
            transform: rotate(0);
            color: var(--accent-color);
        }

        /* Hover Visuals */
        .service-visual {
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translateY(-50%) scale(0.8);
            font-size: 15rem;
            color: var(--text-muted);
            opacity: 0;
            pointer-events: none;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1;
        }
        
        .service-visual::after {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
            opacity: 0.5;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .service-row:hover .service-visual {
            opacity: 0.1;
            transform: translateY(-50%) scale(1);
            color: var(--accent-color);
        }

        /* Features List */
        .service-features {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .service-feature {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 500;
        }

        .service-feature i {
            color: var(--accent-color);
            background: rgba(255, 180, 0, 0.1);
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 0.875rem;
        }'''

content = re.sub(r'/\* Bento Box Service Cards \*/.*?\.service-feature i \{[\s\S]*?\}', new_css, content, flags=re.MULTILINE)

new_media = '''        @media (max-width: 992px) {
            .service-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
            .service-index {
                min-width: auto;
            }
            .service-body-inner {
                padding-left: 0;
            }
            .service-visual {
                display: none;
            }
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }'''

content = re.sub(r'@media \(max-width: 992px\) \{[\s\S]*?\.footer-content \{[\s\S]*?\}[\s]*?\}', new_media, content, flags=re.MULTILINE)

with open('src/pages/Services.module.css', 'w') as f:
    f.write(content)

with open('src/pages/Services.tsx', 'r') as f:
    tsx_content = f.read()

new_tsx = '''            <div className={`${styles['service-list-container']}`}>
                
                <div className={`${styles['service-row']} fade-up`}>
                    <div className={`${styles['service-header']}`}>
                        <span className={`${styles['service-index']}`}>01</span>
                        <h3>Full Stack Development</h3>
                        <i className={`fas fa-arrow-right ${styles['service-arrow']}`}></i>
                    </div>
                    <div className={`${styles['service-body']}`}>
                        <div className={`${styles['service-body-inner']}`}>
                            <p>End-to-end software development crafting robust backends and interactive frontends. I build scalable architectures tailored to specific business requirements, ensuring high performance, security, and exceptional user experiences.</p>
                            
                            <div className={`${styles['service-features']}`}>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> RESTful API Design</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Database Modeling</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Cloud Deployment</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> SPA Architecture</div>
                            </div>
                            
                            <div><Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link></div>
                        </div>
                    </div>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fas fa-layer-group"></i>
                    </div>
                </div>

                <div className={`${styles['service-row']} fade-up`}>
                    <div className={`${styles['service-header']}`}>
                        <span className={`${styles['service-index']}`}>02</span>
                        <h3>WordPress Ecosystem</h3>
                        <i className={`fas fa-arrow-right ${styles['service-arrow']}`}></i>
                    </div>
                    <div className={`${styles['service-body']}`}>
                        <div className={`${styles['service-body-inner']}`}>
                            <p>Designing sophisticated, high-conversion websites utilizing the complete power of WordPress. From custom theme creation and plugin integration to seamless e-commerce setups with WooCommerce.</p>
                            
                            <div className={`${styles['service-features']}`}>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Custom Theme Design</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Divi / Elementor</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Speed Optimization</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> WooCommerce Setup</div>
                            </div>
                            
                            <div><Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link></div>
                        </div>
                    </div>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fab fa-wordpress"></i>
                    </div>
                </div>

                <div className={`${styles['service-row']} fade-up`}>
                    <div className={`${styles['service-header']}`}>
                        <span className={`${styles['service-index']}`}>03</span>
                        <h3>AI & ML Integrations</h3>
                        <i className={`fas fa-arrow-right ${styles['service-arrow']}`}></i>
                    </div>
                    <div className={`${styles['service-body']}`}>
                        <div className={`${styles['service-body-inner']}`}>
                            <p>Empowering businesses by integrating smart functionality. Whether it's setting up predictive models, natural language processing tools, or automated intelligent processes to reduce overhead.</p>
                            
                            <div className={`${styles['service-features']}`}>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Model Deployment</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Data Processing APIs</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Text Classification</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Python & TensorFlow</div>
                            </div>
                            
                            <div><Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link></div>
                        </div>
                    </div>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fas fa-brain"></i>
                    </div>
                </div>

                <div className={`${styles['service-row']} fade-up`}>
                    <div className={`${styles['service-header']}`}>
                        <span className={`${styles['service-index']}`}>04</span>
                        <h3>UI/UX Design</h3>
                        <i className={`fas fa-arrow-right ${styles['service-arrow']}`}></i>
                    </div>
                    <div className={`${styles['service-body']}`}>
                        <div className={`${styles['service-body-inner']}`}>
                            <p>Going beyond code, I craft user interfaces that captivate and engage. Prototyping intuitive user flows and building design systems that perfectly balance visual aesthetic with accessibility.</p>
                            
                            <div className={`${styles['service-features']}`}>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Wireframing</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> High-Fidelity Mockups</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Interactive Prototypes</div>
                                <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Design Systems</div>
                            </div>
                            
                            <div><Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link></div>
                        </div>
                    </div>
                    <div className={`${styles['service-visual']}`}>
                        <i className="fas fa-pen-nib"></i>
                    </div>
                </div>

            </div>'''

tsx_content = re.sub(r'<div className={`\$\{styles\[\'services-grid\'\]\}`\}>.*?</div>\s*</div>\s*</section>', new_tsx + '\n        </div>\n    </section>', tsx_content, flags=re.MULTILINE|re.DOTALL)

with open('src/pages/Services.tsx', 'w') as f:
    f.write(tsx_content)

