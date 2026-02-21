import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { FontSize, Spacing } from '../theme/theme';

interface CategoryPillProps {
    label: string;
    icon: string;
    bgColor: string;
    textColor?: string;
    onPress?: () => void;
    style?: ViewStyle;
}

/**
 * CategoryPill — Rounded pastel pill badge with an icon + label.
 * Used in the Categories section of the CommoditiesTab.
 */
export const CategoryPill: React.FC<CategoryPillProps> = ({
    label,
    icon,
    bgColor,
    textColor = '#333333',
    onPress,
    style,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={onPress}
            style={[styles.pill, { backgroundColor: bgColor }, style]}
        >
            <Text style={styles.icon}>{icon}</Text>
            <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pill: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        borderRadius: 24,
        marginRight: Spacing.sm,
    },
    icon: {
        fontSize: 16,
        marginRight: 6,
    },
    label: {
        fontSize: FontSize.sm,
        fontWeight: '600',
    },
});
