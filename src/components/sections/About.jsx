import { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = memo(function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const features = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love. Focus on modern design principles and accessibility.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Building fast, optimized applications with clean code. Ensuring smooth user experiences across all devices.'
    },
    {
      icon: '🚀',
      title: 'Modern Stack',
      description: 'Expertise in React.js, JavaScript, and modern web technologies. Always learning and adapting to new tools.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Team player with strong communication skills. Experience in coordinating events and leading placement drives.'
    }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <span className={styles.sectionLabel}>Get to know me</span>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.subtitle}>
              Passionate front-end developer with a keen eye for design and detail
            </p>
          </motion.div>

          {/* Main Content */}
          <div className={styles.content}>
            {/* Bio Card */}
            <motion.div className={styles.bioCard} variants={itemVariants}>
              <div className={styles.bioContent}>
                <h3 className={styles.bioTitle}>Hello! I'm Ansh 👋</h3>
                <p className={styles.bioText}>
                  I'm a Front-end Developer currently interning at <span className={styles.highlight}>Numetry Technology, Pune</span>.
                  I specialize in building responsive web applications using React.js and modern JavaScript.
                </p>
                <p className={styles.bioText}>
                  My journey in web development started with a curiosity about how websites work,
                  and it has evolved into a passion for creating seamless digital experiences.
                  Currently, I'm expanding my skill set by <span className={styles.highlight}>learning backend development</span> with
                  Node.js, Express.js, and MongoDB to become a full-stack developer.
                </p>
                <p className={styles.bioText}>
                  I have hands-on experience with <span className={styles.highlight}>Java programming</span> and
                  object-oriented concepts. Beyond coding, I've served as a <span className={styles.highlight}>Placement Coordinator</span> and
                  <span className={styles.highlight}> Event Coordinator</span>, which has honed my leadership
                  and organizational skills. I also participated in the <span className={styles.highlight}>HACK-IT-ON Hackathon 2024</span>.
                </p>

                <div className={styles.bioStats}>
                  <div className={styles.bioStat}>
                    <div className={styles.bioStatIcon}>🎓</div>
                    <div>
                      <div className={styles.bioStatLabel}>Education</div>
                      <div className={styles.bioStatValue}>B.Tech, KIOT Kanpur</div>
                    </div>
                  </div>
                  <div className={styles.bioStat}>
                    <div className={styles.bioStatIcon}>📍</div>
                    <div>
                      <div className={styles.bioStatLabel}>Location</div>
                      <div className={styles.bioStatValue}>Kanpur, UP</div>
                    </div>
                  </div>
                  <div className={styles.bioStat}>
                    <div className={styles.bioStatIcon}>💼</div>
                    <div>
                      <div className={styles.bioStatLabel}>Status</div>
                      <div className={styles.bioStatValue}>Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCard}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
