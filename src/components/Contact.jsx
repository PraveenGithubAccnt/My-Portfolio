import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: personalInfo.location,
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: personalInfo.social.github, name: 'GitHub' },
    { icon: <FaLinkedin />, url: personalInfo.social.linkedin, name: 'LinkedIn' },
    { icon: <FaFacebook />, url: personalInfo.social.facebook, name: 'Facebook' },
    { icon: <FaInstagram />, url: personalInfo.social.instagram, name: 'Instagram' }
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info-grid"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="contact-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              {info.link ? (
                <a href={info.link}>{info.content}</a>
              ) : (
                <p>{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="social-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="social-title">Connect With Me</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
