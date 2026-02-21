import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Lock } from 'lucide-react-native';
import { FontSize, Spacing } from '../theme/theme';

interface LockedCardProps {
    label: string;
    icon: string;
    style?: ViewStyle;
}

/**
 * LockedCard — A greyed-out card with a lock badge overlay.
 * Represents features in the "Coming Soon" section.
 */
export const LockedCard: React.FC<LockedCardProps> = ({ label, icon, style }) => {
    return (
        <View style={[styles.card, style]}>
            {/* Lock badge — top-right */}
            <View style={styles.lockBadge}>
                <Lock size={10} color="#666" />
            </View>

            {/* Content */}
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 90,
        height: 90,
        backgroundColor: '#F2F4F7',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.sm,
        position: 'relative',
    },
    lockBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        padding: 3,
    },
    icon: {
        fontSize: 24,
        marginBottom: 4,
        opacity: 0.5,
    },
    label: {
        fontSize: FontSize.xs,
        color: '#888888',
        textAlign: 'center',
        paddingHorizontal: 4,
        fontWeight: '500',
    },
});
