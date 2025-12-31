import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';
import { Card } from '../components/ui/Card';
import styles from './PromiseStars.module.css'; // Reusing similar layout css

export default function ApologyBloom() {
    const apologies = [
        { title: "For the anger", desc: "I am sorry for being angry with you so often recently. You didn't deserve that." },
        { title: "For the fights", desc: "I regret the conflicts we've had. They don't reflect how much I adore you." },
        { title: "For falling short", desc: "I know I haven't met your expectations, but I am trying to be better for you." },
        { title: "For the distance", desc: "I hate that I can't be there to hold you when I hurt you. I miss you." }
    ];

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.title}
            >
                Apology Bloom
            </motion.h1>

            <div className={styles.starsContainer}>
                {apologies.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className={styles.starCard}>
                            <HeartHandshake className={styles.starIcon} size={24} color="#F7E7CE" />
                            <div>
                                <h3 className="text-lg font-semibold text-[var(--color-champagne-gold)] mb-1">{item.title}</h3>
                                <p className={styles.promiseText}>{item.desc}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
