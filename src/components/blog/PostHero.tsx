import { Link } from "react-router-dom";
import styles from "./PostHero.module.css";

interface PostHeroProps {
  post: {
    featuredImage?: string;
    imageAlt?: string;
    gradient?: string;
    category: string;
    title: string;
    author: string;
    date: string;
  };
  readingTime: string;
}

export default function PostHero({ post, readingTime }: PostHeroProps) {
  const hasFeaturedImage = Boolean(post.featuredImage);

  return (
    <section
      className={styles.hero}
      style={
        !hasFeaturedImage
          ? { background: post.gradient || "var(--bg-secondary)" }
          : undefined
      }
      aria-label="Article header"
    >
      {hasFeaturedImage && (
        <div className={styles.bgWrapper} aria-hidden="true">
          <img
            src={post.featuredImage}
            alt={post.imageAlt || post.title}
            className={styles.bgImage}
            fetchPriority="high"
            decoding="async"
          />
          <div className={styles.overlay} />
        </div>
      )}

      <div
        className="container"
        style={{
          maxWidth: "1350px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div className={styles.inner}>
          <Link to="/blogs" className={styles.back}>
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            Back to Journal
          </Link>

          <div>
            <span className={styles.category}>{post.category}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <i className="fas fa-user" aria-hidden="true"></i>
              {post.author}
            </span>

            <span className={styles.dot} aria-hidden="true">
              •
            </span>

            <span className={styles.metaItem}>
              <i className="far fa-calendar" aria-hidden="true"></i>
              <time dateTime={post.date}>{post.date}</time>
            </span>

            <span className={styles.dot} aria-hidden="true">
              •
            </span>

            <span className={styles.metaItem}>
              <i className="far fa-clock" aria-hidden="true"></i>
              {readingTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
