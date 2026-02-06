import { memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Skills.module.css';
import { skills } from '../../utils/data';

const Skills = memo(function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const skillCategories = [
    {
      name: 'Programming',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: skills.programming?.items || []
    },
    {
      name: 'Frontend',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: skills.frontend?.items || []
    },
    {
      name: 'Backend',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      skills: skills.backend?.items || []
    },
    {
      name: 'Tools',
      icon: '🛠️',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: skills.tools?.items || []
    },
    {
      name: 'Concepts',
      icon: '🧠',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      skills: skills.concepts?.items || []
    }
  ];

  // 3D Tilt Effect Component
  const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className={styles.header} variants={cardVariants}>
            <span className={styles.sectionLabel}>My Expertise</span>
            <h2 className={styles.title}>Skills & Technologies</h2>
            <p className={styles.subtitle}>
              Tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <TiltCard key={index} className={styles.skillCardWrapper}>
                <motion.div
                  className={styles.skillCard}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardHeader}>
                    <motion.div
                      className={styles.iconWrapper}
                      style={{ background: category.gradient }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.icon}>{category.icon}</span>
                    </motion.div>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                  </div>

                  <div className={styles.skillsList}>
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className={styles.skillItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        whileHover={{ x: 5, scale: 1.05 }}
                      >
                        <span className={styles.skillDot} style={{ background: category.gradient }}></span>
                        <span className={styles.skillName}>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div className={styles.additionalInfo} variants={cardVariants}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🎯</div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Always Learning</h4>
                <p className={styles.infoText}>
                  Continuously expanding my skill set and staying updated with the latest web development trends
                </p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⚡</div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Fast Learner</h4>
                <p className={styles.infoText}>
                  Quick to adapt to new technologies and frameworks, with a passion for problem-solving
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default Skills;
