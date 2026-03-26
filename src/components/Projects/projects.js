// src/components/Projects.js
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaRegCalendarAlt,
  FaStar,
} from "react-icons/fa";
import "./projects.css";

// imgs

import teamflowImg from "./cover_img/teamflow.png";
import rarebeautyImg from "./cover_img/rare-beauty.png";
import gamestoreImg from "./cover_img/gamestore.png";
import portfolioImg from "./cover_img/portfolio.png";
import phpmysqlImg from "./cover_img/php-mysql.png";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleProject = (projectId) => {
    setExpandedProject((prev) => (prev === projectId ? null : projectId));
  };

  const projects = [
    {
      id: 5,
      title: "My Portfolio",
      subtitle: "Personal Showcase",
      description: "A modern, responsive portfolio designed to showcase my skills and projects.",
      longDescription: "This personal portfolio features an engaging UI, smooth animations, and interactive elements. It utilizes technologies like React, custom CSS, Bootstrap, and dynamic Spline 3D objects to create a standout user experience and highlight my Full Stack development skills.",
      skills: ["React", "CSS", "Bootstrap", "Spline"],
      image: portfolioImg,
      projectLink: "https://malak-ak.github.io/portfolio/",
      githubLink: "https://github.com/malak-ak/portfolio",
      date: "2026",
      category: "major",
      emoji: "🧑‍💻",
    },
    {
      id: 4,
      title: "Team Flow",
      subtitle: "Workflow Management Platform",
      description: "A comprehensive platform for workflow management, task tracking, and HR collaboration.",
      longDescription: "Team Flow is designed to streamline enterprise workflow. It features task tracking setups, team collaboration spaces, and HR management modules. Currently in progress, this project emphasizes intuitive UI and robust backend integration to solve real organizational bottlenecks.",
      skills: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "JavaScript"],
      image: teamflowImg,
      projectLink: "https://malak-ak.github.io/TeamFlow/",
      date: "Ongoing",
      category: "major",
      emoji: "👥",
    },
    {
      id: 3,
      title: "E-commerce Beauty Shop",
      subtitle: "Front-end E-commerce Project",
      description: "A responsive, modern UI design for a beauty products e-commerce store.",
      longDescription: "This project focuses purely on delivering an exceptional front-end experience for online shoppers. Featuring a sleek, responsive design crafted with modern HTML, CSS, and Bootstrap, it demonstrates strong capabilities in translating business requirements into engaging user interfaces.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      image: rarebeautyImg,
      projectLink: "https://malak-ak.github.io/rare-beauty/",
      githubLink: "https://github.com/malak-ak/rare-beauty",
      date: "2025",
      category: "major",
      emoji: "💄",
    },
    {
      id: 2,
      title: "Game Store",
      subtitle: "Front-end Showcase Website",
      description: "A visually appealing front-end showcase website for a video game store.",
      longDescription: "Created to highlight design skills, this project uses HTML, CSS, and Bootstrap to deliver a dark-themed, immersive showcase for gaming titles and products.",
      skills: ["HTML", "CSS", "Bootstrap"],
      image: gamestoreImg,
      date: "2025",
      category: "minor",
      emoji: "🎮",
    },
    {
      id: 1,
      title: "Trainee Management App",
      subtitle: "Mini Application",
      description: "A functional mini-app to manage and track trainees.",
      longDescription: "Built with PHP and MySQL, this application permits simple CRUD operations to easily manage trainee records, demonstrating core backend data handling principles.",
      skills: ["PHP", "MySQL"],
      image: phpmysqlImg,
      date: "2024",
      category: "minor",
      emoji: "📝",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "bi-grid-3x3-gap" },
    { id: "major", label: "Major Projects", icon: "bi-star-fill" },
    { id: "minor", label: "Minor Projects", icon: "bi-collection" },
  ];

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className={`projects-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center mt-4">
            My latest creations. Click on any project to explore details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="project-tabs mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`project-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
                setExpandedProject(null);
              }}
            >
              <i className={`bi ${category.icon} me-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {displayedProjects.map((project, index) => (
            <Col key={project.id} lg={6} className="project-col">
              <div
                className={`project-card ${expandedProject === project.id ? "expanded" : ""} ${project.category === "major" ? "major-project" : ""}`}
                onClick={() => toggleProject(project.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Glow Effect for Major */}
                {project.category === "major" && (
                  <div className="major-glow"></div>
                )}

                <div className="project-image-wrapper">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-image-placeholder d-flex align-items-center justify-content-center" style={{height: '100%', background: 'linear-gradient(45deg, #1e1e2f, #2a2a40)'}}>
                      <span style={{fontSize: '4rem', opacity: 0.5}}>{project.emoji}</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <span className="project-emoji">{project.emoji}</span>
                  </div>
                  <div className="project-date-badge">
                    <FaRegCalendarAlt className="me-1" /> {project.date}
                  </div>
                  {project.category === "major" && (
                    <div className="major-badge">
                      <FaStar className="me-1" /> Featured
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <div className="project-header">
                    <div>
                      <h3 className="project-title">
                        {project.emoji} {project.title}
                      </h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <button className="expand-toggle">
                      {expandedProject === project.id ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="tech-tag more">
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>

                  <div
                    className={`project-expanded ${expandedProject === project.id ? "show" : ""}`}
                  >
                    <p className="project-long-desc">
                      {project.longDescription}
                    </p>

                    <div className="all-tech">
                      <h5>All Technologies</h5>
                      <div className="tech-list">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="tech-chip">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn github-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn live-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredProjects.length > 4 && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-show-more"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" /> Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" /> Show More (
                  {filteredProjects.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
