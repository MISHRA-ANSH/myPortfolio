import { motion } from 'framer-motion';
import styles from './ThemeToggle.module.css';

function ThemeToggle({ theme, onToggle }) {
    return (
        <motion.button
            className={styles.themeToggle}
            onClick={onToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
        >
            <motion.div
                className={styles.toggleTrack}
                animate={{
                    background: theme === 'dark'
                        ? 'linear-gradient(135deg, #1E293B, #334155)'
                        : 'linear-gradient(135deg, #F1F5F9, #E2E8F0)'
                }}
            >
                <motion.div
                    className={styles.toggleThumb}
                    animate={{
                        x: theme === 'dark' ? 0 : 28
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {theme === 'dark' ? '🌙' : '☀️'}
                </motion.div>
            </motion.div>
        </motion.button>
    );
}

export default ThemeToggle;
