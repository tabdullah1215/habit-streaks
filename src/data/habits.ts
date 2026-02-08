export type Habit = {
    id: string;
    habitName: string;
    habitIcon: string;
    currentStreak: number;
    bestStreak: number;
    status: 'pending' | 'completed' | 'broken';
    successRate: number;
    lifelinesRemaining: number;
    daysTillNextReward: number;
};

export const SAMPLE_HABITS: Habit[] = [
    {
        id: '1',
        habitName: 'Quit Smoking',
        habitIcon: 'noSmoking',
        currentStreak: 12,
        bestStreak: 28,
        status: 'pending',
        successRate: 85,
        lifelinesRemaining: 3,
        daysTillNextReward: 18,
    },
    {
        id: '2',
        habitName: 'Less Social Media',
        habitIcon: 'phone',
        currentStreak: 5,
        bestStreak: 22,
        status: 'completed',
        successRate: 72,
        lifelinesRemaining: 5,
        daysTillNextReward: 10,
    },
    {
        id: '3',
        habitName: 'No Junk Food',
        habitIcon: 'food',
        currentStreak: 0,
        bestStreak: 45,
        status: 'broken',
        successRate: 60,
        lifelinesRemaining: 1,
        daysTillNextReward: 30,
    },
];