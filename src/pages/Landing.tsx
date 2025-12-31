import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import styles from './Landing.module.css';

export default function Landing() {
    const navigate = useNavigate();

    const handleEnter = () => {
        // Navigate to Sanctuary Hub
        // In a real app, this might also initialize audio context if needed explicitly
        navigate('/sanctuary');
    };

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.title}
            >
                Healing Hearts Sanctuary
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={styles.subtitle}
            >
                A journey of apology, reflection, and new beginnings.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className={styles.buttonWrapper}
            >
                <Button
                    size="lg"
                    variant="outline"
                    onClick={handleEnter}
                    className="px-12 py-6 text-xl"
                >
                    Enter Your Sanctuary
                </Button>
            </motion.div>
        </div>
    );
}
