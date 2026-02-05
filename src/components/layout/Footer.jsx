import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = memo(function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.p className={styles.copyright} variants={itemVariants}>
          © 2025 Ansh Mishra • Front-end Developer
        </motion.p>
        <motion.p className={styles.built} variants={itemVariants}>
          Built with React & Framer Motion • Designed with passion
        </motion.p>
        <motion.div className={styles.location} variants={itemVariants}>
          <span>📍 Kanpur, Uttar Pradesh, India</span>
        </motion.div>
      </div>
    </motion.footer>
  );
});

export default Footer;