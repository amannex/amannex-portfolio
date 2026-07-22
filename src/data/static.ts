/**
 * Static Data Definitions
 * 
 * This file serves as a centralized "database" for the application's static content.
 * It contains all the text, imagery, and links for services, portfolio items, blog posts,
 * and site-wide elements like navigation and social links.
 * 
 * Editing this file will update content across the site without needing to modify components.
 */

export const servicesData = [
  {
    title: "Any CMS to WordPress Migration",
    description:
      "Seamlessly migrate your existing website to WordPress from any CMS (Wix, Squarespace, Webflow, Shopify, or Custom HTML). I ensure zero data loss, perfect SEO preservation, and a smooth transition to a more powerful platform.",
    features: [
      "SEO Preservation",
      "Zero Data Loss",
      "Content Mapping",
      "URL Redirection",
    ],
    icon: "fas fa-server",
    link: "/contact",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end software development crafting robust backends and interactive frontends. I build scalable architectures tailored to specific business requirements, ensuring high performance, security, and exceptional user experiences.",
    features: [
      "RESTful API Design",
      "Database Modeling",
      "Cloud Deployment",
      "SPA Architecture",
    ],
    icon: "fas fa-laptop-code",
    link: "/contact",
  },
  {
    title: "WordPress Development",
    description:
      "Designing sophisticated, high-conversion websites utilizing the complete power of WordPress. From custom theme creation and plugin integration to seamless e-commerce setups with WooCommerce.",
    features: [
      "Custom Theme Design",
      "Divi / Elementor",
      "Speed Optimization",
      "WooCommerce Setup",
    ],
    icon: "fas fa-paint-roller",
    link: "/contact",
  },
  {
    title: "AI & ML Integrations",
    description:
      "Empowering businesses by integrating smart functionality. Whether it's setting up predictive models, natural language processing tools, or automated intelligent processes to reduce overhead.",
    features: [
      "Model Deployment",
      "Data Processing APIs",
      "Text Classification",
      "Python & TensorFlow",
    ],
    icon: "fas fa-network-wired",
    link: "/contact",
  },
  {
    title: "UI/UX Design",
    description:
      "Going beyond code, I craft user interfaces that captivate and engage. Prototyping intuitive user flows and building design systems that perfectly balance visual aesthetic with accessibility.",
    features: [
      "Wireframing",
      "High-Fidelity Mockups",
      "Interactive Prototypes",
      "Design Systems",
    ],
    icon: "fas fa-drafting-compass",
    link: "/contact",
  },
];

export const portfolioProjects = [
  {
    id: 1,
    category: "ai-ml",
    tag: "AI / ML",
    title: "Fake News Detector",
    desc: "An advanced text-classification system built using Python and deep learning models (BiLSTM) to accurately identify and filter out misleading news articles.",
    img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    delay: "0.2s",
  },
  {
    id: 2,
    category: "wordpress",
    tag: "WordPress",
    title: "Markencia Agency",
    desc: "A premium, high-conversion Marketing Agency website built exclusively on WordPress utilizing sophisticated layouts, custom post types, and dynamic filtering.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    delay: "0.3s",
  },
  {
    id: 3,
    category: "fullstack",
    tag: "Full Stack",
    title: "E-Commerce Architecture",
    desc: "A robust online shopping platform developed with Java/Spring Boot backend, secure authentication, and a responsive React JS frontend.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800",
    delay: "0.4s",
  },
  {
    id: 4,
    category: "design",
    tag: "Web Design",
    title: "SaaS Dashboard UI",
    desc: "A highly interactive, data-rich analytics dashboard focusing on user experience, modern glassmorphism aesthetics, and data visualization best practices.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    delay: "0.5s",
  },
  {
    id: 5,
    category: "ai-ml",
    tag: "AI / ML",
    title: "Customer Support Bot",
    desc: "Integrated natural language processing to build an intelligent conversational bot capable of resolving up to 70% of common customer tier-1 queries seamlessly.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    delay: "0.6s",
  },
  {
    id: 6,
    category: "wordpress",
    tag: "WordPress",
    title: "Tech Journal Blog",
    desc: "Developed a highly optimized, SEO-friendly custom WordPress theme for a prominent tech publication, featuring lightning-fast load times and advanced monetization spots.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    delay: "0.7s",
  },
];

export const featuredProjects = [
  {
    tag: "AI / ML",
    title: "NextGen Analytics",
    desc: "An enterprise-level dashboard utilizing predictive machine learning models to forecast market trends and automate reporting.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    tag: "Full Stack",
    title: "Seamless E-Commerce",
    desc: "A highly scalable online marketplace architecture handling 10k+ daily transactions with ultra-fast page loads.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    tag: "WordPress",
    title: "Elevated Agency",
    desc: "A bespoke headless WordPress solution crafted for a top-tier digital agency, featuring modular block editing.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    tag: "SaaS App",
    title: "Workflow Automator",
    desc: "A cloud-based workflow automation tool integrating complex API chains to boost productivity by over 40%.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    tag: "React UI",
    title: "FinTech Dashboard",
    desc: "A real-time cryptocurrency tracking platform featuring WebSockets, advanced chart visualization, and a dark mode interface.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
];

export const homeServices = [
  {
    icon: "fas fa-layer-group",
    title: "Full Stack Development",
    desc: "Building scalable backend architectures with Java/Spring Boot and dynamic front-end interfaces using modern frameworks.",
    delay: "0.2s",
  },
  {
    icon: "fab fa-wordpress",
    title: "WordPress Elements",
    desc: "Crafting custom, responsive WordPress themes and robust e-commerce architectures using tools like Elementor and Divi.",
    delay: "0.3s",
  },
  {
    icon: "fas fa-brain",
    title: "AI & ML Integrations",
    desc: "Integrating advanced machine learning models and intelligent automation to solve complex business challenges securely.",
    delay: "0.4s",
  },
];

export const homeFeaturedProjects = [
  {
    tag: "AI / ML",
    title: "Fake News Detector",
    desc: "An advanced text-classification system built using Python and deep learning models (BiLSTM) to accurately identify and filter out misleading news articles.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/portfolio",
    delay: "0.2s",
  },
  {
    tag: "WordPress",
    title: "Markencia Agency",
    desc: "A premium, high-conversion Marketing Agency website built exclusively on WordPress utilizing sophisticated layouts and dynamic post filtering.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/portfolio",
    delay: "0.3s",
  },
  {
    tag: "React Native",
    title: "E-Commerce App",
    desc: "A cross-platform mobile application providing seamless shopping experiences with secure payment gateway integration and real-time order tracking.",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/portfolio",
    delay: "0.4s",
  },
];

export const storyData = [
  {
    period: "The Beginning",
    title: "First Lines of Code",
    subtitle: "Self-Taught Origins",
    summary:
      "Where it all started. I wrote my first lines of code and immediately fell in love with web development and building things from scratch.",
    struggle:
      "Learning completely on my own was incredibly overwhelming. There were nights I spent hours just trying to fix a single missing semicolon. I struggled with tutorial hell and imposter syndrome, constantly wondering if I was smart enough for this field.",
    breakthrough:
      "I finally built my first ugly but functional HTML/CSS website from scratch without a tutorial. That single moment of seeing my code come to life on the screen gave me the confidence to keep going.",
  },
  {
    period: "The Grind",
    title: "The Academic & Skill Grind",
    subtitle: "B.Tech in Computer Science",
    summary:
      "I formally enrolled in a Computer Science degree to solidify my foundations and dive into complex architectures while learning modern frameworks on the side.",
    struggle:
      "Balancing intense university coursework with self-teaching modern web frameworks was exhausting. The theoretical math felt disconnected from the beautiful UI I wanted to build. Burnout was a constant shadow over me.",
    breakthrough:
      "I realized I could merge my academic knowledge with my web passion. I built an advanced AI Fake News detector for my major project, successfully combining machine learning with a full-stack interface.",
  },
  {
    period: "The Professional World",
    title: "Entering the Professional Arena",
    subtitle: "Markencia Agency",
    summary:
      "I landed my first core developer role, tasked with building high-conversion, premium digital experiences for real clients and businesses.",
    struggle:
      "The transition from solo developer to working on production-level enterprise code was a huge shock. I faced massive pressure dealing with tight client deadlines, legacy codebases, and the anxiety of pushing code that users would interact with.",
    breakthrough:
      "I learned to communicate effectively with designers and stakeholders, mastered advanced WordPress architectures, and led the integration of AI tools that revolutionized the agency's workflow.",
  },
  {
    period: "Now",
    title: "The Independent Developer",
    subtitle: "Aman Saifi / Amannex Global",
    summary:
      "Taking the leap to become a freelance Full Stack Developer and Content Creator, building a brand around my expertise.",
    struggle:
      "Freelancing means you are the developer, the marketer, and the project manager all at once. Finding consistent clients while maintaining the incredibly high standard of design and code quality I set for myself has been a massive balancing act.",
    breakthrough:
      "Establishing my own brand allowed me to pick projects I truly care about. I now consistently deliver bespoke, high-performance web solutions that empower businesses worldwide.",
  },
];

export const technologiesData = [
  { name: "Java", icon: "fab fa-java" },
  { name: "Spring Boot", icon: "fab fa-envira" },
  { name: "React", icon: "fab fa-react" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "WordPress", icon: "fab fa-wordpress" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "SQL/NoSQL", icon: "fas fa-database" },
  { name: "Git & GitHub", icon: "fab fa-github" },
];

export const contactInfo = [
  {
    title: "Location",
    detail: "Remote / Global",
    icon: "fas fa-map-marker-alt",
  },
  {
    title: "Email",
    detail: "hello@amannex.me",
    icon: "fas fa-envelope",
  },
];

export const socialLinks = [
  { icon: "fab fa-twitter", link: "#" },
  { icon: "fab fa-github", link: "#" },
  { icon: "fab fa-linkedin-in", link: "#" },
  { icon: "fab fa-youtube", link: "#" },
];

export const faqsData = [
  {
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround time varies based on the scope and complexity of the project. A standard multi-page website usually takes around 2-3 weeks, while more complex web applications with AI integrations can take 1-2 months.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! I offer dedicated maintenance packages to ensure your website remains secure, fast, and up-to-date with the latest features and plugin updates, particularly for WordPress platforms.",
  },
  {
    question: "What is your design process?",
    answer:
      "Everything starts with a discovery call to understand your goals. From there, I create wireframes and UI mockups. Once approved, I move into semantic, responsive HTML/CSS/JS development and integrate necessary backends or CMS solutions.",
  },
];

export const blogCategories = [
  "All Posts",
  "Web Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "Career & Productivity",
];

export const featuredBlogPost = {
  title:
    "The Future of Frontend: Micro-Frontends & Module Federation Explained",
  category: "Web Development",
  date: "Apr 12, 2026",
  readTime: "8 min read",
  excerpt:
    "As applications grow in complexity, managing monstrous monoliths becomes a nightmare. Micro-frontends offer a solution by breaking down the UI into smaller, independently deployable pieces. Learn how Module Federation in Webpack 5 is changing the game.",
  img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  link: "/single-post",
};

export const blogPosts = [
  {
    title: "Integrating LLMs into Modern SaaS Applications",
    category: "Artificial Intelligence",
    date: "Mar 28, 2026",
    excerpt:
      "Discover practical patterns for weaving Large Language Models into your existing software products, from smart search functionalities to completely automated user workflows.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/single-post",
    delay: "0s",
  },
  {
    title: "Building Scalable Design Systems in Figma",
    category: "UI/UX Design",
    date: "Mar 15, 2026",
    excerpt:
      "A comprehensive guide on variables, auto-layout, and component properties to create robust design systems that bridge the gap between designers and developers.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/single-post",
    delay: "0.1s",
  },
  {
    title: "My Developer Setup: Tools that 10x My Output",
    category: "Career & Productivity",
    date: "Feb 22, 2026",
    excerpt:
      "Take a look at the terminal setups, VS Code extensions, and daily workflows I use to stay focused and write high-quality code efficiently.",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/single-post",
    delay: "0.2s",
  },
  {
    title: "Advanced React Performance Tuning",
    category: "Web Development",
    date: "Feb 10, 2026",
    excerpt:
      "Stop guessing why your React app is slow. Use the Profiler API to pinpoint unnecessary re-renders and implement memoization correctly.",
    img: "https://images.unsplash.com/photo-1618477247222-ac60c62fdfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/single-post",
    delay: "0.3s",
  },
  {
    title: "Python Scripts Every Developer Needs",
    category: "Artificial Intelligence",
    date: "Jan 29, 2026",
    excerpt:
      "A collection of handy Python automation scripts to handle repetitive tasks, data cleaning, and API testing in your day-to-day workflow.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/single-post",
    delay: "0.4s",
  },
  {
    title: "Psychological Principles in Web Design",
    category: "UI/UX Design",
    date: "Jan 14, 2026",
    excerpt:
      "How to use Cognitive Load theory, Hick's Law, and the Von Restorff effect to design interfaces that users naturally understand and enjoy using.",
    img: "https://images.unsplash.com/photo-1627398240366-077a28e5f2cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/single-post",
    delay: "0.5s",
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "What I Do", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blogs", path: "/blogs" },
];

export const footerSocials = [
  { name: "GITHUB", link: "https://github.com/saifiaman" },
  { name: "LINKEDIN", link: "https://www.linkedin.com/in/amannex/" },
  { name: "TWITTER", link: "https://www.instagram.com/amannex_/" },
];

export const singlePostInfo = {
  title: "The Future of Frontend: Micro-Frontends with Module Federation",
  category: "Architecture",
  author: "Aman Saifi",
  date: "April 15, 2026",
  featuredImage:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
};

export const singlePostContent = `As applications grow in complexity, the traditional monolithic frontend architecture begins to show its cracks. Build times slow to a crawl, team autonomy vanishes, and deploying a simple text change requires shipping the entire application. Enter Micro-Frontends. What are Micro-Frontends? Micro-frontends are the frontend equivalent of microservices. They allow multiple independent teams to build, test, and deploy pieces of a user interface independently, which are then assembled into a single cohesive application. The Problem with Monoliths In a monolithic frontend: Codebase Size: The repository becomes massive and intimidating for new developers. Deployment Bottlenecks: A bug in the marketing sidebar can block the deployment of the critical checkout flow. Framework Lock-in: Upgrading from React 17 to React 18 requires upgrading the entire application at once, which is often a multi-month refactoring nightmare. "Micro-frontends are not a silver bullet, but they are the most effective way to scale UI development across multiple independent teams." How Module Federation Changes the Game Historically, implementing micro-frontends was hard. You had to rely on iframes (poor UX), Nginx routing (hard to share state), or single-spa (complex configuration). Then Webpack 5 introduced Module Federation. Module Federation allows a JavaScript application to dynamically load code from another application — at runtime. Both applications can share dependencies, so if App A and App B both use react@18, it is only downloaded once by the user. A Simple Webpack Configuration Here is an example of how you expose a component from a remote application using Module Federation: In your host application, you can now consume this button as if it were a local import, but its code is loaded over the network only when it is needed. This fundamentally changes how we think about code splitting and application delivery. When Should You Use Micro-Frontends? It's important to remember that micro-frontends add complexity. You should only adopt them if: You have multiple distinct teams (e.g., 20+ frontend developers). Different teams need to deploy independently without coordinating release cycles. You have distinct domains within your application (e.g., a Dashboard, a Billing Portal, and a User Settings panel). If you're building a simple marketing site or a small startup MVP, stick to the monolith! The overhead of managing distributed architecture is not worth it until scale demands it. Conclusion Module Federation has democratized micro-frontend architecture, making it accessible to any team using Webpack. As we move towards more modular and scalable systems, understanding these architectural patterns will be crucial for senior frontend engineers. Have you implemented micro-frontends in your organization? Let me know your thoughts and challenges!`;

export const singlePostFaqs = [
  {
    question: "What is a Micro-Frontend?",
    answer:
      "A micro-frontend is an architectural style where independently deliverable frontend applications are composed into a greater whole, allowing independent teams to build, test, and deploy pieces of a UI.",
  },
  {
    question: "How does Module Federation work?",
    answer:
      "Module Federation is a Webpack 5 feature that allows a JavaScript application to dynamically load code from another application at runtime, sharing dependencies to avoid downloading them multiple times.",
  },
  {
    question: "Is it suitable for small projects?",
    answer:
      "Generally, no. Micro-frontends add complexity and are best suited for large-scale applications with multiple autonomous teams. For simple marketing sites or small MVPs, a monolith is often more effective.",
  },
];
