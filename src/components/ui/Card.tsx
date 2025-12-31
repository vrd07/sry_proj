import { motion, type HTMLMotionProps } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps extends HTMLMotionProps<"div"> {
    glass?: boolean;
}

export function Card({ className = '', glass = true, children, ...props }: CardProps) {
    const cardClass = `${styles.card} ${glass ? styles.glass : styles.solid} ${className}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cardClass}
            {...props}
        >
            {children}
        </motion.div>
    );
}
