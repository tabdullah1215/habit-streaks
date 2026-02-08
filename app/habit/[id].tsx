import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ThemedIcon from '@/src/components/ThemedIcon';
import { ICON_THEMES } from '@/src/config/iconThemes';
import { SAMPLE_HABITS } from '@/src/data/habits';

const STATS_CONFIG = [
    { icon: 'trophy', key: 'bestStreak', label: 'Longest Streak', format: (v: number) => `${v}` },
    { icon: 'stats', key: 'successRate', label: 'Success Rate', format: (v: number) => `${v}%` },
    { icon: 'lifelines', key: 'lifelinesRemaining', label: 'Life Lines Remaining', format: (v: number) => `${v}` },
    { icon: 'gift', key: 'daysTillNextReward', label: 'Days Till Next Reward', format: (v: number) => `${v}` },
] as const;

export default function HabitDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const habit = SAMPLE_HABITS.find((h) => h.id === id);

    if (!habit) {
        return (
            <View style={styles.container}>
                <Text style={styles.notFound}>Habit not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* ── Header ── */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.navIcon} onPress={() => router.back()}>
                    <Text style={styles.navIconText}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <ThemedIcon iconKey={habit.habitIcon} theme={ICON_THEMES.UNICODE} size={28} />
                    <Text style={styles.headerTitle}>{habit.habitName}</Text>
                </View>
                <TouchableOpacity style={styles.navIcon}>
                    <Text style={styles.navIconText}>⋯</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
                {/* ── Streak Display ── */}
                <View style={styles.streakDisplay}>
                    <TouchableOpacity style={[styles.streakBtn, styles.streakBtnLeft]}>
                        <Text style={styles.streakBtnText}>📅</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.streakBtn, styles.streakBtnRight]}>
                        <Text style={styles.streakBtnText}>⋯</Text>
                    </TouchableOpacity>
                    <Text style={styles.streakIcon}>🔥</Text>
                    <Text style={styles.streakTitle}>CURRENT STREAK</Text>
                    <Text style={styles.streakNumber}>{habit.currentStreak}</Text>
                    <Text style={styles.streakLabel}>days</Text>
                </View>

                {/* ── Action Buttons ── */}
                <View style={styles.actionRow}>
                    <TouchableOpacity activeOpacity={0.85}>
                        <View style={[styles.actionBtn, styles.successBtn]}>
                            <Text style={styles.actionEmoji}>👍</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.85}>
                        <View style={[styles.actionBtn, styles.failureBtn]}>
                            <Text style={styles.actionEmoji}>👎</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* ── Stats Grid ── */}
                <View style={styles.statsGrid}>
                    {STATS_CONFIG.map((stat) => (
                        <View key={stat.key} style={styles.statCardWrapper}>
                            <View style={styles.statCard}>
                                <Text style={styles.statNumber}>
                                    {stat.format(habit[stat.key] as number)}
                                </Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                            <View style={styles.statIconBadge}>
                                <ThemedIcon iconKey={stat.icon} theme={ICON_THEMES.UNICODE} size={32} />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
    },
    notFound: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
        marginTop: 100,
    },

    /* ── Header ── */
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#667eea',
        shadowColor: '#667eea',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 8,
    },
    navIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    navIconText: {
        fontSize: 20,
        color: '#fff',
    },
    headerCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },

    /* ── Scroll ── */
    scroll: { flex: 1 },
    content: { padding: 20 },

    /* ── Streak Display ── */
    streakDisplay: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: '#e8f0fe',
        shadowColor: '#667eea',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'rgba(102,126,234,0.1)',
        position: 'relative',
    },
    streakBtn: {
        position: 'absolute',
        top: 8,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(94,53,177,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    streakBtnLeft: { left: 8 },
    streakBtnRight: { right: 8 },
    streakBtnText: {
        fontSize: 16,
        color: '#5e35b1',
    },
    streakIcon: {
        fontSize: 28,
        marginBottom: 8,
    },
    streakTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#5e35b1',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 6,
    },
    streakNumber: {
        fontSize: 40,
        fontWeight: '700',
        color: '#4527a0',
    },
    streakLabel: {
        fontSize: 16,
        color: '#6a4c93',
        fontWeight: '500',
        marginTop: 4,
    },

    /* ── Action Buttons ── */
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        marginVertical: 30,
    },
    actionBtn: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 8,
    },
    successBtn: {
        backgroundColor: '#27ae60',
    },
    failureBtn: {
        backgroundColor: '#e74c3c',
    },
    actionEmoji: {
        fontSize: 32,
    },

    /* ── Stats Grid ── */
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    statCardWrapper: {
        width: '48%',
        position: 'relative',
        marginBottom: 8,
    },
    statCard: {
        backgroundColor: '#ecf0f1',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
    },
    statIconBadge: {
        position: 'absolute',
        top: -12,
        right: -12,
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2c3e50',
    },
    statLabel: {
        fontSize: 11,
        color: '#7f8c8d',
        marginTop: 2,
        textAlign: 'center',
    },
});