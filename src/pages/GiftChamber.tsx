import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { newYearData } from '../data/newYearData';
import styles from './GiftChamber.module.css';

// Petal component for Garden animation
const Petal = ({ delay }: { delay: number }) => {
    const left = Math.random() * 100;
    return (
        <div
            className={styles.petal}
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                backgroundColor: Math.random() > 0.5 ? '#ff9a9e' : '#fff'
            }}
        />
    );
};

export default function GiftChamber() {
    const [activeGift, setActiveGift] = useState<typeof newYearData.gifts[0] | null>(null);

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.title}
            >
                Gift Chamber
            </motion.h1>

            <div className={styles.grid}>
                {newYearData.gifts.map((gift, index) => (
                    <motion.div
                        key={gift.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        onClick={() => setActiveGift(gift)}
                    >
                        <Card className={styles.giftCard}>
                            <div className={styles.iconWrapper}>
                                {gift.visual?.type === 'garden' && (
                                    <img src={gift.visual.icon} alt="Lily" className={styles.lilyIcon} />
                                )}
                                {gift.visual?.type === 'chocolate' && (
                                    <div className={styles.boxIcon}>{gift.visual.icon}</div>
                                )}
                                {gift.visual?.type === 'moon' && (
                                    <img src={gift.visual.icon} alt="Moon" className={styles.moonIcon} />
                                )}
                            </div>
                            <h3 className={styles.giftTitle}>{gift.title}</h3>
                            <p className={styles.giftHint}>{gift.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeGift && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button className={styles.closeParams} onClick={() => setActiveGift(null)}>
                            <X />
                        </button>

                        {/* Background Effects */}
                        {activeGift.visual?.type === 'garden' && (
                            <>
                                {/* Create 20 falling petals */}
                                {[...Array(20)].map((_, i) => <Petal key={i} delay={Math.random() * 5} />)}
                            </>
                        )}

                        <motion.div
                            className={styles.revealedContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 20 }}
                        >
                            <img
                                src={activeGift.visual?.reveal}
                                alt={activeGift.title}
                                className={styles.revealedImage}
                            />

                            <h2 className={styles.revealedTitle}>
                                {activeGift.visual?.type === 'garden' && "Our Blooming Love"}
                                {activeGift.visual?.type === 'chocolate' && "Sweetness Overload"}
                                {activeGift.visual?.type === 'moon' && "My Eternal Queen"}
                            </h2>

                            <p className={styles.revealedText}>
                                {activeGift.visual?.type === 'garden' && "Just like this garden, my love for you grows wild and beautiful every single day. You are my flower, my sun, my everything."}
                                {activeGift.visual?.type === 'chocolate' && "Life with you is sweeter than any chocolate in the world. I want to spoil you, pamper you, and give you all the joy you deserve."}
                                {activeGift.visual?.type === 'moon' && "As long as the moon glows, my promise stands. I will build our kingdom. I will be your king. And you will always be my queen."}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
