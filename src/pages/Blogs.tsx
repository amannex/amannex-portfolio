import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './Blogs.module.css';
import { blogCategories, featuredBlogPost, blogPosts } from '../data/static';

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
                {blogCategories.map((cat, index) => (
                    <button key={index} className={`${styles['filter-btn']} ${index === 0 ? 'active' : ''} interactive-element`}>{cat}</button>
                ))}
            </div>

            
            <div className={`${styles['featured-post']} fade-up`}>
                <Link to={featuredBlogPost.link} className={`${styles['featured-img-container']} interactive-element`}>
                    <img src={featuredBlogPost.img} alt="Featured Blog Image" />
                </Link>
                <div className={`${styles['featured-content']}`}>
                    <div className={`${styles['post-meta']}`}>
                        <span className={`${styles['post-category']}`}>{featuredBlogPost.category}</span>
                        <span><i className={`far fa-calendar-alt`}></i> {featuredBlogPost.date}</span>
                        <span><i className={`far fa-clock`}></i> {featuredBlogPost.readTime}</span>
                    </div>
                    <Link to={featuredBlogPost.link} className="interactive-element">
                        <h2 className={`${styles['post-title']}`}>{featuredBlogPost.title}</h2>
                    </Link>
                    <p className={`${styles['post-excerpt']}`}>{featuredBlogPost.excerpt}</p>
                    <Link to={featuredBlogPost.link} className={`${styles['read-more']} interactive-element`}>Read Full Article <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>

            
            <div className={`${styles['blog-grid']}`}>
                {blogPosts.map((post, index) => (
                    <article key={index} className={`${styles['blog-card']} fade-up`} style={{ transitionDelay: post.delay }}>
                        <Link to={post.link} className={`${styles['blog-card-img']} interactive-element`}>
                            <img src={post.img} alt={post.title} />
                        </Link>
                        <div className={`${styles['post-meta']}`}>
                            <span className={`${styles['post-category']}`}>{post.category}</span>
                            <span><i className={`far fa-calendar-alt`}></i> {post.date}</span>
                        </div>
                        <Link to={post.link} className="interactive-element">
                            <h3 className={`${styles['post-title']}`}>{post.title}</h3>
                        </Link>
                        <p className={`${styles['post-excerpt']}`}>{post.excerpt}</p>
                        <Link to={post.link} className={`${styles['read-more']} interactive-element`}>Read Mode <i className="fas fa-arrow-right"></i></Link>
                    </article>
                ))}
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
