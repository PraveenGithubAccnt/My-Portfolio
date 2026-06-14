import { motion } from 'framer-motion';
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot } from 'react-icons/si';
import { technicalSkills, professionalSkills } from '../data/portfolioData';
import '../styles/Skills.css';

const Skills = () => {
  const getIcon = (iconName) => {
    const icons = {
      java: <FaJava />,
      spring: <SiSpringboot />,
      react: <FaReact />,
      javascript: <FaJs />,
      python: <FaPython />,
      cplusplus: <SiCplusplus />,
      html5: <FaHtml5 />,
      css3: <FaCss3Alt />
    };
    return icons[iconName] || <FaReact />;
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My Skills</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="skills-container">
        {/* Technical Skills */}
        <motion.div
          className="skills-category"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="category-title">Technical Skills</h3>
          <div className="technical-skills">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="skill-icon">{getIcon(skill.icon)}</div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <span className="progress-text">{skill.level}%</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          className="skills-category"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="category-title">Professional Skills</h3>
          <div className="professional-skills">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <span className="progress-text">{skill.level}%</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
