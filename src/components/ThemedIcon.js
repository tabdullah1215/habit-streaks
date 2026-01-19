import React from 'react';
import { Text } from 'react-native';
import { ICON_MAPS } from '../config/iconThemes';

const ThemedIcon = ({ iconKey, theme, size = 24, color, style }) => {
    const iconConfig = ICON_MAPS[iconKey];

    if (!iconConfig) return null;

    // For unicode theme, just render the emoji
    if (theme === 'unicode') {
        return (
            <Text style={[{ fontSize: size, color }, style]}>
                {iconConfig.unicode}
            </Text>
        );
    }

    // For expo/react themes, would need icon libraries installed
    // For now, fallback to unicode
    return (
        <Text style={[{ fontSize: size, color }, style]}>
            {iconConfig.unicode}
        </Text>
    );
};

export default ThemedIcon;