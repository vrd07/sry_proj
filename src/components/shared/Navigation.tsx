import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useSanctuary } from '../../context/SanctuaryContext';
import styles from './Navigation.module.css';

export function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isNewYearUnlocked } = useSanctuary();

    // Don't show nav on Landing page
    if (location.pathname === '/') return null;

    return (
        <nav className={styles.nav}>
            {isNewYearUnlocked && location.pathname !== '/new-year-2026' && (
                <Button
                    className={styles.newYearBtn}
                    onClick={() => navigate('/new-year-2026')}
                >
                    <Sparkles size={16} />
                    <span>2026</span>
                </Button>
            )}

            {location.pathname !== '/sanctuary' && (
                <Button
                    variant="ghost"
                    className={styles.homeBtn}
                    onClick={() => navigate('/sanctuary')}
                    title="Return to Sanctuary"
                >
                    <Home size={20} className={styles.homeIcon} />
                </Button>
            )}
        </nav>
    );
}
