import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { projects } from '../../utils/data';

const Projects = memo(function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.header} variants={cardVariants}>
            <span className={styles.sectionLabel}>Portfolio</span>
            <h2 className={styles.title}>Featured Projects</h2>
            <p className={styles.subtitle}>
              Some of my recent work and personal projects
            </p>
          </motion.div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.projectCard}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>💼</div>
                  <div className={styles.projectMeta}>
                    {project.date && (
                      <span className={styles.projectDate}>{project.date}</span>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>

                <div className={styles.techStack}>
                  {project.tech.split('•').map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <ul className={styles.highlights}>
                  {project.highlights.slice(0, 4).map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      className={styles.highlightItem}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {project.highlights.length > 4 && (
                  <div className={styles.moreFeatures}>
                    +{project.highlights.length - 4} more features
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;
