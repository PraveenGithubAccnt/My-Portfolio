import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Recent Projects</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <div className="project-number">0{project.id}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <div className="project-content">
              <p className="project-description">
                {expandedProject === project.id ? project.fullDesc : project.shortDesc}
              </p>

              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    className="project-technologies"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="read-more-btn"
                onClick={() => toggleProject(project.id)}
              >
                {expandedProject === project.id ? 'Read less' : 'Read more'}
              </button>
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> GitHub
              </a>
              {project.download && (
                <a
                  href={project.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaDownload /> Download
                </a>
              )}
            </div>

            <div className="card-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
