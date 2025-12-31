import React, { createContext, useContext, useState, useEffect } from 'react';

interface SanctuaryState {
    unlockedRooms: string[];
    isNewYearUnlocked: boolean;
    addUnlockedRoom: (roomId: string) => void;
    unlockNewYear: () => void;
}

const SanctuaryContext = createContext<SanctuaryState | undefined>(undefined);

export function SanctuaryProvider({ children }: { children: React.ReactNode }) {
    const [unlockedRooms, setUnlockedRooms] = useState<string[]>(() => {
        const saved = localStorage.getItem('unlockedRooms');
        return saved ? JSON.parse(saved) : [];
    });

    const [isNewYearUnlocked, setIsNewYearUnlocked] = useState<boolean>(() => {
        const saved = localStorage.getItem('isNewYearUnlocked');
        const now = new Date();
        // Unlock if it's Dec 31st 2025 or later
        const isLateEnough = now.getFullYear() > 2025 || (now.getFullYear() === 2025 && now.getMonth() === 11 && now.getDate() >= 31);
        return saved === 'true' || isLateEnough;
    });

    useEffect(() => {
        localStorage.setItem('unlockedRooms', JSON.stringify(unlockedRooms));
    }, [unlockedRooms]);

    useEffect(() => {
        localStorage.setItem('isNewYearUnlocked', String(isNewYearUnlocked));
    }, [isNewYearUnlocked]);

    const addUnlockedRoom = (roomId: string) => {
        if (!unlockedRooms.includes(roomId)) {
            setUnlockedRooms(prev => [...prev, roomId]);
        }
    };

    const unlockNewYear = () => setIsNewYearUnlocked(true);

    return (
        <SanctuaryContext.Provider value={{ unlockedRooms, isNewYearUnlocked, addUnlockedRoom, unlockNewYear }}>
            {children}
        </SanctuaryContext.Provider>
    );
}

export function useSanctuary() {
    const context = useContext(SanctuaryContext);
    if (context === undefined) {
        throw new Error('useSanctuary must be used within a SanctuaryProvider');
    }
    return context;
}
