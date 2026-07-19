const fs = require('fs');
const path = require('path');

const srcDir = '/Users/amansaifi/Documents/AmanneX/amannex/src';
const oldDir = '/Users/amansaifi/Documents/AmanneX/amannex--';
const pagesDir = path.join(srcDir, 'pages');

const files = ['home.html', 'about.html', 'blogs.html', 'contact.html', 'portfolio.html', 'services.html', 'single-post.html'];

const globalClasses = [
    'cursor-dot', 'cursor-outline', 'container', 'section', 'section-alt', 
    'gradient-text', 'section-title', 'section-subtitle', 'btn', 'btn-primary', 
    'btn-outline', 'navbar', 'nav-container', 'nav-logo', 'nav-links', 'nav-link', 
    'mobile-toggle', 'footer', 'footer-content', 'footer-brand', 'social-links', 
    'social-icon', 'footer-links', 'footer-bottom', 'fade-up', 'visible', 'active', 'scrolled', 'hover', 'interactive-element',
    'form-control', 'form-group'
];

for (const file of files) {
    let htmlContent = fs.readFileSync(path.join(oldDir, file), 'utf8');
    
    // Extract style block
    const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
    if (!styleMatch) continue;
    
    let cssContent = styleMatch[1];
    
    let compName = file.replace('.html', '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    if (compName === 'Home') compName = 'Home';

    fs.writeFileSync(path.join(pagesDir, compName + '.module.css'), cssContent);
    
    // Now update the TSX file
    let tsxPath = path.join(pagesDir, compName + '.tsx');
    if (fs.existsSync(tsxPath)) {
        let tsxContent = fs.readFileSync(tsxPath, 'utf8');
        
        // add import if not exists
        if (!tsxContent.includes('import styles')) {
            // Find the last import statement
            const importsEnd = tsxContent.lastIndexOf('import ');
            if (importsEnd !== -1) {
                const endOfLine = tsxContent.indexOf('\n', importsEnd);
                tsxContent = tsxContent.slice(0, endOfLine + 1) + `import styles from './${compName}.module.css';\n` + tsxContent.slice(endOfLine + 1);
            } else {
                tsxContent = `import styles from './${compName}.module.css';\n\n` + tsxContent;
            }
        }
        
        // replace className="..."
        tsxContent = tsxContent.replace(/className="([^"]+)"/g, (match, classesStr) => {
            const classes = classesStr.split(' ').filter(c => c.trim() !== '');
            let hasLocal = false;
            
            const transformed = classes.map(c => {
                if (globalClasses.includes(c) || c.startsWith('fa-') || c === 'fas' || c === 'fab') {
                    return `\${"${c}"}`; // keep as string
                } else {
                    hasLocal = true;
                    if (c.includes('-')) {
                        return `\${styles['${c}']}`;
                    } else {
                        return `\${styles.${c}}`;
                    }
                }
            });
            
            if (hasLocal) {
                let templateStr = transformed.join(' ').replace(/\$\{"([^"]+)"\}/g, '$1');
                return `className={\`${templateStr}\`}`;
            }
            
            return match; // no changes needed
        });
        
        fs.writeFileSync(tsxPath, tsxContent);
    }
}
