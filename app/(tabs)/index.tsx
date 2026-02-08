import { ScrollView, StyleSheet, View, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import StreakCard from '@/src/components/StreakCard';
import { ThemedText } from '@/components/themed-text';
import { ICON_THEMES } from '@/src/config/iconThemes';
import { SAMPLE_HABITS } from '../../src/data/habits';


export default function StreaksScreen() {
  const router = useRouter();

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
                  onView={() => router.push(`/habit/${habit.id}`)}
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
    fontSize: 28,
    marginRight: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',  // Changed from '800' to '900' - maximum boldness
    textTransform: 'uppercase',
    letterSpacing: 1,  // Changed from 1 to 1.5 - more spacing
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    fontFamily: Platform.select({
      ios: 'System',       // iOS system font at 900 is VERY chunky
      android: 'sans-serif-black',  // Android's heaviest weight
      default: 'System',
    }),
  },
  settingsIcon: {
    fontSize: 20,
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