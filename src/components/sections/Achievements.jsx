import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Achievements.module.css';
import { achievements } from '../../utils/data';

const Achievements = memo(function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      'Briefcase': '💼',
      'Trophy': '🏆',
      'Users': '👥',
      'Calendar': '📅',
      'Award': '🎖️',
      'Code': '💻'
    };
    return icons[iconName] || '⭐';
  };

  return (
    <section className={styles.achievements} id="achievements">
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.header} variants={cardVariants}>
            <span className={styles.sectionLabel}>Milestones</span>
            <h2 className={styles.title}>Achievements & Experience</h2>
            <p className={styles.subtitle}>
              Key accomplishments and professional experiences
            </p>
          </motion.div>

          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{getIcon(achievement.icon)}</span>
                </div>
                <p className={styles.text}>{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Achievements;
