import { motion } from 'framer-motion';
import { FaCalendar } from 'react-icons/fa';
import { education } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div
        className="education-timeline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="timeline-item"
            variants={item}
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="year">
                  <FaCalendar /> {edu.year}
                </div>
                <h3 className="degree">{edu.degree}</h3>
              </div>
              <p className="institution">{edu.institution}</p>
              <p className="description">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
