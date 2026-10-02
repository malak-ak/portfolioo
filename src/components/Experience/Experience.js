// src/components/Experience/Experience.js
import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaCertificate,
  FaTimes,
  FaGraduationCap,
} from "react-icons/fa";
import "./experience.css";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [inView, setInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
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

  const toggleExperience = (index) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  const openCertModal = (cert) => {
    setCurrentCert(cert);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCertModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const experiences = [
    {
      id: 7,
      type: "work",
      role: "Pre-employment Intern - Development & Dashboards",
      company: "EMATUS SARL",
      duration: "Sept. 2026 – Present",
      location: "Had Soualem",
      description: "Contributing to the design of dashboards for technical data visualization. Developing digital solutions and monitoring interfaces with Python, APIs, JavaScript, React.js, and Web technologies. Integrating IoT solutions for data collection, transmission, and visualization.",
      responsibilities: [
        "Contributed to the design of technical data visualization dashboards",
        "Participated in developing digital solutions and monitoring interfaces with Python, APIs, JavaScript, React.js",
        "Contributed to IoT solutions integration: data collection, transmission, and visualization"
      ],
      skills: ["Python", "React.js", "JavaScript", "APIs", "IoT", "Web Technologies"]
    },
    {
      id: 6,
      type: "work",
      role: "PFE Intern - Back-office & Promotional Data ETL",
      company: "MFS",
      duration: "May 2026 – Jun 2026",
      location: "Casablanca",
      description: "Participated in developing a centralized back-office for managing promotional data. Designed and implemented an ETL process for data integration. Developed a centralized analytics dashboard (Next.js 15, React 19, TypeScript, Tailwind CSS) connected to ten heterogeneous MongoDB databases.",
      responsibilities: [
        "Participated in developing a centralized back-office for managing and consulting promotional data",
        "Designed and implemented an ETL process for integrating data from multiple databases",
        "Developed a centralized analytics dashboard connected to ten MongoDB databases via a configurable mapping engine",
        "Controlled data quality, consistency, and reliability; participated in testing and validation phases"
      ],
      skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "MongoDB", "ETL", "Data Analytics"]
    },
    {
      id: 5,
      type: "education",
      role: "Full Stack Development Training (Graduated)",
      company: "OFPPT – CFPM Sidi Moumen Anassi",
      duration: "2024 – 2026",
      location: "Casablanca",
      description: "Graduated with a Specialized Technician degree in Digital Development. Learned frontend and backend web technologies, dynamic site design, database management, agile methodology, and teamwork on integrated projects.",
      responsibilities: ["Frontend and Backend development", "Database management", "Agile methodology"],
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React", "Git", "Laravel"]
    },
    {
      id: 4,
      type: "education",
      role: "Baccalaureate in Life and Earth Sciences",
      company: "Lycée Moulay Ismail",
      duration: "2023 – 2024",
      location: "Casablanca",
      description: "Successfully completed high school education focusing on Life and Earth Sciences.",
      responsibilities: [],
      skills: []
    },
    {
      id: 3,
      role: "Founder & Project Manager – ENBO (Enactus)",
      company: "Enactus",
      duration: "Dec 2024 – Jan 2025",
      location: "FSBM",
      description:
        "Led the development of an innovative smart packaging project while managing a multidisciplinary team, focusing on organization, leadership, and project execution.",
      responsibilities: [
        "Founded and developed a smart packaging concept from idea to execution",
    "Led and coordinated a team to achieve project goals",
    "Planned project timelines and managed tasks effectively",
    "Presented the project in events and collaborative environments",
    "Enhanced teamwork, leadership, and decision-making skills"
      ],
      skills: [
      "Project Management",
    "Leadership",
    "Team Collaboration",
    "Problem Solving",
    "Communication",
    "Innovation",
    "Compétences bureautiques : Word, Excel, PowerPoint"
      ],
     
    },

   {
  id: 2,
  role: "Active Member – AI Dev Community",
  company: "AI Dev Community",
  duration: "2025 – 2026",
  location: "Casablanca",
  description:
    "Engaged in a tech community focused on artificial intelligence and web development, participating in workshops and collaborative learning activities.",
  responsibilities: [
    "Participated in AI and web development workshops",
    "Collaborated with other developers on learning projects",
    "Explored modern technologies and development trends",
    "Attended tech events and knowledge-sharing sessions",
    "Continuously improved technical and problem-solving skills"
      ],
     skills: [
    "Artificial Intelligence Basics",
    "Web Development",
    "Team Collaboration",
    "Continuous Learning",
    "Networking"
  ]

    },
    {
      id: 1,
  role: "Member – University Theater Club",
  company: "Ben M'sik University",
  duration: "2024 – 2025",
  location: "Casablanca",
  description:
    "Actively contributed to theater activities, developing creativity, confidence, and communication skills through artistic expression and teamwork.",
  responsibilities: [
    "Participated in theater performances and rehearsals",
    "Collaborated with team members to produce creative work",
    "Improved public speaking and stage presence",
    "Contributed to creative storytelling and expression",
    "Worked in a team-oriented artistic environment"
  ],
  skills: [
    "Communication",
    "Creativity",
    "Public Speaking",
    "Teamwork",
    "Confidence"
      ],
      
    
    },
     
    
]
  // Filter experiences based on showAll state
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section
      id="experience"
      className={`experience-section py-5 ${inView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <div className="section-header mb-5">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle text-center text-light mt-4">
            My professional journey and growth. Click on any experience to see
            details.
          </p>
        </div>

        <div className="timeline">
          {displayedExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${
                exp.id % 2 === 0 ? "right" : "left"
              } ${expandedExperience === index ? "expanded" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    {exp.type === "education" ? <FaGraduationCap /> : <FaBriefcase />}
                  </div>
                  <div className="timeline-title">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <button
                    className="expand-btn"
                    onClick={() => toggleExperience(index)}
                  >
                    {expandedExperience === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                <div className="timeline-meta">
                  <span className="timeline-duration">
                    <FaCalendarAlt className="me-2" /> {exp.duration}
                  </span>
                  <span className="timeline-location">{exp.location}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                {/* Certificate Preview */}
                {exp.certificate && (
                  <div
                    className="cert-preview"
                    onClick={() => openCertModal(exp.certificate)}
                  >
                    <div className="cert-preview-thumb">
                      <img
                        src={exp.certificate.thumbnail}
                        alt={exp.certificate.name}
                      />
                      <div className="cert-preview-overlay">
                        <FaCertificate />
                        <span>View Certificate</span>
                      </div>
                    </div>
                    <div className="cert-preview-info">
                      <FaCertificate className="cert-icon" />
                      <span>Certificate Available</span>
                    </div>
                  </div>
                )}

                <div
                  className={`timeline-details ${
                    expandedExperience === index ? "show" : ""
                  }`}
                >
                  <div className="responsibilities">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-used">
                    <h5>Skills Applied:</h5>
                    <div className="skill-tags">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      <FaExternalLinkAlt className="me-2" /> Visit Company
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less button */}
        {experiences.length > 4 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline-primary"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" />
                  Show More ({experiences.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </Container>

      {/* Certificate Modal */}
      {modalOpen && currentCert && (
        <div className="cert-modal-exp" onClick={closeCertModal}>
          <div
            className="modal-content-exp"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn-exp" onClick={closeCertModal}>
              <FaTimes />
            </button>
            <img
              src={currentCert.fullImage}
              alt={currentCert.name}
              className="full-cert-img-exp"
            />
            <div className="cert-modal-info-exp">
              <h3>{currentCert.name}</h3>
              {currentCert.credential && (
                <p>Credential: {currentCert.credential}</p>
              )}
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn-exp"
              >
                <FaExternalLinkAlt className="me-2" /> Verify Credential
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
