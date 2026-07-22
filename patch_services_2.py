import sys
import re

with open('src/pages/Services.module.css', 'r') as f:
    content = f.read()

new_css = '''        /* Expanding Alternating Cards */
        .services-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 3rem;
        }

        .service-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: flex-start;
            background: var(--bg-primary);
            border-radius: var(--border-radius-lg);
            border: 1px solid var(--border-light);
            padding: 3rem;
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-smooth);
            overflow: hidden;
            position: relative;
        }
        
        .service-card:hover {
            box-shadow: var(--shadow-lg), 0 15px 40px rgba(255, 180, 0, 0.1);
            border-color: rgba(255, 180, 0, 0.3);
            transform: translateY(-5px);
        }

        .service-card:nth-child(even) .service-content {
            order: 2;
        }
        
        .service-card:nth-child(even) .service-visual-container {
            order: 1;
        }

        /* Content Styling */
        .service-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .service-content h3 {
            font-size: 2.5rem;
            margin: 0;
            transition: color var(--transition-smooth);
        }
        
        .service-card:hover .service-content h3 {
            color: var(--accent-color);
            margin-bottom: 1.5rem;
        }

        /* Collapsible Body */
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
        }

        .service-card:hover .service-body {
            grid-template-rows: 1fr;
        }

        .service-content p {
            color: var(--text-secondary);
            font-size: 1.125rem;
            margin-top: 0;
            max-width: 100%;
        }

        /* Visual Element */
        .service-visual-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 100%;
        }

        .service-visual {
            position: relative;
            aspect-ratio: 16/9;
            border-radius: var(--border-radius-lg);
            background: var(--bg-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5rem;
            color: var(--accent-color);
            border: 1px solid var(--border-light);
            overflow: hidden;
            width: 100%;
        }
        
        .service-visual::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
            opacity: 0.5;
            transition: transform 0.5s ease;
        }

        .service-card:hover .service-visual::before {
            transform: scale(1.2);
        }

        /* Features List */
        .service-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
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

content = re.sub(r'/\* Minimalist Interactive List \*/.*?\.service-feature i \{[\s\S]*?\}', new_css, content, flags=re.MULTILINE)

new_media = '''        @media (max-width: 992px) {
            .service-card {
                grid-template-columns: 1fr;
                gap: 0;
            }
            .service-card:nth-child(even) .service-content {
                order: 1;
            }
            .service-card:nth-child(even) .service-visual-container {
                order: 2;
            }
            .service-visual {
                margin-top: 2rem;
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

new_tsx = '''            <div className={`${styles['services-grid']}`}>
                
                <div className={`${styles['service-card']} fade-up`}>
                    <div className={`${styles['service-content']}`}>
                        <h3>Full Stack Development</h3>
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
                    </div>
                    <div className={`${styles['service-visual-container']}`}>
                        <div className={`${styles['service-body']}`}>
                            <div className={`${styles['service-body-inner']}`}>
                                <div className={`${styles['service-visual']}`}>
                                    <i className="fas fa-layer-group"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['service-card']} fade-up`}>
                    <div className={`${styles['service-content']}`}>
                        <h3>WordPress Ecosystem</h3>
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
                    </div>
                    <div className={`${styles['service-visual-container']}`}>
                        <div className={`${styles['service-body']}`}>
                            <div className={`${styles['service-body-inner']}`}>
                                <div className={`${styles['service-visual']}`}>
                                    <i className="fab fa-wordpress"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['service-card']} fade-up`}>
                    <div className={`${styles['service-content']}`}>
                        <h3>AI & ML Integrations</h3>
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
                    </div>
                    <div className={`${styles['service-visual-container']}`}>
                        <div className={`${styles['service-body']}`}>
                            <div className={`${styles['service-body-inner']}`}>
                                <div className={`${styles['service-visual']}`}>
                                    <i className="fas fa-brain"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['service-card']} fade-up`}>
                    <div className={`${styles['service-content']}`}>
                        <h3>UI/UX Design</h3>
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
                    </div>
                    <div className={`${styles['service-visual-container']}`}>
                        <div className={`${styles['service-body']}`}>
                            <div className={`${styles['service-body-inner']}`}>
                                <div className={`${styles['service-visual']}`}>
                                    <i className="fas fa-pen-nib"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>'''

tsx_content = re.sub(r'<div className={`\$\{styles\[\'service-list-container\'\]\}`\}>.*?</div>\s*</div>\s*</section>', new_tsx + '\n        </div>\n    </section>', tsx_content, flags=re.MULTILINE|re.DOTALL)

with open('src/pages/Services.tsx', 'w') as f:
    f.write(tsx_content)

