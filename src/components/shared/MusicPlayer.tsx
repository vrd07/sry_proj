import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './MusicPlayer.module.css';

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Placeholder track
    const trackUrl = "/music/background.mp4";

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log('Audio autoplay blocked', e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className={styles.container}>
            <audio ref={audioRef} src={trackUrl} loop />

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={styles.popup}
                    >
                        <div className={styles.trackInfo}>
                            <div className={styles.albumArt}>
                                <Music size={20} className={styles.artIcon} />
                            </div>
                            <div>
                                <h4 className={styles.title}>Sanctuary Vibe</h4>
                                <p className={styles.subtitle}>Acoustic Dreams</p>
                            </div>
                        </div>
                        <div className={styles.controls}>
                            <button onClick={togglePlay} className={styles.controlBtn}>
                                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                            </button>
                            <button onClick={toggleMute} className={styles.controlBtn}>
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                variant="secondary"
                size="sm"
                className={styles.toggleBtn}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <Music size={20} className={isPlaying ? styles.spin : ""} />
            </Button>
        </div>
    );
}
