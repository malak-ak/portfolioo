import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaGitlab,
  FaTools,
  FaLanguage,
} from "react-icons/fa";
import {
  SiMysql,
} from "react-icons/si";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./skills.css";

const Skills = () => {
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
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

  const skills = [
    // Frontend
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#e34f26", category: "frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#264de4", category: "frontend" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "#f7df1e", category: "frontend" },
    { name: "React", icon: <FaReact />, level: 80, color: "#61dafb", category: "frontend" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 90, color: "#7952b3", category: "frontend" },
    { name: "WordPress", icon: <FaWordpress />, level: 85, color: "#21759b", category: "frontend" },
    
    // Backend & Databases
    { name: "PHP", icon: <FaPhp />, level: 80, color: "#777bb4", category: "backend" },
    { name: "MySQL", icon: <SiMysql />, level: 85, color: "#00758f", category: "backend" },
    { name: "Laravel", icon: <FaLaravel />, level: 60, color: "#ff2d20", category: "backend" },

    // Tools
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f14e32", category: "tools" },
    { name: "GitHub", icon: <FaGithub />, level: 90, color: "#181717", category: "tools" },
    { name: "GitLab", icon: <FaGitlab />, level: 80, color: "#fc6d26", category: "tools" },
    { name: "Agile/Scrum", icon: <FaTools />, level: 85, color: "#009fe3", category: "tools" },

    // Other
    { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab", category: "other" },

    // Human Languages
    { name: "Arabic", icon: <FaLanguage />, level: 100, color: "#008a00", category: "languages" },
    { name: "French", icon: <FaLanguage />, level: 75, color: "#0055a4", category: "languages" },
    { name: "English", icon: <FaLanguage />, level: 75, color: "#ce1126", category: "languages" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: "bi-grid-3x3-gap" },
    { id: "frontend", label: "Frontend", icon: "bi-window" },
    { id: "backend", label: "Backend", icon: "bi-server" },
    { id: "tools", label: "Tools", icon: "bi-tools" },
    { id: "other", label: "Other", icon: "bi-code-slash" },
    { id: "languages", label: "Languages", icon: "bi-translate" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 8);

  return (
    <section
      id="skills"
      className={`skills-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            Technologies I've mastered to bring ideas to life
          </p>
        </div>

        {/* Skills Category Tabs */}
        <div className="skills-tabs mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
            >
              <i className={`bi ${category.icon} me-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {displayedSkills.map((skill, index) => (
            <Col key={skill.name} lg={3} md={4} sm={6} xs={6}>
              <div
                className="skill-card"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  "--skill-color": skill.color,
                }}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-glow"></div>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar-wrapper">
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: inView ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredSkills.length > 8 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-show-more"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" />
                  Show More ({filteredSkills.length - 8} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Skills;
