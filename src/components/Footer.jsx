import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>v2.0 &copy; {new Date().getFullYear()} Praveen Kumar Kushwaha. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
