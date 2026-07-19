const fs = require('fs');

const files = ['home.html', 'about.html', 'blogs.html', 'contact.html', 'portfolio.html', 'services.html', 'single-post.html'];

for (const file of files) {
    let content = fs.readFileSync('/Users/amansaifi/Documents/AmanneX/amannex--/' + file, 'utf8');
    
    // extract body content between <nav...>...</nav> and <footer...>...</footer>
    const startIdx = content.indexOf('</nav>');
    const endIdx = content.indexOf('<footer');
    
    if (startIdx !== -1 && endIdx !== -1) {
        let mainContent = content.substring(startIdx + 6, endIdx).trim();
        
        // Remove comments
        mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, '');
        
        // Escape { and } before doing anything else (except for those we want to keep, but currently there are none in the raw HTML)
        mainContent = mainContent.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');
        
        // class -> className, for -> htmlFor
        mainContent = mainContent.replace(/class="/g, 'className="');
        mainContent = mainContent.replace(/for="/g, 'htmlFor="');
        
        // Fix inline styles
        mainContent = mainContent.replace(/style="(.*?)"/g, (match, styleString) => {
            const rules = styleString.split(';').filter(r => r.trim() !== '');
            const styleObj = {};
            rules.forEach(rule => {
                let [key, ...values] = rule.split(':');
                let value = values.join(':');
                if (key && value) {
                    key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styleObj[key] = value.trim();
                }
            });
            return 'style={' + JSON.stringify(styleObj) + '}';
        });
        
        // Fix self-closing tags (img, input, hr, br)
        mainContent = mainContent.replace(/<(img|input|hr|br|source)([^>]*?)(?<!\/)>/g, '<$1$2 />');
        
        // Fix <a> tags pointing to internal pages
        mainContent = mainContent.replace(/<a href="([^"]+\.html)"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
            let to = p1 === 'home.html' ? '/' : '/' + p1.replace('.html', '');
            return `<Link to="${to}"${p2}>${p3}</Link>`;
        });

        // rename single-post to singlePost for component name
        let compName = file.replace('.html', '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
        if(compName === 'Home') compName = 'Home'; // just ensure capitalized
        
        let component = `import { Link } from 'react-router-dom';\nimport { useEffect } from 'react';\n\nconst ${compName} = () => {\n`;
        
        if (compName === 'Home') {
            component += `
    useEffect(() => {
        const card = document.getElementById('hero-card');
        if (card) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
            };
            const handleMouseLeave = () => {
                card.style.transform = \`perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)\`;
            };
            
            card.addEventListener('mousemove', handleMouseMove as any);
            card.addEventListener('mouseleave', handleMouseLeave);
            
            return () => {
                card.removeEventListener('mousemove', handleMouseMove as any);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);
`;
        }

        component += `
    return (
        <>
            ${mainContent}
        </>
    );
};

export default ${compName};
`;
        
        fs.writeFileSync('/Users/amansaifi/Documents/AmanneX/amannex/src/pages/' + compName + '.tsx', component);
    }
}
