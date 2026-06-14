import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Professional Experience</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="experience-container">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`experience-card ${exp.current ? 'current' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="experience-header">
              <div className="role-info">
                {exp.current && (
                  <div className="current-badge">
                    <span>Current Position</span>
                  </div>
                )}
                <h3 className="role-title">{exp.role}</h3>
                <div className="company-name">
                  <FaBriefcase /> {exp.company}
                </div>
              </div>
              <div className="experience-meta">
                <div className="meta-item">
                  <FaCalendar /> {exp.period}
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt /> {exp.location}
                </div>
              </div>
            </div>

            <div className="experience-content">
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <FaCheckCircle className="check-icon" />
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
