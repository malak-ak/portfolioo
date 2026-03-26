import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";
// import profileImage from "./img/dp.jpeg"; // Import your profile image
import profileGif from "./img/DP.gif";

const About = () => {
  useEffect(() => {
    // Initialize animation effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".about-content, .about-photo-container")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-photo-col">
            <div className="about-photo-container">
              <div className="photo-frame">
              <div className="profile-img-container">
                  {/* <div
                    className="profile-image"
                    style={{ backgroundImage: `url(${profileImage})` }}
                  ></div> */}
                  <img
                    src={profileGif}
                    alt="Malak animated"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="about-content">
            <div className="content-wrapper">
              <div className="greeting-text">Hello!</div>
              <h1 className="name-title">
                I am <span className="highlight">MALAK AIT KHOUYA LAHCEN</span>
              </h1>

              <p className="about-text">
               I am a second-year Full Stack Development student at OFPPT (CFPM Sidi Moumen Anassi). Passionate about web development and modern UI design, I am actively looking for a PFE internship starting April to apply my skills in a professional environment. I focus on building responsive, user-friendly, and practical web applications. My tech stack includes HTML, CSS, JavaScript, Bootstrap, React, PHP, MySQL, and Laravel. Beyond standard web development, I am strongly interested in AI and emerging technologies, always eager to learn and contribute to innovative projects.</p>
              <div className="cta-container">
                <Button
                  href="https://drive.google.com/file/d/1nc8hwaSpGilOigDdlHRx_ZqF0qVi8xLj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-resume-btn"
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i>
                  View Resume
                </Button>
                <Button variant="outline-primary" href="#projects">
                  <i className="bi bi-code-slash me-2"></i>
                  See What I've Built
                </Button>
              </div>

              <div className="experience-container">
                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">5+</div>
                    <div className="exp-title">Projects</div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">15+</div>
                    <div className="exp-title">Technologies</div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="exp-icon">
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-count">3+</div>
                    <div className="exp-title">Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
