import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./hero.css";
import MalakPhoto from "../About/img/Malak.jpeg";

const Hero = () => {
  const [showRoleAnimation, setShowRoleAnimation] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire from Portfolio");
    const body = encodeURIComponent(
      "Hii Malak,\n\nI want to hire you and discuss potential opportunities."
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&to=aitkhouyalahcenmalak@gmail.com&su=${subject}&body=${body}`;
  };

  useEffect(() => {
    if (showRoleAnimation) {
      setCursorVisible(false);
      const timer = setTimeout(() => setCursorVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [showRoleAnimation]);

  return (
    <section id="hero" className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Content Column */}
          <Col lg={6} className="hero-text mb-5 mb-lg-0">
            <h2 className="text-primary mb-0">Hello!</h2>
            <h1 className="display-3 fw-bold text-white mt-0">
              <TypeAnimation
                sequence={[
                  "I",
                  500,
                  "I am",
                  1000,
                  () => setShowRoleAnimation(true),
                ]}
                wrapper="span"
                speed={30}
                style={{ display: "inline-block", color: "#ffffff" }}
                cursor={false}
                repeat={0}
              />
              {showRoleAnimation ? (
                <>
                  <br />
                  <TypeAnimation
                    sequence={[
                      "Malak Ait Khouya Lahcen",
                      1500,
                      "Full Stack Developer Student",
                      1500,
                      "Web Development Enthusiast",
                      1500,
                      "UI Design Lover",
                      1500,
                    ]}
                    wrapper="span"
                    speed={30}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#FFB7C5",
                      position: "relative",
                      fontWeight: "800",
                    }}
                    repeat={50}
                    cursor={cursorVisible}
                  />
                </>
              ) : (
                <span className="blinking-cursor" style={{ color: "#ff1ad9ff" }}>|</span>
              )}
            </h1>
            <p className="lead text-light mb-4">
              A second-year Full Stack Development student at OFPPT (CFPM)<br></br>
              Passionate about web development and modern UI design<br></br>
              Looking for a PFE internship starting April<br></br>
              Focusing on responsive, user-friendly web applications<br></br>
              Interested in AI and emerging technologies
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-2 hire-btn"
                onClick={handleHireMe}
              >
                <i className="bi bi-envelope-arrow-up me-2"></i>
                Hire Me
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                className="px-4 py-2"
                href="#projects"
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                See What I’ve Built
              </Button>
            </div>
          </Col>

          {/* Profile Photo & Mini Spline Column */}
          <Col lg={6} className="hero-visual-col text-center">
            <div className="profile-photo-wrapper">
              <div className="profile-photo-glow"></div>
              <img src={MalakPhoto} alt="Malak Ait Khouya Lahcen" className="profile-photo" />
            </div>
          </Col>
              
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
