import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';
import { education } from '../../utils/data';

const Education = memo(function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.header} variants={cardVariants}>
            <span className={styles.sectionLabel}>Academic Background</span>
            <h2 className={styles.title}>Education</h2>
          </motion.div>

          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                variants={cardVariants}
                whileHover={{ x: 10 }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.eduCard}>
                  <div className={styles.eduIcon}>🎓</div>
                  <div className={styles.eduContent}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.school}>{edu.school}</p>
                    <div className={styles.eduMeta}>
                      <span className={styles.years}>{edu.years}</span>
                      <span className={styles.grade}>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Education;
