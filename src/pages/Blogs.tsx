import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './Blogs.module.css';


const Blogs = () => {

    return (
        <>
            <SEO 
                title="Blogs"
                description="Read the latest articles on web development, UI/UX design, software engineering, and AI from Aman Saifi."
                canonicalUrl="https://amannex.me/blogs"
            />
    <header className="page-header">
        <div className="container fade-up">
            <span className="hero-badge"><i className="fas fa-pen-nib" style={{"fontSize":"0.75rem","marginRight":"0.5rem","verticalAlign":"middle","color":"var(--accent-color)"}}></i> Thoughts & Insights</span>
            <h1 className="page-title">My <span className="gradient-text">Journal</span></h1>
            <p className="section-subtitle" style={{"marginBottom":"1.5rem"}}>Exploring web development, artificial intelligence, UI/UX design, and the digital landscape.</p>
            
            <div className={`${styles['search-container']} interactive-element`}>
                <input type="text" className={`${styles['search-input']}`} placeholder="Search for articles, topics, or keywords..." />
                <button className={`${styles['search-btn']}`}><i className="fas fa-search"></i></button>
            </div>
        </div>
    </header>

    
    <section className="section section-alt">
        <div className="container">
            
            
            <div className={`${styles['blog-filters']} fade-up`}>
                <button className={`${styles['filter-btn']} active interactive-element`}>All Posts</button>
                <button className={`${styles['filter-btn']} interactive-element`}>Web Development</button>
                <button className={`${styles['filter-btn']} interactive-element`}>UI/UX Design</button>
                <button className={`${styles['filter-btn']} interactive-element`}>Artificial Intelligence</button>
                <button className={`${styles['filter-btn']} interactive-element`}>Career & Productivity</button>
            </div>

            
            <div className={`${styles['featured-post']} fade-up`}>
                <Link to="/single-post" className={`${styles['featured-img-container']} interactive-element`}>
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Featured Blog Image" />
                </Link>
                <div className={`${styles['featured-content']}`}>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>Web Development</span>
                        <span><i className={`far fa-calendar-alt`}></i> Apr 12, 2026</span>
                        <span><i className={`far fa-clock`}></i> 8 min read</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h2 className={`${styles['post-title']}`}>The Future of Frontend: Micro-Frontends & Module Federation Explained</h2>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>As applications grow in complexity, managing monstrous monoliths becomes a nightmare. Micro-frontends offer a solution by breaking down the UI into smaller, independently deployable pieces. Learn how Module Federation in Webpack 5 is changing the game.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Full Article <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>

            
            <div className={`${styles['blog-grid']}`}>
                
                
                <article className={`${styles['blog-card']} fade-up`}>
                    <Link to="/single-post" className={`${styles['blog-card-img']} interactive-element`}>
                        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI in Development" />
                    </Link>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>Artificial Intelligence</span>
                        <span><i className={`far fa-calendar-alt`}></i> Mar 28, 2026</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h3 className={`${styles['post-title']}`}>Integrating LLMs into Modern SaaS Applications</h3>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>Discover practical patterns for weaving Large Language Models into your existing software products, from smart search functionalities to completely automated user workflows.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                </article>

                
                <article className={`${styles['blog-card']} fade-up`} style={{"transitionDelay":"0.1s"}}>
                    <Link to="/single-post" className={`${styles['blog-card-img']} interactive-element`}>
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Design Systems" />
                    </Link>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>UI/UX Design</span>
                        <span><i className={`far fa-calendar-alt`}></i> Mar 15, 2026</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h3 className={`${styles['post-title']}`}>Building Scalable Design Systems in Figma</h3>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>A comprehensive guide on variables, auto-layout, and component properties to create robust design systems that bridge the gap between designers and developers.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                </article>

                
                <article className={`${styles['blog-card']} fade-up`} style={{"transitionDelay":"0.2s"}}>
                    <Link to="/single-post" className={`${styles['blog-card-img']} interactive-element`}>
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Productivity" />
                    </Link>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>Productivity</span>
                        <span><i className={`far fa-calendar-alt`}></i> Feb 22, 2026</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h3 className={`${styles['post-title']}`}>My Developer Setup: Tools that 10x My Output</h3>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>Take a look at the terminal setups, VS Code extensions, and daily workflows I use to stay focused and write high-quality code efficiently.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                </article>

                
                <article className={`${styles['blog-card']} fade-up`} style={{"transitionDelay":"0.3s"}}>
                    <Link to="/single-post" className={`${styles['blog-card-img']} interactive-element`}>
                        <img src="https://images.unsplash.com/photo-1618477247222-ac60c62fdfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="React Performance" />
                    </Link>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>Web Development</span>
                        <span><i className={`far fa-calendar-alt`}></i> Feb 10, 2026</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h3 className={`${styles['post-title']}`}>Advanced React Performance Tuning</h3>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>Stop guessing why your React app is slow. Use the Profiler API to pinpoint unnecessary re-renders and implement memoization correctly.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                </article>
                
                
                <article className={`${styles['blog-card']} fade-up`} style={{"transitionDelay":"0.4s"}}>
                    <Link to="/single-post" className={`${styles['blog-card-img']} interactive-element`}>
                        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Python Scripting" />
                    </Link>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>Artificial Intelligence</span>
                        <span><i className={`far fa-calendar-alt`}></i> Jan 29, 2026</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h3 className={`${styles['post-title']}`}>Python Scripts Every Developer Needs</h3>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>A collection of handy Python automation scripts to handle repetitive tasks, data cleaning, and API testing in your day-to-day workflow.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                </article>

                
                <article className={`${styles['blog-card']} fade-up`} style={{"transitionDelay":"0.5s"}}>
                    <Link to="/single-post" className={`${styles['blog-card-img']} interactive-element`}>
                        <img src="https://images.unsplash.com/photo-1627398240366-077a28e5f2cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="UX principles" />
                    </Link>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>UI/UX Design</span>
                        <span><i className={`far fa-calendar-alt`}></i> Jan 14, 2026</span>
                    </div>
                    <Link to="/single-post" className="interactive-element">
                        <h3 className={`${styles['post-title']}`}>Psychological Principles in Web Design</h3>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>How to use Cognitive Load theory, Hick's Law, and the Von Restorff effect to design interfaces that users naturally understand and enjoy using.</p>
                    <Link to="/single-post" className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                </article>

            </div>

            
            <div className={`${styles.pagination} fade-up`}>
                <button className={`${styles['page-btn']} interactive-element`}><i className="fas fa-chevron-left"></i></button>
                <button className={`${styles['page-btn']} active interactive-element`}>1</button>
                <button className={`${styles['page-btn']} interactive-element`}>2</button>
                <button className={`${styles['page-btn']} interactive-element`}>3</button>
                <span style={{"display":"flex","alignItems":"end","padding":"0 0.5rem","color":"var(--text-muted)"}}>...</span>
                <button className={`${styles['page-btn']} interactive-element`}>8</button>
                <button className={`${styles['page-btn']} interactive-element`}><i className="fas fa-chevron-right"></i></button>
            </div>

            
            <div className={`${styles['cta-section']} fade-up`}>
                <h2>Never Miss an Update</h2>
                <p>Join the newsletter to receive my latest articles, coding tutorials, and design resources directly in your inbox. No spam, ever.</p>
                <form className={`${styles['newsletter-form']}`}>
                    <input type="email" className={`${styles['newsletter-input']}`} placeholder="Enter your email address" required />
                    <button type="submit" className={`${styles['newsletter-btn']} interactive-element`}>Subscribe <i className="fas fa-paper-plane" style={{"marginLeft":"0.5rem"}}></i></button>
                </form>
            </div>

        </div>
    </section>

    
        </>
    );
};

export default Blogs;
