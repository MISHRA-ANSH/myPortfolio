import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { profileData } from '../../utils/data';
import profileImage from '../../assets/images/profile.png';

const Hero = memo(function Hero() {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Aesthetic Background */}
      <div className={styles.bgAnimation}>
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
        <div className={styles.bgGrid}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <div className={styles.leftContent}>
            <motion.div
              variants={itemVariants}
              className={styles.badge}
            >
              <span className={styles.badgeDot}></span>
              Available for Opportunities
            </motion.div>

            <motion.h1 variants={itemVariants} className={styles.title}>
              Hi, I'm <span className={styles.nameGradient}>Ansh Mishra</span>
            </motion.h1>

            <motion.div variants={itemVariants} className={styles.subtitleWrapper}>
              <h2 className={styles.subtitle}>Front-end Developer</h2>
              <div className={styles.subtitleUnderline}></div>
            </motion.div>

            <motion.p variants={itemVariants} className={styles.description}>
              Crafting beautiful, responsive web experiences with React.js.
              Passionate about clean code, modern design, and creating
              intuitive user interfaces that make a difference.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>4+</div>
                <div className={styles.statLabel}>Months Experience</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>7+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2</div>
                <div className={styles.statLabel}>Certifications</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className={styles.ctaButtons}>
              <motion.a
                href={`mailto:${profileData.email}`}
                className={styles.primaryBtn}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className={styles.btnIcon}>✉️</span>
                Get in Touch
                <span className={styles.btnArrow}>→</span>
              </motion.a>

              <motion.a
                href={profileData.resume}
                download="Ansh_Mishra_Resume.pdf"
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className={styles.btnIcon}>📄</span>
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className={styles.socialLinks}>
              <div className={styles.socialLabel}>Connect with me</div>
              <div className={styles.socialIcons}>
                <motion.a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                <motion.a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href={`tel:${profileData.phone}`}
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label="Phone"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            className={styles.rightContent}
            variants={itemVariants}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow} />

              <motion.div
                className={styles.imageContainer}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {!imageError ? (
                  <img
                    src={profileImage}
                    alt="Ansh Mishra"
                    className={styles.profileImage}
                    onError={() => setImageError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className={styles.imageFallback}>AM</div>
                )}
              </motion.div>

              {/* Floating Elements - Desktop Only */}
              <motion.div
                className={styles.floatingElement}
                style={{ top: '10%', right: '-10%' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={styles.floatingIcon}>💻</div>
              </motion.div>

              <motion.div
                className={styles.floatingElement}
                style={{ bottom: '15%', left: '-10%' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className={styles.floatingIcon}>⚡</div>
              </motion.div>

              <motion.div
                className={styles.floatingElement}
                style={{ top: '50%', right: '-15%' }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className={styles.floatingIcon}>🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className={styles.scrollMouse}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.scrollWheel}></div>
          </motion.div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
