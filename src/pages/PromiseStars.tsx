import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '../components/ui/Card';
import styles from './PromiseStars.module.css';

export default function PromiseStars() {
    const promises = [
        "I promise to tame the storm inside me, so I can be your shelter.",
        "I promise that one day, 'Goodbye' will be replaced by 'Goodnight' in our shared home.",
        "I promise to ride that bike into the sunset with you holding onto me forever.",
        "I promise to be the man your loyalty deserves—financially, emotionally, eternally.",
        "I promise that no matter how many times we fight, I will always choose YOU."
    ];

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.title}
            >
                Promise Stars
            </motion.h1>
            <p className={styles.subtitle}>My commitments to our future.</p>

            <div className={styles.starsContainer}>
                {promises.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className={styles.starCard}>
                            <Star className={styles.starIcon} size={24} fill="#FFD700" />
                            <p className={styles.promiseText}>{promise}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
