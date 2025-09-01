"use client"

import { useState } from "react"
import "./Portfolio.css"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [animateInKey, setAnimateInKey] = useState(0)

  const projects = [
    {
      title: "Aircraft Wing Design Optimization",
      category: "engineering",
      image: "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg",
      description:
        "Developed a computational model for optimizing aircraft wing designs to improve aerodynamic efficiency and reduce fuel consumption.",
      technologies: ["MATLAB", "CFD", "Optimization Algorithms"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Flight Simulator Interface",
      category: "software",
      image: "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg",
      description:
        "Created a user interface for a flight simulator using React, providing real-time feedback and controls for training purposes.",
      technologies: ["React", "JavaScript", "WebGL"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Drone Propulsion System Analysis",
      category: "engineering",
      image: "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg",
      description:
        "Analyzed and optimized propulsion systems for unmanned aerial vehicles to maximize flight time and payload capacity.",
      technologies: ["Python", "Mechanical Design", "Data Analysis"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Aerospace Data Visualization Dashboard",
      category: "software",
      image: "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg",
      description:
        "Developed a dashboard for visualizing aerospace test data, enabling engineers to identify patterns and anomalies quickly.",
      technologies: ["JavaScript", "D3.js", "Node.js"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Composite Materials Testing",
      category: "engineering",
      image: "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg",
      description:
        "Conducted tests on advanced composite materials for aircraft structures, analyzing strength-to-weight ratios and durability.",
      technologies: ["Material Science", "Structural Analysis", "Testing Methodologies"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Flight Path Optimization Algorithm",
      category: "software",
      image: "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg",
      description:
        "Implemented an algorithm to optimize flight paths for commercial aircraft, reducing fuel consumption and flight time.",
      technologies: ["Python", "Algorithm Design", "Geospatial Analysis"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleFilterClick = (filter) => {
    if (filter === activeFilter || isAnimatingOut) return
    setIsAnimatingOut(true)
    setTimeout(() => {
      setActiveFilter(filter)
      setIsAnimatingOut(false)
      setAnimateInKey((k) => k + 1)
    }, 250)
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <div className="section-divider"></div>

        <div className="filter-buttons">
          {["all", "engineering", "software"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`filter-button ${activeFilter === filter ? "active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isAnimatingOut ? "animating-out" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div key={`${index}-${animateInKey}`} className={`project-card ${isAnimatingOut ? "exit" : "enter"}`}>
              <div className="project-image-container">
                {/* Decorative image: alt cleared to avoid duplicate title visuals */}
                <img
                  src={project.image || "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg"}
                  alt=""
                  className="project-image"
                />
                <div className="project-links">
                  {/* Overlay image that blurs on hover */}
                  <img
                    className="project-overlay-image"
                    src={project.image || "https://www.shutterstock.com/image-vector/airplane-logo-template-elements-icon-260nw-2456195523.jpg"}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="project-overlay-tint" aria-hidden="true"></div>
                  <a
                    href={project.links.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Demo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href={project.links.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

