import sys
import re

with open('src/pages/Services.tsx', 'r') as f:
    tsx_content = f.read()

new_tsx = '''            <div className={`${styles['services-grid']}`}>
                
                <div className={`${styles['service-card']} fade-up`}>
                    <h3 className={`${styles['service-title']}`}>Full Stack Development</h3>
                    <div className={`${styles['service-card-grid']}`}>
                        <div className={`${styles['service-content']}`}>
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
                </div>

                <div className={`${styles['service-card']} fade-up`}>
                    <h3 className={`${styles['service-title']}`}>WordPress Ecosystem</h3>
                    <div className={`${styles['service-card-grid']}`}>
                        <div className={`${styles['service-content']}`}>
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
                </div>

                <div className={`${styles['service-card']} fade-up`}>
                    <h3 className={`${styles['service-title']}`}>AI & ML Integrations</h3>
                    <div className={`${styles['service-card-grid']}`}>
                        <div className={`${styles['service-content']}`}>
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
                </div>

                <div className={`${styles['service-card']} fade-up`}>
                    <h3 className={`${styles['service-title']}`}>UI/UX Design</h3>
                    <div className={`${styles['service-card-grid']}`}>
                        <div className={`${styles['service-content']}`}>
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
                </div>

            </div>'''

tsx_content = re.sub(r'<div className={`\$\{styles\[\'services-grid\'\]\}`\}>.*?</div>\s*</div>\s*</section>', new_tsx + '\n        </div>\n    </section>', tsx_content, flags=re.MULTILINE|re.DOTALL)

with open('src/pages/Services.tsx', 'w') as f:
    f.write(tsx_content)

