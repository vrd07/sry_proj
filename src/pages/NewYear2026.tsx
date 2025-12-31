
import { motion, AnimatePresence } from 'framer-motion';
import { CountdownClock } from '../components/new-year/CountdownClock';
import { FireworksAnimation } from '../components/new-year/FireworksAnimation';
import { RingCeremony } from '../components/new-year/RingCeremony';
import { useCountdown } from '../hooks/useCountdown';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { newYearData } from '../data/newYearData';
import styles from './NewYear2026.module.css';

export default function NewYear2026() {
    const targetDate = new Date('2026-01-01T00:00:00');
    const { total } = useCountdown(targetDate);

    // For demo/testing purposes, we can force celebration if query param exists or manual override
    // But strictly respecting the date:
    const isPostMidnight = total <= 0;

    return (
        <div className={styles.container}>
            <AnimatePresence mode="wait">
                {!isPostMidnight ? (
                    <motion.div
                        key="countdown"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.countdownSection}
                    >
                        <h2 className={styles.heading}>Counting down to our best year yet</h2>
                        <CountdownClock targetDate={targetDate} />

                        <div className="mt-12 w-full max-w-2xl mx-auto">
                            <Card className="text-left">
                                <h3 className="text-xl text-[var(--color-champagne-gold)] mb-4 flex items-center gap-2">
                                    <span>✨</span> Our Resolutions
                                </h3>
                                <ul className="space-y-3">
                                    {newYearData.resolutions.map((res, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="flex items-center gap-3 text-white/90"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-champagne-gold)]" />
                                            {res}
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-white/50 italic text-center">
                                    More surprises await at midnight...
                                </p>
                            </Card>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="celebration"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className={styles.celebrationSection}
                    >
                        <FireworksAnimation />
                        <h1 className={styles.celebrationTitle}>HAPPY NEW YEAR 2026!</h1>

                        <Card className={styles.messageCard}>
                            <p className="whitespace-pre-line text-lg text-white">
                                "My Dearest Lun,

                                It's been a year and 3 months of us being together. All I want is to thank you for everything you do for me. You were the best thing that happened to me last year, this year, and I hope for all the upcoming years too.

                                I know I mess things up with you now and then, and have many times left you broken. When I hear that you don't see my love these days, it hurts a lot. I know you may feel that because I didn't really do anything for you and we are in a long distance relationship, but I swear I admire you a lot and I see my future in you, my girl.

                                I know I have hurt you this year a lot. I am sorry for being angry with you so often recently, and I am sorry that I didn't meet your expectations. But the spark of my love hasn't faded away. I still love you, my girl, even if you don't see it ❤️.

                                I cherish the memories we made — the romantic dates, the surprise dates, making each other feel loved. Making you sleep in my arms and chest, and you making me sleep on your lap. The kisses we had... wanting to eat each other... counting every inch of you.

                                You are totally special to me. Your 'moun', your smile, your yelling, your yapping — everything is very special to me. The way you are proud to be my girl even if I am not financially stable yet. You had so many reasons to leave, but you still stayed by my side. You loved me, accepted my childishness, and never ignored me.

                                You are far better than anyone else in my life. Thank you for never making me jealous, for always being loyal and honest. You are my only precious asset. When you call me 'bebo', it lightens up my mood. And thank you for supporting me when I was stressed and anxious this year.

                                I am sorry for everything I did to hurt you with, my girl. But one thing is certain: I will love you always and forever. I seriously want to marry you one day — that's my ultimate to-do list. I want a family with you. I want to travel with you a lot, and yes, of course, I will ride that bike for you and take you to several places, ma girl.

                                Here's to us, and to 2026 being OUR year.

                                Forever yours,
                                Your Bebo"
                            </p>
                        </Card>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {newYearData.gifts.map((gift, idx) => (
                                <motion.div
                                    key={gift.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + idx * 0.2 }}
                                >
                                    <Card>
                                        <h4 className="text-[var(--color-champagne-gold)] font-bold">{gift.title}</h4>
                                        <span className="text-xs text-white/50 uppercase tracking-widest">{gift.type}</span>
                                        <p className="text-sm mt-2">{gift.desc}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <RingCeremony />

                        <div className="mt-12">
                            <Button onClick={() => window.print()} variant="secondary">
                                Print Our Resolutions
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
