import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export function FireworksAnimation() {
    useEffect(() => {
        // Firework burst duration
        const duration = 15 * 1000;
        // or run forever if we want, but duration is better for performance
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#FFD700', '#F7E7CE', '#C0C0C0', '#B76E79']
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#FFD700', '#F7E7CE', '#C0C0C0', '#4B0082']
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return null;
}
