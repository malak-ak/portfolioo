// src/components/Social.js
import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  SiGmail,
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLinktree,
  SiStackoverflow,
} from "react-icons/si";

import {
  FaGithub,
  FaLinkedinIn,

} from "react-icons/fa";
import "./social.css";

const Social = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/malakaitkhouyalahcen",
      color: "#FFB7C5",
      hoverBg: "linear-gradient(135deg, #FFB7C5, #FF8DA1)",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/malak-ak",
      color: "#ffffff",
      hoverBg: "linear-gradient(135deg, #333, #181717)",
    },
    {
      name: "Gmail",
      icon: <SiGmail />,
      url: "mailto:aitkhouyalahcenmalak@gmail.com",
      color: "#D14836",
      hoverBg: "linear-gradient(135deg, #D14836, #e55b4e)",
    },
  ];

  return (
    <section
      id="social"
      className={`social-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Connect With Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            Find me on these platforms and let's collaborate
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{
                "--hover-bg": social.hoverBg,
                "--icon-color": social.color,
                animationDelay: `${index * 0.08}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
              }}
            >
              <div className="social-icon-wrapper">
                <div className="social-icon">{social.icon}</div>
                <div className="social-ring"></div>
              </div>
              <span className="social-name">{social.name}</span>
              <div className="social-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Social;
