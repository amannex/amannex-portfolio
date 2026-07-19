const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

// Update About.tsx
const aboutPath = path.join(srcDir, 'About.tsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');
aboutContent = aboutContent.replace(
    /<header className=\{\`\$\{styles\['page-header'\]\}\s*container fade-up\`\}>[\s\S]*?<\/header>/,
    `<header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-user" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> My Background</span>
            <h1 className="page-title">About <span className="gradient-text">Me</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Learn more about my background, skills, and the journey that got me here.</p>
        </div>
    </header>`
);
fs.writeFileSync(aboutPath, aboutContent);

// Update Portfolio.tsx
const portfolioPath = path.join(srcDir, 'Portfolio.tsx');
let portfolioContent = fs.readFileSync(portfolioPath, 'utf8');
portfolioContent = portfolioContent.replace(
    /<header className=\{\`\$\{styles\['page-header'\]\}\`\}>[\s\S]*?<\/header>/,
    `<header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-briefcase" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Portfolio</span>
            <h1 className="page-title">Our <span className="gradient-text">Work</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Explore a collection of recent projects spanning AI/ML, Full Stack Web Development, and Custom WordPress Solutions. I transform complex ideas into intuitive, scalable experiences.</p>
        </div>
    </header>`
);
fs.writeFileSync(portfolioPath, portfolioContent);

// Update Contact.tsx
const contactPath = path.join(srcDir, 'Contact.tsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');
contactContent = contactContent.replace(
    /<header className=\{\`\$\{styles\['page-header'\]\}\s*container fade-up\`\}>[\s\S]*?<\/header>/,
    `<header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-envelope" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Contact Me</span>
            <h1 className="page-title">Get in <span className="gradient-text">Touch</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Have a vision for your next digital product? Let's discuss how we can bring it to life with modern technology and elegant design.</p>
        </div>
    </header>`
);
fs.writeFileSync(contactPath, contactContent);

// Update Services.tsx
const servicesPath = path.join(srcDir, 'Services.tsx');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');
servicesContent = servicesContent.replace(
    /<header className=\{\`\$\{styles\['page-header'\]\}\`\}>[\s\S]*?<\/header>/,
    `<header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-star" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Expertise & Offerings</span>
            <h1 className="page-title">Digital <span className="gradient-text">Solutions</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"0"}}>Comprehensive suite of technical and design services tailored for modern digital experiences.</p>
        </div>
    </header>`
);
fs.writeFileSync(servicesPath, servicesContent);

// Update Blogs.tsx
const blogsPath = path.join(srcDir, 'Blogs.tsx');
let blogsContent = fs.readFileSync(blogsPath, 'utf8');
blogsContent = blogsContent.replace(
    /<header className=\{\`\$\{styles\['page-header'\]\}\`\}>[\s\S]*?<\/div>\s*<\/header>/,
    `<header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-pen-nib" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Thoughts & Insights</span>
            <h1 className="page-title">My <span className="gradient-text">Journal</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"1.5rem"}}>Exploring web development, artificial intelligence, UI/UX design, and the digital landscape.</p>
            
            <div className={\`\${styles['search-container']} interactive-element\`}>
                <input type="text" className={\`\${styles['search-input']}\`} placeholder="Search for articles, topics, or keywords..." />
                <button className={\`\${styles['search-btn']}\`}><i className="fas fa-search"></i></button>
            </div>
        </div>
    </header>`
);
fs.writeFileSync(blogsPath, blogsContent);

// Clean up CSS files
const cssFiles = ['About.module.css', 'Portfolio.module.css', 'Contact.module.css', 'Services.module.css', 'Blogs.module.css'];

cssFiles.forEach(file => {
    const filePath = path.join(srcDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Remove .page-header, .page-title, .hero-badge blocks
        content = content.replace(/\.page-header\s*\{[\s\S]*?\}/g, '');
        content = content.replace(/\.page-header\s*\.hero-badge\s*\{[\s\S]*?\}/g, '');
        content = content.replace(/\.page-header\s*h1\s*\{[\s\S]*?\}/g, '');
        content = content.replace(/\.page-header\s*p\s*\{[\s\S]*?\}/g, '');
        content = content.replace(/\.page-title\s*\{[\s\S]*?\}/g, '');
        content = content.replace(/\.page-subtitle\s*\{[\s\S]*?\}/g, '');
        fs.writeFileSync(filePath, content.trim() + '\\n');
    }
});

console.log('Headers updated and CSS cleaned!');
