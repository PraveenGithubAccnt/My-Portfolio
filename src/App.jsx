import { HashRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <Router>
      <div className="App">
        <Navbar isDark={isDark} />
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        <main>
          <Hero />
          <Experience />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
