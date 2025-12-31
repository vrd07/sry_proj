import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';
import styles from './RingCeremony.module.css';

export function RingCeremony() {
    const [stage, setStage] = useState<'closed' | 'open' | 'answered'>('closed');
    const [isVisible, setIsVisible] = useState(true);

    const openBox = () => {
        setStage('open');
    };

    const handleYes = () => {
        setStage('answered');
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 300 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    if (!isVisible) return null;

    return (
        <div className="mt-12 flex flex-col items-center">
            <AnimatePresence>
                {stage === 'closed' && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className={styles.velvetBox}
                        onClick={openBox}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], textShadow: ["0 0 10px gold", "0 0 30px gold", "0 0 10px gold"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={styles.boxLid}
                        >
                            🎁
                        </motion.div>
                        <p className="absolute -bottom-8 text-[var(--color-champagne-gold)] text-sm tracking-widest uppercase">One Last Surprise</p>
                    </motion.div>
                )}

                {stage !== 'closed' && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className={styles.ceremonyContainer}>
                            {stage === 'open' && (
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <img src="/assets/ring.png" alt="Promise Ring" className={styles.ringImage} />
                                    <h2 className={styles.question}>Will you be mine forever?</h2>
                                    <div className={styles.buttonGroup}>
                                        <Button onClick={handleYes} size="lg">YES, A THOUSAND TIMES YES! 💍</Button>
                                        <Button onClick={handleYes} variant="outline" size="lg">Of course, Bebo ❤️</Button>
                                    </div>
                                </motion.div>
                            )}

                            {stage === 'answered' && (
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    <img src="/assets/ring.png" alt="Promise Ring" className={styles.ringImage} />
                                    <h2 className={styles.question}>She Said Yes!</h2>
                                    <p className={styles.message}>
                                        This ring is a promise.<br />
                                        One day, I will put a real one on your finger.<br />
                                        I love you, my future wife.
                                    </p>
                                    <div className="mt-8">
                                        <Button onClick={() => setIsVisible(false)} variant="ghost">Close Ceremony</Button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
