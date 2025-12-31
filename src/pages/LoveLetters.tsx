import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import styles from './LoveLetters.module.css';

export default function LoveLetters() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLetter, setCurrentLetter] = useState(0);

    const letters = [
        {
            title: "The Fire & The Ache",
            content: `"My Dearest Lun,

      It’s been a year and 3 months, and you are still the only thing that makes sense in this chaotic world. I know I’m not easy. I know I have a darkness in me—the anger that flares up, the sharp words that leave scars I never meant to inflict. I’ve left you broken too many times, and the guilt of that eats me alive.

      But God, the way you stay. The way you look past the jagged edges of my temper and see the boy who just wants to be loved by you. You’ve seen my demons, and instead of running, you held them. You didn’t just tolerate my madness; you calmed it.

      I know you feel unseen lately. I know the distance makes us feel like ghosts to each other sometimes. But don't you dare think for a second that my fire for you has burned out. It’s raging, Lun. It burns when I think of the way we devoured each other—how we didn't just touch, we consumed. The way I wanted to eat every inch of you, and you of me. That hunger? It never left. It just hurts more now that I can't reach you.

      I am sorry for the fights. I am sorry for the nights I let you go to sleep feeling less than the goddess you are. But know this: even in my silence, even in my stupidity, I am obsessed with you."`
        },
        {
            title: "The Distance & The Dreams",
            content: `"My Beautiful Girl,

      Do you remember the feeling of your head on my chest? The way the world just stopped when you fell asleep in my arms, and I fell asleep on your lap? That safety. That peace. That is what I am fighting for every single day.

      I hate this distance. I hate that I can't wipe your tears when I'm the reason they fall. I hate that I can't just pull you close and let my actions speak louder than my clumsy words. You’ve supported me through my lowest lows this year—when I was drowning in anxiety, stress, and feeling worthy of nothing—you were my anchor. You didn't complain. You just loved me.

      You are my precious asset. My ONLY asset. The way you call me 'Bebo'… it disarms me. It lights up the darkest rooms of my mind. You are proud to be mine, even when I have nothing in my pockets, even when I felt like a failure. You saw a king in a beggar, and for that, I will spend the rest of my life trying to give you the kingdom you deserve.

      I miss your yapping. I miss your yelling. I miss your childishness that drives me crazy in the best way possible. I miss YOU."`
        },
        {
            title: "The Promise of Forever",
            content: `"To My Future Wife,

      Yes, I said it. Wife. Because that is the only ending this story is allowed to have. 
      
      I have a list, Lun. A to-do list for my life. And at the very top, written in permanent ink, is: 'Marry Her.'
      I want the messy mornings. I want the arguments about what to eat. I want the family we talk about.

      I know I haven't been the perfect boyfriend. I've given you a hundred reasons to leave, and yet, here you are. Standing by my side. Loyal. Honest. Better than anyone I have ever met. You never made me jealous, you never made me doubt. You just loved.

      So here is my vow to you, written on purely digital paper but etched in my soul:
      I will ride that bike for you. We will go to every place we whispered about in the dark.
      I will work until I can give you everything.
      I will learn to control this anger, because you deserve peace.
      
      I love you. Darkly, softly, completely.
      Always and forever,
      Your Bebo"`
        }
    ];

    const nextLetter = () => setCurrentLetter((prev) => (prev + 1) % letters.length);
    const prevLetter = () => setCurrentLetter((prev) => (prev - 1 + letters.length) % letters.length);

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.title}
            >
                Love Letters
            </motion.h1>

            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="envelope"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        className={styles.envelopeContainer}
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card className="flex flex-col items-center justify-center p-12 cursor-pointer bg-[var(--color-navy-dark)] border-2 border-[var(--color-champagne-gold)]">
                            <Mail size={64} className="text-[var(--color-champagne-gold)] mb-4" />
                            <p className="text-[var(--color-champagne-gold)] font-serif italic text-xl">For My Dearest Lun</p>
                            <p className="text-white/50 text-sm mt-4 uppercase tracking-widest">Click to Open</p>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        key="letter-view"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-2xl relative"
                    >
                        <div className="flex justify-between items-center mb-4 text-[var(--color-champagne-gold)]">
                            <button onClick={prevLetter} className="hover:text-white transition-colors">&larr; Prev</button>
                            <span className="text-sm uppercase tracking-widest">{letters[currentLetter].title}</span>
                            <button onClick={nextLetter} className="hover:text-white transition-colors">Next &rarr;</button>
                        </div>

                        <motion.div
                            key={currentLetter}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={styles.letterContent}
                        >
                            <p className="whitespace-pre-line leading-relaxed">{letters[currentLetter].content}</p>
                        </motion.div>

                        <div className="mt-8 text-center">
                            <Button onClick={() => setIsOpen(false)} variant="outline">
                                <ArrowLeft size={16} className="mr-2" />
                                Close Letters
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
