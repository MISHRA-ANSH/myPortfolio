import styles from './LoadingSkeleton.module.css';

function LoadingSkeleton() {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.skeletonHeader}>
                <div className={styles.skeletonLabel}></div>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonSubtitle}></div>
            </div>
            <div className={styles.skeletonGrid}>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={styles.skeletonCard}>
                        <div className={styles.skeletonCardHeader}></div>
                        <div className={styles.skeletonCardBody}>
                            <div className={styles.skeletonLine}></div>
                            <div className={styles.skeletonLine}></div>
                            <div className={styles.skeletonLine}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoadingSkeleton;
