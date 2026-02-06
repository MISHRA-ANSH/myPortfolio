import { memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
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
                  I'm a Front-end Developer currently working as a <span className={styles.highlight}>Trainee at Epic Web Techno, Noida</span>, where I build responsive and user-friendly web applications using React.js and modern JavaScript.
                </p>
                <p className={styles.bioText}>
                  My journey into web development began with a curiosity about how websites work, which gradually evolved into a passion for creating clean, intuitive, and seamless digital experiences. I enjoy transforming ideas into interactive interfaces that balance both functionality and design.
                </p>
                <p className={styles.bioText}>
                  Previously, I interned at <span className={styles.highlight}>Numetry Technology, Pune</span>, where I gained practical exposure to front-end development and strengthened my foundation in building real-world web applications.
                </p>
                <p className={styles.bioText}>
                  At present, I'm expanding my technical skill set by <span className={styles.highlight}>learning backend development</span> with Node.js, Express.js, and MongoDB, with the goal of becoming a Full-Stack Developer. I'm also in the learning phase of <span className={styles.highlight}>Java</span>, focusing on core concepts and object-oriented programming to further enhance my problem-solving abilities.
                </p>
                <p className={styles.bioText}>
                  Beyond coding, I've taken on leadership responsibilities as a <span className={styles.highlight}>Placement Coordinator</span> and <span className={styles.highlight}>Event Coordinator</span>, which helped me develop strong organizational, communication, and teamwork skills. Additionally, I participated in the <span className={styles.highlight}>HACK-IT-ON Hackathon 2024</span>, where I collaborated with peers to solve real-world challenges in a fast-paced environment.
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
                      <div className={styles.bioStatValue}>Noida, UP</div>
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
                <TiltCard key={index} className={styles.featureCardWrapper}>
                  <motion.div
                    className={styles.featureCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={styles.cardGlow}></div>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
