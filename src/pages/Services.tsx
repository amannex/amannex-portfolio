import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import styles from "./Services.module.css";
import { servicesData } from "../data/static";

const Services = () => {
  const [forcedState, setForcedState] = useState<
    Record<number, "open" | "closed" | undefined>
  >({});

  const handleMouseEnter = (index: number) => {
    setForcedState((prev) => {
      if (prev[index] === "open") return prev;
      return {
        ...prev,
        [index]: "open",
      };
    });
  };

  const handleCardClick = (index: number) => {
    setForcedState((prev) => ({
      ...prev,
      [index]: prev[index] === "open" ? "closed" : "open",
    }));
  };

  return (
    <>
      <SEO
        title="What I Do"
        description="Professional services including Full Stack Development, UI/UX Design, WordPress Solutions, and AI Integrations by Aman Saifi."
        canonicalUrl="https://amannex.me/services"
      />
      <header className="page-header">
        <div className="container fade-up">
          <span className="hero-badge">
            <i
              className="fas fa-star"
              style={{
                fontSize: "0.75rem",
                marginRight: "0.5rem",
                verticalAlign: "middle",
                color: "var(--accent-color)",
              }}
            ></i>{" "}
            Expertise & Offerings
          </span>
          <h1 className="page-title">
            What <span className="gradient-text">I Do</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            Comprehensive suite of technical and design services tailored for
            modern digital experiences.
          </p>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container">
          <div className={`${styles["services-grid"]}`}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`${styles["service-card"]} ${forcedState[index] === "open" ? styles["force-open"] : ""} ${forcedState[index] ? "fade-up visible" : "fade-up"}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => handleCardClick(index)}
              >
                <h3 className={`${styles["service-title"]}`}>
                  {service.title}
                </h3>
                <div className={`${styles["service-card-grid"]}`}>
                  <div className={`${styles["service-content"]}`}>
                    <div className={`${styles["service-body"]}`}>
                      <div className={`${styles["service-body-inner"]}`}>
                        <p>{service.description}</p>

                        <div className={`${styles["service-features"]}`}>
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className={`${styles["service-feature"]}`}
                            >
                              <i className="fas fa-check"></i> {feature}
                            </div>
                          ))}
                        </div>

                        <div>
                          <Link
                            to={service.link}
                            className="btn btn-outline interactive-element"
                          >
                            Start a Project{" "}
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles["service-visual-container"]}`}>
                    <div className={`${styles["service-body"]}`}>
                      <div className={`${styles["service-body-inner"]}`}>
                        <div className={`${styles["service-visual"]}`}>
                          <i className={service.icon}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ padding: "5rem 0" }}>
          <div className={`${styles["cta-section"]} fade-up`}>
            <h2>Ready to Transform Your Idea?</h2>
            <p>
              Let's collaborate to build exceptional. I am currently open for
              freelance projects and Full-time opportunities.
            </p>
            <Link to="/contact" className="btn btn-outline interactive-element">
              Get In Touch Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
