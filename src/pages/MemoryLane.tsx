import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { newYearData } from '../data/newYearData';
import { generatedMemories } from '../data/generatedMemories';
import styles from './MemoryLane.module.css';

export default function MemoryLane() {
    // Use generated memories if user added photos, otherwise fallback to demo data
    const memories = generatedMemories.length > 0 ? generatedMemories : newYearData.memories2025;

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.title}
            >
                Memory Lane
            </motion.h1>

            <div className={styles.grid}>
                {memories.map((memory, index) => (
                    <motion.div
                        key={memory.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className={styles.memoryCard} glass={false}>
                            <div className={styles.imageWrapper}>
                                <img src={memory.image} alt={memory.caption} className={styles.image} />
                            </div>
                            <h3 className={styles.caption}>{memory.caption}</h3>
                            <p className={styles.date}>{memory.date}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
