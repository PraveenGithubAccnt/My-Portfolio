import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = personalInfo.skills[skillIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentSkill.length) {
        setDisplayText(currentSkill.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentSkill.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentSkill.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSkillIndex((skillIndex + 1) % personalInfo.skills.length);
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hey there! Welcome to my digital space!
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm <span className="highlight">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="hero-skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="skills-label">Specializing in: </span>
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href={personalInfo.resumeUrl} download className="resume-btn">
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-container">
            <div className="image-glow"></div>
            <img src={personalInfo.profileImage} alt="Praveen Kumar" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
