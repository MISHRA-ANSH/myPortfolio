import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = memo(function Navbar({ activeSection, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'learning', label: 'Learning', icon: '🚀' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'education', label: 'Education', icon: '🎓' }
  ];

  const handleNavClick = (section) => {
    onNavClick(section);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className={styles.navbar}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        <div className={styles.navContent}>
          <motion.div
            className={styles.logo}
            onClick={handleLogoClick}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.logoContainer}>
              <div className={styles.logoIconWrapper}>
                <div className={styles.logoIcon}>
                  <div className={styles.logoBadge}>
                    <span className={styles.logoInitials}>AM</span>
                  </div>
                  <div className={styles.logoAccent}></div>
                </div>
              </div>
              <div className={styles.logoTextWrapper}>
                <span className={styles.logoName}>Ansh Mishra</span>
                <span className={styles.logoSubtext}>FRONT-END DEV</span>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.desktopMenu} variants={itemVariants}>
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`${styles.navBtn} ${activeSection === section.id ? styles.active : ''}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.navIcon}>{section.icon}</span>
                <span className={styles.navText}>{section.label}</span>
                {activeSection === section.id && (
                  <motion.span
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.active : ''}`}
            aria-label="Toggle menu"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className={styles.hamburger}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`${styles.mobileNavBtn} ${activeSection === section.id ? styles.activeMobile : ''}`}
                  variants={mobileItemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.mobileNavIcon}>{section.icon}</span>
                  <span className={styles.mobileNavText}>{section.label}</span>
                  {activeSection === section.id && (
                    <motion.span
                      className={styles.mobileActiveIndicator}
                      layoutId="mobileActiveIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

export default Navbar;