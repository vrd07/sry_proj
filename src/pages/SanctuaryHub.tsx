import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    User,
    Ear,
    Image as ImageIcon,
    HeartHandshake,
    Star,
    Mail,
    Gift,
    Palette,
    PartyPopper
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useSanctuary } from '../context/SanctuaryContext';
import styles from './SanctuaryHub.module.css';

export default function SanctuaryHub() {
    const navigate = useNavigate();
    const { isNewYearUnlocked } = useSanctuary();
    // TODO: Add logic for sequential unlocking if desired. For now, all open or sequential.
    // Prompt says "Unlocks after she completes... OR accessible directly...". 
    // Let's assume sequential unlock logic is implemented in Context or here.
    // For simplicity MVP, let's keep all main rooms open, and New Year locked until logic met.

    const rooms = [
        { id: 'mirror', title: 'Mirror of Truth', desc: 'Where I acknowledge my mistakes', icon: User, path: '/mirror-of-truth' },
        { id: 'garden', title: 'Listening Garden', desc: 'A safe space for your feelings', icon: Ear, path: '/listening-garden' },
        { id: 'memory', title: 'Memory Lane', desc: 'Remembering our beautiful moments', icon: ImageIcon, path: '/memory-lane' },
        { id: 'apology', title: 'Apology Bloom', desc: 'My specific apologies to you', icon: HeartHandshake, path: '/apology-bloom' },
        { id: 'promise', title: 'Promise Stars', desc: 'My commitments for our future', icon: Star, path: '/promise-stars' },
        { id: 'letters', title: 'Love Letters', desc: 'Words from my heart', icon: Mail, path: '/love-letters' },
        { id: 'gift', title: 'Gift Chamber', desc: 'Something special for you', icon: Gift, path: '/gift-chamber' },
        { id: 'canvas', title: 'Healing Canvas', desc: 'Find closure together', icon: Palette, path: '/healing-canvas' },
    ];

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.title}
            >
                Your Sanctuary
            </motion.h1>

            <div className={styles.grid}>
                {rooms.map((room, index) => (
                    <motion.div
                        key={room.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => navigate(room.path)}
                    >
                        <Card className={styles.roomCard}>
                            <div className={styles.iconWrapper}>
                                <room.icon size={32} />
                            </div>
                            <h3 className={styles.roomTitle}>{room.title}</h3>
                            <p className={styles.roomDesc}>{room.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {isNewYearUnlocked && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className={styles.newYearSection}
                    onClick={() => navigate('/new-year-2026')}
                >
                    <Card className={`${styles.roomCard} ${styles.newYearCard}`} glass={false}>
                        <div className={styles.iconWrapper} style={{ background: 'rgba(255,215,0,0.2)', color: '#FFD700' }}>
                            <PartyPopper size={40} />
                        </div>
                        <h3 className={styles.roomTitle} style={{ fontSize: '1.5rem', color: '#FFD700' }}>
                            Our 2026 Celebration
                        </h3>
                        <p className={styles.roomDesc} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            A special surprise awaits you...
                        </p>
                    </Card>
                </motion.div>
            )}
        </div>
    );
}
