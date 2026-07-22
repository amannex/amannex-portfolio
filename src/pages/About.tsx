import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";
import styles from "./About.module.css";
import profileImg from "../assets/images/amannex-profile.png";
import { storyData, technologiesData } from "../data/static";

/**
 * About Page Component
 * 
 * Displays the personal story, background, and technologies section.
 * Implements a dynamic SVG snake-like path visualization for the personal story timeline.
 */
const About = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  const numNodes = storyData.length;

  // Generate a snake-like SVG path to connect the timeline nodes visually
  // Calculates bezier curves to create a smooth, flowing line between points
  const generatePath = () => {
    let path = "";
    for (let i = 0; i < numNodes; i++) {
      const isLeft = i % 2 === 0;
      const x = isLeft ? 25 : 75; // 25% and 75% for better spacing
      const y = (i + 0.5) * (100 / numNodes);

      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        const prevIsLeft = (i - 1) % 2 === 0;
        const prevX = prevIsLeft ? 25 : 75;
        const prevY = (i - 1 + 0.5) * (100 / numNodes);
        const midY = (prevY + y) / 2;

        // Smooth bezier curve connecting points
        path += ` C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y}`;
      }
    }
    return path;
  };

  return (
    <>
      <SEO
        title="About | Aman Saifi"
        description="Learn more about Aman Saifi, a Full Stack Developer and Content Creator."
      />

      <header className="page-header">
        <div className="container fade-up">
          <span className="hero-badge">
            <i
              className="fas fa-user"
              style={{
                fontSize: "0.75rem",
                marginRight: "0.5rem",
                verticalAlign: "middle",
                color: "var(--accent-color)",
              }}
            ></i>{" "}
            Who I Am
          </span>
          <h1 className="page-title">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: "0" }}>
            Discover the journey behind my work, the skills I've developed, and
            the passion that drives me to build exceptional digital experiences.
          </p>
        </div>
      </header>

      <section className="section section-alt">
        <div className={`container ${styles["about-content"]}`}>
          <div className={`${styles["about-image"]} fade-up`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--border-radius-lg)",
                overflow: "hidden",
              }}
            >
              <img
                src={profileImg}
                alt="Aman Saifi Profile"
                style={{
                  width: "100%",
                  height: "auto",
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
          <div
            className={`${styles["about-text"]} fade-up`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif" }}>
              I'm Aman Saifi, a Developer & Content Creator
            </h3>
            <p>
              I build digital experiences that combine clean design, powerful
              functionality, and impactful content. My work bridges development,
              design, and content creation to help businesses establish a strong
              online presence.{" "}
            </p>
            <p>
              Whether I'm developing modern web applications with React and PHP,
              building high-performance WordPress websites, creating engaging
              content, or integrating AI-powered solutions to streamline
              workflows, I focus on delivering scalable, user-centric, and
              business-driven results.{" "}
            </p>
            <Link
              to="/contact"
              className="btn btn-outline interactive-element"
              style={{ marginTop: "1rem" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title fade-up">
            My{" "}
            <span style={{ color: "var(--accent-color)" }}>
              Story & Struggles
            </span>
          </h2>
          <p
            className="section-subtitle fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            The journey wasn't always easy. Here is the unvarnished path of my
            struggles and breakthroughs.
          </p>

          <div
            className={`${styles["two-column-layout"]} fade-up`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* LEFT COLUMN: Map */}
            <div className={styles["map-column"]}>
              <div className={styles["candy-map"]}>
                {/* The Curvy Path SVG */}
                <svg
                  className={styles["candy-path"]}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d={generatePath()}
                    fill="none"
                    stroke="var(--border-light)"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                  />
                </svg>

                {/* Map Nodes */}
                {storyData.map((story, i) => {
                  const isLeft = i % 2 === 0;
                  const x = isLeft ? 25 : 75;
                  const y = (i + 0.5) * (100 / numNodes);

                  return (
                    <div
                      key={i}
                      className={styles["map-node-wrapper"]}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div
                        className={`${styles["map-node"]} ${activeLevel === i ? styles["active"] : ""}`}
                        onClick={() => setActiveLevel(i)}
                      >
                        <div className={styles["node-dot"]}>
                          <i
                            className={
                              activeLevel === i ? "fas fa-star" : "fas fa-lock"
                            }
                          ></i>
                        </div>
                        <div className={styles["node-label"]}>
                          {story.period}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Details */}
            <div className={styles["detail-column"]}>
              <div key={activeLevel} className={styles["detail-card"]}>
                <div className={styles["detail-header"]}>
                  <span className={styles["detail-date"]}>
                    {storyData[activeLevel].period}
                  </span>
                  <h3 className={styles["detail-title"]}>
                    {storyData[activeLevel].title}
                  </h3>
                  <h4 className={styles["detail-subtitle"]}>
                    {storyData[activeLevel].subtitle}
                  </h4>
                </div>

                <p className={styles["detail-summary"]}>
                  {storyData[activeLevel].summary}
                </p>

                <div className={styles["detail-grid"]}>
                  <div className={styles["struggle-box"]}>
                    <h6>
                      <i className="fas fa-bolt"></i> The Struggle
                    </h6>
                    <p>{storyData[activeLevel].struggle}</p>
                  </div>
                  <div className={styles["breakthrough-box"]}>
                    <h6>
                      <i className="fas fa-star"></i> The Breakthrough
                    </h6>
                    <p>{storyData[activeLevel].breakthrough}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title fade-up">
            Technologies I{" "}
            <span style={{ color: "var(--accent-color)" }}>Utilize</span>
          </h2>
          <p
            className="section-subtitle fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            Technologies and tools I use to bring ideas to life.
          </p>

          <div
            className={`${styles["skills-grid"]} fade-up`}
            style={{ transitionDelay: "0.2s" }}
          >
            {technologiesData.map((tech, index) => (
              <div
                key={index}
                className={`${styles["skill-card"]} interactive-element`}
              >
                <div className={`${styles["skill-icon"]}`}>
                  <i className={tech.icon}></i>
                </div>
                <div className={`${styles["skill-name"]}`}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
