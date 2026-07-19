import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SinglePost.module.css';

import PostHero from '../components/blog/PostHero';
import TableOfContents from '../components/blog/TableOfContents';
import ReadingProgressBar from '../components/blog/ReadingProgressBar';

import { useReadingTime } from '../hooks/useReadingTime';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTableOfContents } from '../hooks/useTableOfContents';

const postInfo = {
  title: "The Future of Frontend: Micro-Frontends with Module Federation",
  category: "Architecture",
  author: "Aman Saifi",
  date: "April 15, 2026",
  featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
};

const rawContentForTime = `As applications grow in complexity, the traditional monolithic frontend architecture begins to show its cracks. Build times slow to a crawl, team autonomy vanishes, and deploying a simple text change requires shipping the entire application. Enter Micro-Frontends. What are Micro-Frontends? Micro-frontends are the frontend equivalent of microservices. They allow multiple independent teams to build, test, and deploy pieces of a user interface independently, which are then assembled into a single cohesive application. The Problem with Monoliths In a monolithic frontend: Codebase Size: The repository becomes massive and intimidating for new developers. Deployment Bottlenecks: A bug in the marketing sidebar can block the deployment of the critical checkout flow. Framework Lock-in: Upgrading from React 17 to React 18 requires upgrading the entire application at once, which is often a multi-month refactoring nightmare. "Micro-frontends are not a silver bullet, but they are the most effective way to scale UI development across multiple independent teams." How Module Federation Changes the Game Historically, implementing micro-frontends was hard. You had to rely on iframes (poor UX), Nginx routing (hard to share state), or single-spa (complex configuration). Then Webpack 5 introduced Module Federation. Module Federation allows a JavaScript application to dynamically load code from another application — at runtime. Both applications can share dependencies, so if App A and App B both use react@18, it is only downloaded once by the user. A Simple Webpack Configuration Here is an example of how you expose a component from a remote application using Module Federation: In your host application, you can now consume this button as if it were a local import, but its code is loaded over the network only when it is needed. This fundamentally changes how we think about code splitting and application delivery. When Should You Use Micro-Frontends? It's important to remember that micro-frontends add complexity. You should only adopt them if: You have multiple distinct teams (e.g., 20+ frontend developers). Different teams need to deploy independently without coordinating release cycles. You have distinct domains within your application (e.g., a Dashboard, a Billing Portal, and a User Settings panel). If you're building a simple marketing site or a small startup MVP, stick to the monolith! The overhead of managing distributed architecture is not worth it until scale demands it. Conclusion Module Federation has democratized micro-frontend architecture, making it accessible to any team using Webpack. As we move towards more modular and scalable systems, understanding these architectural patterns will be crucial for senior frontend engineers. Have you implemented micro-frontends in your organization? Let me know your thoughts and challenges!`;

const faqs = [
    {
        question: "What is a Micro-Frontend?",
        answer: "A micro-frontend is an architectural style where independently deliverable frontend applications are composed into a greater whole, allowing independent teams to build, test, and deploy pieces of a UI."
    },
    {
        question: "How does Module Federation work?",
        answer: "Module Federation is a Webpack 5 feature that allows a JavaScript application to dynamically load code from another application at runtime, sharing dependencies to avoid downloading them multiple times."
    },
    {
        question: "Is it suitable for small projects?",
        answer: "Generally, no. Micro-frontends add complexity and are best suited for large-scale applications with multiple autonomous teams. For simple marketing sites or small MVPs, a monolith is often more effective."
    }
];

const SinglePost = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };
    const contentRef = useRef<HTMLElement>(null);
    const scrollProgress = useScrollProgress();
    const { text: readingTime } = useReadingTime(rawContentForTime);
    const { headings, activeId, scrollToHeading } = useTableOfContents({ 
        containerRef: contentRef,
        ignoreSelector: `.${styles.inPostCta}, .${styles.authorBox}, .${styles.commentsSection}`
    });

    return (
        <div className={styles.articleSection}>
            <ReadingProgressBar progress={scrollProgress} />
            <PostHero post={postInfo} readingTime={readingTime} />

            <section style={{ paddingTop: '0.5rem' }}>
                <div className="container" style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className={styles.layout}>
                        


                        {/* Main Content Column */}
                        <main className={styles.mainContent} ref={contentRef}>
                            <article className={styles.postContent}>
                                <p>As applications grow in complexity, the traditional monolithic frontend architecture begins to show its cracks. Build times slow to a crawl, team autonomy vanishes, and deploying a simple text change requires shipping the entire application. Enter <strong>Micro-Frontends</strong>.</p>
                                
                                <h2>What are Micro-Frontends?</h2>
                                <p>Micro-frontends are the frontend equivalent of microservices. They allow multiple independent teams to build, test, and deploy pieces of a user interface independently, which are then assembled into a single cohesive application.</p>
                                
                                <h3>The Problem with Monoliths</h3>
                                <p>In a monolithic frontend:</p>
                                <ul>
                                    <li><strong>Codebase Size:</strong> The repository becomes massive and intimidating for new developers.</li>
                                    <li><strong>Deployment Bottlenecks:</strong> A bug in the marketing sidebar can block the deployment of the critical checkout flow.</li>
                                    <li><strong>Framework Lock-in:</strong> Upgrading from React 17 to React 18 requires upgrading the entire application at once, which is often a multi-month refactoring nightmare.</li>
                                </ul>

                                <blockquote>
                                    "Micro-frontends are not a silver bullet, but they are the most effective way to scale UI development across multiple independent teams."
                                </blockquote>

                                {/* CTA in between the blog */}
                                <div className={styles.inPostCta}>
                                    <h3>Enjoying this article?</h3>
                                    <p>Join my newsletter for weekly insights on web architecture, design, and modern development.</p>
                                    <a href="#" className="btn">Subscribe Now</a>
                                </div>

                                <h2>How Module Federation Changes the Game</h2>
                                <p>Historically, implementing micro-frontends was hard. You had to rely on iframes (poor UX), Nginx routing (hard to share state), or single-spa (complex configuration). Then Webpack 5 introduced <strong>Module Federation</strong>.</p>
                                
                                <p>Module Federation allows a JavaScript application to dynamically load code from another application — at runtime. Both applications can share dependencies, so if App A and App B both use <code>react@18</code>, it is only downloaded once by the user.</p>

                                <h3>A Simple Webpack Configuration</h3>
                                <p>Here is an example of how you expose a component from a remote application using Module Federation:</p>

                                <pre><code>{`const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ButtonComponent': './src/components/Button',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};`}</code></pre>

                                <p>In your host application, you can now consume this button as if it were a local import, but its code is loaded over the network only when it is needed. This fundamentally changes how we think about code splitting and application delivery.</p>

                                <figure>
                                    <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Diagram showing host and remote applications" />
                                    <figcaption>Visual representation of a Host application dynamically fetching components from Remote applications at runtime.</figcaption>
                                </figure>

                                <h2>When Should You Use Micro-Frontends?</h2>
                                <p>It's important to remember that micro-frontends add complexity. You should only adopt them if:</p>
                                <ol>
                                    <li>You have multiple distinct teams (e.g., 20+ frontend developers).</li>
                                    <li>Different teams need to deploy independently without coordinating release cycles.</li>
                                    <li>You have distinct domains within your application (e.g., a Dashboard, a Billing Portal, and a User Settings panel).</li>
                                </ol>

                                <p>If you're building a simple marketing site or a small startup MVP, stick to the monolith! The overhead of managing distributed architecture is not worth it until scale demands it.</p>

                                <h2>Conclusion</h2>
                                <p>Module Federation has democratized micro-frontend architecture, making it accessible to any team using Webpack. As we move towards more modular and scalable systems, understanding these architectural patterns will be crucial for senior frontend engineers.</p>
                                <p>Have you implemented micro-frontends in your organization? Let me know your thoughts and challenges!</p>
                                
                                {/* FAQs Section */}
                                <div className={styles.faqSection}>
                                    <h2>Frequently Asked Questions</h2>
                                    <div className={styles.accordion}>
                                        {faqs.map((faq, index) => (
                                            <div 
                                                key={index} 
                                                className={`${styles.accordionItem} ${activeFaq === index ? styles.active : ''}`}
                                            >
                                                <button 
                                                    className={styles.accordionHeader} 
                                                    onClick={() => toggleFaq(index)}
                                                >
                                                    {faq.question}
                                                    <i className={`fas fa-chevron-down ${styles.accordionIcon}`}></i>
                                                </button>
                                                <div 
                                                    className={styles.accordionContent}
                                                    style={{ maxHeight: activeFaq === index ? '200px' : '0', padding: activeFaq === index ? '1.5rem' : '0 1.5rem' }}
                                                >
                                                    <p style={{ padding: 0 }}>{faq.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>

                            {/* Removed postFooter */}

                            <div className={styles.authorBox}>
                                <h2 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Author</h2>
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Aman Saifi" className={styles.authorImg} />
                                <div className={styles.authorInfo}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Aman Saifi</div>
                                    <p>Full-Stack Developer & UI/UX Designer. I write about modern web architecture, AI integrations, and creating beautiful digital experiences. When I'm not coding, you can find me exploring the outdoors or brewing specialty coffee.</p>
                                    <div className={styles.authorSocial}>
                                        <a href="#"><i className="fab fa-github"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                        <a href="#"><i className="fas fa-globe"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Share Section Bottom */}
                            <div className={styles.postShareBottom}>
                                <span className={styles.shareTitle}>SHARE</span>
                                <button className={styles.shareBtn}>
                                    <svg viewBox="0 0 1200 1227" fill="currentColor" width="14" height="14"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path></svg>
                                </button>
                                <button className={styles.shareBtn}><i className="fab fa-linkedin-in"></i></button>
                                <button className={styles.shareBtn}><i className="fab fa-facebook-f"></i></button>
                                <button className={styles.shareBtn}><i className="fas fa-link"></i></button>
                            </div>

                            {/* Comment Section */}
                            <div className={styles.commentsSection}>
                                <h2>Comments</h2>
                                
                                <div className={styles.noComments}>
                                    No comments yet. Be the first to share your thoughts!
                                </div>
                                
                                <form className={styles.commentForm} onSubmit={(e) => e.preventDefault()}>
                                    <textarea id="comment" className={styles.commentTextarea} placeholder="Write a comment..."></textarea>
                                    <button type="submit" className={styles.submitBtn}>Post Comment</button>
                                </form>
                            </div>

                        </main>

                        {/* Right Sidebar Column */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarSticky}>
                                <TableOfContents
                                    headings={headings}
                                    activeId={activeId}
                                    onItemClick={scrollToHeading}
                                />
                            </div>
                        </aside>

                    </div>
                    
                    {/* Related Posts Section */}
                    <div className={styles.relatedPostsSection}>
                        <h2>Related Posts</h2>
                        <div className={styles.relatedGrid}>
                            <article className={styles.relatedCard}>
                                <Link to="/single-post" className={styles.relatedCardImg}>
                                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Related post" />
                                </Link>
                                <div className={styles.relatedMeta}>
                                    <span className={styles.relatedCategory}>Web Development</span>
                                    <span><i className="far fa-calendar-alt"></i> Apr 12, 2026</span>
                                </div>
                                <Link to="/single-post">
                                    <h3 className={styles.relatedPostTitle}>The Future of Frontend: Micro-Frontends</h3>
                                </Link>
                                <p className={styles.relatedExcerpt}>Micro-frontends offer a solution by breaking down the UI into smaller, independently deployable pieces.</p>
                                <Link to="/single-post" className={styles.relatedReadMore}>Read More <i className="fas fa-arrow-right"></i></Link>
                            </article>

                            <article className={styles.relatedCard}>
                                <Link to="/single-post" className={styles.relatedCardImg}>
                                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Related post 2" />
                                </Link>
                                <div className={styles.relatedMeta}>
                                    <span className={styles.relatedCategory}>Artificial Intelligence</span>
                                    <span><i className="far fa-calendar-alt"></i> Mar 28, 2026</span>
                                </div>
                                <Link to="/single-post">
                                    <h3 className={styles.relatedPostTitle}>Integrating LLMs into Modern SaaS</h3>
                                </Link>
                                <p className={styles.relatedExcerpt}>Discover practical patterns for weaving Large Language Models into your existing software products.</p>
                                <Link to="/single-post" className={styles.relatedReadMore}>Read More <i className="fas fa-arrow-right"></i></Link>
                            </article>
                            
                            <article className={styles.relatedCard}>
                                <Link to="/single-post" className={styles.relatedCardImg}>
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Related post 3" />
                                </Link>
                                <div className={styles.relatedMeta}>
                                    <span className={styles.relatedCategory}>UI/UX Design</span>
                                    <span><i className="far fa-calendar-alt"></i> Feb 15, 2026</span>
                                </div>
                                <Link to="/single-post">
                                    <h3 className={styles.relatedPostTitle}>The Psychology of Colors in Web Design</h3>
                                </Link>
                                <p className={styles.relatedExcerpt}>Learn how different color palettes affect user behavior, conversion rates, and overall perception.</p>
                                <Link to="/single-post" className={styles.relatedReadMore}>Read More <i className="fas fa-arrow-right"></i></Link>
                            </article>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SinglePost;
