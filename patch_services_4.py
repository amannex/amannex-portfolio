import re

with open('src/pages/Services.module.css', 'r') as f:
    css = f.read()

css = re.sub(
    r'\.service-card \{[\s\S]*?position: relative;\n        \}',
    '''.service-card {\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n            border-bottom: 1px solid var(--border-light);\n            padding: 4rem 0;\n            transition: all var(--transition-smooth);\n            overflow: hidden;\n            position: relative;\n        }\n\n        .service-card:first-child {\n            border-top: 1px solid var(--border-light);\n        }''',
    css
)

css = re.sub(
    r'\.service-card:hover \{[\s\S]*?transform: translateY\(-5px\);\n        \}',
    '''.service-card:hover {\n            border-color: var(--accent-color);\n        }''',
    css
)

with open('src/pages/Services.module.css', 'w') as f:
    f.write(css)

with open('src/pages/Services.tsx', 'r') as f:
    tsx = f.read()

new_service = '''                <div className={`${styles['service-card']} fade-up`}>
                    <h3 className={`${styles['service-title']}`}>CMS to WordPress Migration</h3>
                    <div className={`${styles['service-card-grid']}`}>
                        <div className={`${styles['service-content']}`}>
                            <div className={`${styles['service-body']}`}>
                                <div className={`${styles['service-body-inner']}`}>
                                    <p>Seamlessly migrate your existing website to WordPress from any CMS (Wix, Squarespace, Webflow, Shopify, or Custom HTML). I ensure zero data loss, perfect SEO preservation, and a smooth transition to a more powerful platform.</p>
                                    
                                    <div className={`${styles['service-features']}`}>
                                        <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> SEO Preservation</div>
                                        <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Zero Data Loss</div>
                                        <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> Content Mapping</div>
                                        <div className={`${styles['service-feature']}`}><i className="fas fa-check"></i> URL Redirection</div>
                                    </div>
                                    
                                    <div><Link to="/contact" className="btn btn-outline interactive-element">Start a Project <i className="fas fa-arrow-right"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['service-visual-container']}`}>
                            <div className={`${styles['service-body']}`}>
                                <div className={`${styles['service-body-inner']}`}>
                                    <div className={`${styles['service-visual']}`}>
                                        <i className="fas fa-exchange-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>\n\n'''

tsx = tsx.replace(
    '<div className={`${styles[\'services-grid\']}`}>\n                \n',
    f'<div className={{`${{styles[\'services-grid\']}}`}}>\n                \n{new_service}'
)

with open('src/pages/Services.tsx', 'w') as f:
    f.write(tsx)
