import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from '../shared/Navigation';
import { MusicPlayer } from '../shared/MusicPlayer';
import styles from './Layout.module.css';

const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.02 }
};

const pageTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 20
} as const;

export default function Layout() {
    const location = useLocation();

    return (
        <div className={styles.layout}>
            <Navigation />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className={styles.pageContainer}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
            <MusicPlayer />
        </div>
    );
}
