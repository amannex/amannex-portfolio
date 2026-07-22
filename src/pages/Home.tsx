import { Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "../components/SEO";
import styles from "./Home.module.css";
import profileImg from "../assets/images/amannex-profile.png";
import { homeServices, homeFeaturedProjects } from "../data/static";

const Home = () => {
  useEffect(() => {
    const card = document.getElementById("hero-card");
    if (card) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };
      const handleMouseLeave = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      };

      card.addEventListener("mousemove", handleMouseMove as any);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove as any);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Aman Saifi is an aspiring Software Engineer & Full Stack Developer making ideas come alive through vibrant designs and robust architecture."
        canonicalUrl="https://amannex.me/"
      />

      <section className={`${styles.hero}`}>
        <div className={`container ${styles["hero-content"]}`}>
          <div className={`${styles["hero-text"]} fade-up`}>
            <span className={`${styles["hero-badge"]}`}>
              <i
                className="fas fa-circle"
                style={{
                  fontSize: "0.5rem",
                  marginRight: "0.5rem",
                  verticalAlign: "middle",
                }}
              ></i>{" "}
              Available for Work
            </span>
            <h1 className={`${styles["hero-title"]}`}>
              Hello, I'm <br />
              <span
                className="gradient-text"
                style={{
                  background: "var(--text-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Aman Saifi.
              </span>
            </h1>
            <p className={`${styles["hero-description"]}`}>
              Aspiring Software Engineer & Full Stack Developer making ideas
              come alive through vibrant designs and robust architecture.
            </p>
            <div className={`${styles["hero-buttons"]}`}>
              <Link
                to="/portfolio"
                className="btn btn-primary interactive-element"
              >
                View My Work <i className="fas fa-arrow-right"></i>
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline interactive-element"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div
            className={`${styles["hero-image-wrapper"]} fade-up`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className={`${styles["hero-shape"]}`}></div>

            <div
              className={`${styles["hero-card"]} interactive-element`}
              id="hero-card"
            >
              <img
                src={profileImg}
                alt="Aman Saifi Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                  position: "relative",
                  zIndex: "1",
                  border: "2px solid var(--accent-color)",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title fade-up">
            What I <span style={{ color: "var(--accent-color)" }}>Do</span>
          </h2>
          <p
            className="section-subtitle fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            Delivering high-quality software solutions and breathtaking digital
            designs for modern enterprises.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {homeServices.map((service, index) => (
              <div
                key={index}
                className={`${styles["glass-card"]} fade-up interactive-element`}
                style={{ transitionDelay: service.delay }}
              >
                <div className={`${styles["card-icon"]}`}>
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p
                  style={{ color: "var(--text-secondary)", marginTop: "1rem" }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title fade-up">
            Featured{" "}
            <span style={{ color: "var(--accent-color)" }}>Projects</span>
          </h2>
          <p
            className="section-subtitle fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            A glimpse into my recent coding endeavors and deployed solutions.
          </p>

          <div
            className={`${styles["project-wrapper"]} fade-up`}
            style={{ transitionDelay: "0.2s" }}
          >
            {homeFeaturedProjects.map((project, index) => (
              <div
                key={index}
                className={`${styles["project-card"]} fade-up interactive-element`}
                style={{
                  backgroundImage: `url('${project.img}')`,
                  transitionDelay: project.delay,
                }}
              >
                <div className={`${styles["project-details"]}`}>
                  <span className={`${styles.tag}`}>{project.tag}</span>
                  <h3 className={`${styles["project-title"]}`}>
                    {project.title}
                  </h3>
                  <div className={`${styles["project-content"]}`}>
                    <p className={`${styles["project-desc"]}`}>
                      {project.desc}
                    </p>
                    <Link
                      to={project.link}
                      className={`${styles["project-link"]}`}
                    >
                      View Project{" "}
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{ textAlign: "center", marginTop: "4rem" }}
            className="fade-up"
          >
            <Link
              to="/portfolio"
              className="btn btn-primary interactive-element"
            >
              Discover More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
