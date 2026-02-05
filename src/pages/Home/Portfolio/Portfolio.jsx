import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import styles from './Portfolio.module.css';
import Navbar from '../../../components/layout/Navbar';
import Hero from '../../../components/sections/Hero';

// Lazy load sections for better initial load
const About = lazy(() => import('../../../components/sections/About'));
const Skills = lazy(() => import('../../../components/sections/Skills'));
const Projects = lazy(() => import('../../../components/sections/Projects'));
const Learning = lazy(() => import('../../../components/sections/Learning'));
const Achievements = lazy(() => import('../../../components/sections/Achievements'));
const Education = lazy(() => import('../../../components/sections/Education'));
const Footer = lazy(() => import('../../../components/layout/Footer'));

function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    learning: useRef(null),
    achievements: useRef(null),
    education: useRef(null)
  };

  // Optimized scroll handler with passive listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setShowScrollTop(scrollY > 500);

          // Simplified active section detection
          const sections = ['about', 'skills', 'projects', 'learning', 'achievements', 'education'];
          for (let i = sections.length - 1; i >= 0; i--) {
            const element = sectionRefs[sections[i]]?.current;
            if (element && element.offsetTop - 200 <= scrollY) {
              setActiveSection(sections[i]);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((section) => {
    const element = sectionRefs[section]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.container}>
      {/* Simplified Background */}
      <div className={styles.background}>
        <div className={styles.gradientBase}></div>
      </div>

      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      <div className={styles.content}>
        <Hero />

        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <section className={styles.mainContent}>
            <div id="about" ref={sectionRefs.about} className={styles.section}>
              <About />
            </div>

            <div id="skills" ref={sectionRefs.skills} className={styles.section}>
              <Skills />
            </div>

            <div id="projects" ref={sectionRefs.projects} className={styles.section}>
              <Projects />
            </div>

            <div id="learning" ref={sectionRefs.learning} className={styles.section}>
              <Learning />
            </div>

            <div id="achievements" ref={sectionRefs.achievements} className={styles.section}>
              <Achievements />
            </div>

            <div id="education" ref={sectionRefs.education} className={styles.section}>
              <Education />
            </div>
          </section>

          <Footer />
        </Suspense>
      </div>

      {showScrollTop && (
        <button
          className={styles.scrollToTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Portfolio;