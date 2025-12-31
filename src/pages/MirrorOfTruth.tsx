import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useSanctuary } from '../context/SanctuaryContext';
import styles from './SanctuaryHub.module.css'; // Reusing for consistency

export default function MirrorOfTruth() {
    const navigate = useNavigate();
    const { addUnlockedRoom } = useSanctuary();

    const handleContinue = () => {
        addUnlockedRoom('mirror');
        navigate('/listening-garden');
    };

    const reflections = [
        "I let the monster of my anger consume our peace.",
        "I broke the heart that only ever beat for me.",
        "I made you feel invisible when you should have been my whole world.",
        "I gave you silence when you were begging for my voice."
    ];

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.title}
            >
                Mirror of Truth
            </motion.h1>

            <Card className="max-w-2xl w-full">
                <p className="text-lg mb-6 text-white/80 leading-relaxed">
                    Before we can move forward, I must look at myself honestly.
                    I've looked in the mirror, and this is what I see:
                </p>

                <div className="space-y-4 mb-8">
                    {reflections.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.3 }}
                            className="p-4 bg-white/5 border-l-2 border-[var(--color-champagne-gold)]"
                        >
                            <p className="italic">"{item}"</p>
                        </motion.div>
                    ))}
                </div>

                <p className="mb-8 text-white/80">
                    I own these mistakes. No excuses.
                </p>

                <Button fullWidth onClick={handleContinue}>
                    I'm Listening (Continue)
                </Button>
            </Card>
        </div>
    );
}
