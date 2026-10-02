import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";
// import profileImage from "./img/dp.jpeg"; // Import your profile image
import profileGif from "./img/DP.gif";
import Spline from '@splinetool/react-spline';
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
                  <Spline scene="https://prod.spline.design/D32ihTy4fLcxCrlv/scene.splinecode" />
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
               Développeuse Full Stack, diplômée du programme Technicien Spécialisé – Développement Digital (OFPPT – CFPM). Animée par une forte appétence pour le développement web et la création d'interfaces modernes, je maîtrise le front-end (HTML, CSS, JavaScript, React/Redux, Next.js, Bootstrap) et le back-end (PHP, Laravel, Node.js, MySQL, MongoDB). J'évolue aujourd'hui vers Python, les API, les tableaux de bord de supervision et l'IoT, et je m'intéresse particulièrement à l'intelligence artificielle et aux technologies web innovantes.</p>
              <div className="cta-container">
                <Button
                  href="https://drive.google.com/file/d/1XC9RqWk_LIMhfzVhE9pZOqNrJzL7K1cT/view?usp=sharing"
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
