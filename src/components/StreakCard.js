import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ThemedIcon from './ThemedIcon';
import { COLORS } from '../constants/colors';
import { ICON_THEMES } from '../config/iconThemes';

// Add onView to props
const StreakCard = ({ streak, iconTheme = ICON_THEMES.UNICODE, onView }) => {
    const getBorderColor = () => {
        if (streak.status === 'pending') return COLORS.pending;
        if (streak.status === 'completed') return COLORS.success;
        if (streak.status === 'broken') return COLORS.broken;
        return COLORS.border;
    };

    const getBackgroundColor = () => {
        if (streak.status === 'pending') return '#f8fbff';
        if (streak.status === 'completed') return '#f8fff8';
        if (streak.status === 'broken') return '#fef8f8';
        return COLORS.white;
    };

    const getStatusIcon = () => {
        if (streak.status === 'pending') return 'pending';
        if (streak.status === 'completed') return 'success';
        if (streak.status === 'broken') return 'broken';
        return null;
    };

    return (
        <View style={[
            styles.card,
            {
                borderColor: getBorderColor(),
                backgroundColor: getBackgroundColor()
            }
        ]}>
            {/* Status Badge */}
            {getStatusIcon() && (
                <View style={styles.statusBadge}>
                    <ThemedIcon
                        iconKey={getStatusIcon()}
                        theme={iconTheme}
                        size={36}
                    />
                </View>
            )}

            {/* Habit Title */}
            <View style={styles.titleRow}>
                <ThemedIcon
                    iconKey={streak.habitIcon}
                    theme={iconTheme}
                    size={28}
                />
                <Text style={styles.title}>{streak.habitName}</Text>
            </View>

            {/* Streak Meta Info */}
            <View style={styles.metaRow}>
                <Text style={styles.metaText}>Current: {streak.currentStreak} days</Text>
                <Text style={styles.metaText}>Best: {streak.bestStreak} days</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actions}>
                <TouchableOpacity
                    style={[styles.successBtn, streak.status === 'completed' && styles.disabledBtn]}
                    disabled={streak.status === 'completed'}
                >
                    <ThemedIcon iconKey="thumbsUp" theme={iconTheme} size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.failureBtn, streak.status === 'completed' && styles.disabledBtn]}
                    disabled={streak.status === 'completed'}
                >
                    <ThemedIcon iconKey="thumbsDown" theme={iconTheme} size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewBtn} onPress={onView}>
                    <Text style={styles.viewBtnIcon}>👁</Text>
                    <Text style={styles.viewBtnText}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        position: 'relative',
    },
    statusBadge: {
        position: 'absolute',
        top: -12,
        right: -12,
        zIndex: 20,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    metaText: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    successBtn: {
        width: 44,
        height: 44,
        backgroundColor: COLORS.success,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    failureBtn: {
        width: 44,
        height: 44,
        backgroundColor: COLORS.broken,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    viewBtn: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: COLORS.blue,
        borderRadius: 8,
        marginLeft: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
        flexDirection: 'row',  // ADD THIS
        alignItems: 'center',   // ADD THIS
        justifyContent: 'center', // ADD THIS
        gap: 6,                 // ADD THIS
    },
    viewBtnIcon: {          // ADD THIS WHOLE STYLE
        fontSize: 18,
        color: COLORS.white,
    },
    viewBtnText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
    },
    disabledBtn: {
        opacity: 0.50,
    },
});

export default StreakCard;