import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { footerSocials } from "../data/static";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Row */}
        <div className={`${styles.topRow} fade-up`}>
          <div className={styles.copyright}>&copy; 2026</div>
          <button className={styles.backToTop} onClick={scrollToTop}>
            BACK TO TOP
            <span className={styles.iconCircle}>
              <i className="fas fa-arrow-up"></i>
            </span>
          </button>
        </div>

        {/* Middle Row */}
        <div
          className={`${styles.middleRow} fade-up`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className={styles.subtitle}>HAVE A PROJECT IN MIND?</p>
          <Link
            to="/contact"
            className={styles.title}
            style={{ textDecoration: "none" }}
          >
            LET'S TALK
          </Link>
        </div>

        {/* Bottom Row */}
        <div
          className={`${styles.bottomRow} fade-up`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className={styles.socialButtons}>
            {footerSocials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className={styles.credits}>
            <p>
              Design &amp; Development by <strong>Aman Saifi</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
