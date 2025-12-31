import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useSanctuary } from '../context/SanctuaryContext';
import styles from './SanctuaryHub.module.css';

export default function ListeningGarden() {
    const navigate = useNavigate();
    const { addUnlockedRoom } = useSanctuary();
    const [venting, setVenting] = useState('');

    const handleSubmit = () => {
        // Save to local storage or just acknowledge
        console.log("She said:", venting);
        addUnlockedRoom('garden');
        navigate('/sanctuary');
    };

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.title}
            >
                Listening Garden
            </motion.h1>

            <Card className="max-w-2xl w-full">
                <p className="text-lg mb-6 text-white/80">
                    This is your safe space. Tell me how my actions made you feel.
                    I promise to read every word without judgment or defense.
                </p>

                <textarea
                    className="w-full h-40 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne-gold)] mb-6"
                    placeholder="I felt..."
                    value={venting}
                    onChange={(e) => setVenting(e.target.value)}
                />

                <div className="flex flex-col gap-3">
                    <Button fullWidth onClick={handleSubmit} disabled={venting.length === 0}>
                        Speak Your Truth (Unlock)
                    </Button>
                    {venting.length > 0 && (
                        <Button variant="outline" fullWidth onClick={() => {
                            const text = encodeURIComponent(`Hey Bebo, I wanted to tell you this from the Listening Garden:\n\n${venting}`);
                            window.open(`https://wa.me/?text=${text}`, '_blank');
                        }}>
                            Send to Bebo via WhatsApp 💬
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
}
