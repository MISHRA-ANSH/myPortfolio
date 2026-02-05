import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Learning.module.css';

const Learning = memo(function Learning() {
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

    const learningPaths = [
        {
            title: 'Backend Development',
            icon: '🚀',
            status: 'In Progress',
            progress: 60,
            technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
            description: 'Building server-side applications and RESTful APIs'
        },
        {
            title: 'Full-Stack Projects',
            icon: '💡',
            status: 'Planning',
            progress: 30,
            technologies: ['MERN Stack', 'Authentication', 'Deployment'],
            description: 'Creating end-to-end web applications'
        },
        {
            title: 'Advanced React',
            icon: '⚛️',
            status: 'Ongoing',
            progress: 75,
            technologies: ['Redux', 'Context API', 'Custom Hooks', 'Performance'],
            description: 'Mastering advanced React patterns and optimization'
        }
    ];

    return (
        <section className={styles.learning} id="learning">
            <div className={styles.container}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className={styles.header} variants={cardVariants}>
                        <span className={styles.sectionLabel}>Continuous Growth</span>
                        <h2 className={styles.title}>Learning Journey</h2>
                        <p className={styles.subtitle}>
                            Currently expanding my skills to become a full-stack developer
                        </p>
                    </motion.div>

                    <div className={styles.learningGrid}>
                        {learningPaths.map((path, index) => (
                            <motion.div
                                key={index}
                                className={styles.learningCard}
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <span className={styles.icon}>{path.icon}</span>
                                    </div>
                                    <span className={`${styles.status} ${styles[path.status.toLowerCase().replace(' ', '')]}`}>
                                        {path.status}
                                    </span>
                                </div>

                                <h3 className={styles.pathTitle}>{path.title}</h3>
                                <p className={styles.pathDescription}>{path.description}</p>

                                <div className={styles.progressBar}>
                                    <div className={styles.progressLabel}>
                                        <span>Progress</span>
                                        <span className={styles.progressPercent}>{path.progress}%</span>
                                    </div>
                                    <div className={styles.progressTrack}>
                                        <motion.div
                                            className={styles.progressFill}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${path.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        />
                                    </div>
                                </div>

                                <div className={styles.technologies}>
                                    {path.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techBadge}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div className={styles.cta} variants={cardVariants}>
                        <div className={styles.ctaContent}>
                            <h3 className={styles.ctaTitle}>Always Learning, Always Growing</h3>
                            <p className={styles.ctaText}>
                                I believe in continuous learning and staying updated with the latest technologies.
                                My goal is to become a proficient full-stack developer and contribute to impactful projects.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
});

export default Learning;
