import { ScrollView, StyleSheet, View } from 'react-native';
import StreakCard from '@/src/components/StreakCard';
import { ThemedText } from '@/components/themed-text';
import { ICON_THEMES } from '@/src/config/iconThemes';

const SAMPLE_HABITS = [
  {
    id: '1',
    habitName: 'Quit Smoking',
    habitIcon: 'noSmoking',
    currentStreak: 12,
    bestStreak: 28,
    status: 'pending',
  },
  {
    id: '2',
    habitName: 'Less Social Media',
    habitIcon: 'phone',
    currentStreak: 5,
    bestStreak: 22,
    status: 'completed',
  },
  {
    id: '3',
    habitName: 'No Junk Food',
    habitIcon: 'food',
    currentStreak: 0,
    bestStreak: 45,
    status: 'broken',
  },
];

export default function StreaksScreen() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <ThemedText style={styles.headerIcon}>📋</ThemedText>
            <ThemedText style={[styles.headerTitle, { color: '#a8e6cf' }]}>HABIT </ThemedText>
            <ThemedText style={[styles.headerTitle, { color: '#ffd3b6' }]}>STREAKS</ThemedText>
          </View>
          <ThemedText style={styles.settingsIcon}>⚙️</ThemedText>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
          {SAMPLE_HABITS.map((habit) => (
              <StreakCard
                  key={habit.id}
                  streak={habit}
                  iconTheme={ICON_THEMES.UNICODE}
              />
          ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#667eea',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 32,
    marginRight: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '900',  // Changed from '800' to '900' - maximum boldness
    textTransform: 'uppercase',
    letterSpacing: 1.5,  // Changed from 1 to 1.5 - more spacing
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  settingsIcon: {
    fontSize: 24,  // Changed from 20 to 24
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});