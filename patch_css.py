import sys

with open('src/pages/Services.module.css', 'r') as f:
    content = f.read()

new_css = '''        /* Bento Box Service Cards */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(350px, auto);
            gap: 2rem;
            margin-top: 3rem;
        }

        .bento-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: var(--border-radius-lg);
            border: 1px solid var(--border-light);
            padding: 3rem;
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-smooth);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            z-index: 1;
        }
        
        .bento-card:hover {
            box-shadow: var(--shadow-lg), 0 15px 40px rgba(255, 180, 0, 0.1);
            border-color: rgba(255, 180, 0, 0.3);
            transform: translateY(-5px);
        }

        /* Bento Grid Sizes */
        .bento-large {
            grid-column: span 2;
            flex-direction: row;
            align-items: center;
            gap: 3rem;
        }

        .bento-regular {
            grid-column: span 1;
        }

        /* Content Formatting */
        .service-content {
            flex: 1;
            z-index: 2;
        }

        .bento-card h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .bento-large h3 {
            font-size: 2.5rem;
        }

        .bento-card p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-size: 1.125rem;
        }

        /* Visual Element Integration */
        .service-visual {
            font-size: 8rem;
            color: var(--text-muted);
            opacity: 0.15;
            position: absolute;
            bottom: -20px;
            right: -20px;
            transition: all var(--transition-smooth);
            z-index: 1;
            pointer-events: none;
        }

        .bento-large .service-visual {
            position: relative;
            opacity: 1;
            bottom: 0;
            right: 0;
            font-size: 10rem;
            background: var(--bg-secondary);
            border-radius: var(--border-radius-lg);
            width: 250px;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-light);
            flex-shrink: 0;
            overflow: hidden;
        }
        
        .bento-large .service-visual::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
            opacity: 0.5;
            transition: transform 0.5s ease;
            z-index: -1;
        }

        .bento-card:hover .service-visual {
            color: var(--accent-color);
            opacity: 0.3;
            transform: scale(1.1);
        }

        .bento-large:hover .service-visual {
            opacity: 1;
        }

        .bento-large:hover .service-visual::before {
            transform: scale(1.2);
        }

        /* Features List */
        .service-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .bento-regular .service-features {
            grid-template-columns: 1fr;
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

import re
content = re.sub(r'/\* Detailed Service Cards \*/.*?\.service-details-card:hover \.service-visual i \{[\s\S]*?\}', new_css, content, flags=re.MULTILINE)

# Also fix the media query at the bottom
new_media = '''        @media (max-width: 992px) {
            .services-grid {
                grid-template-columns: 1fr;
            }
            .bento-large {
                grid-column: span 1;
                flex-direction: column;
                align-items: flex-start;
                gap: 2rem;
            }
            .bento-large .service-visual {
                width: 100%;
                height: 200px;
            }
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }'''

content = re.sub(r'@media \(max-width: 992px\) \{[\s\S]*?\.footer-content \{[\s\S]*?\}[\s]*?\}', new_media, content, flags=re.MULTILINE)

with open('src/pages/Services.module.css', 'w') as f:
    f.write(content)
