import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import styles from './CountdownClock.module.css';

interface CountdownClockProps {
    targetDate: Date;
}

export function CountdownClock({ targetDate }: CountdownClockProps) {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const TimeUnit = ({ value, label }: { value: number, label: string }) => (
        <div className={styles.unitContainer}>
            <div className={styles.card}>
                <motion.span
                    key={value}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={styles.value}
                >
                    {String(value).padStart(2, '0')}
                </motion.span>
            </div>
            <span className={styles.label}>{label}</span>
        </div>
    );

    return (
        <div className={styles.container}>
            <TimeUnit value={days} label="DAYS" />
            <div className={styles.separator}>:</div>
            <TimeUnit value={hours} label="HOURS" />
            <div className={styles.separator}>:</div>
            <TimeUnit value={minutes} label="MINUTES" />
            <div className={styles.separator}>:</div>
            <TimeUnit value={seconds} label="SECONDS" />
        </div>
    );
}
