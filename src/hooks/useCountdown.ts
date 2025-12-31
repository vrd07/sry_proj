import { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

export function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState(() => {
        const diff = Math.max(0, differenceInSeconds(targetDate, new Date()));
        return diff;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const diff = Math.max(0, differenceInSeconds(targetDate, new Date()));
            setTimeLeft(diff);
            if (diff <= 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return { total: timeLeft, days, hours, minutes, seconds };
}
