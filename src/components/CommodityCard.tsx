import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SparklineChart } from './SparklineChart';
import { FontSize, Spacing } from '../theme/theme';

interface CommodityCardProps {
    icon: string;
    name: string;
    price: string;
    change: string;
    isUp: boolean;
    sparkData: number[];
    isActive?: boolean;
    onPress?: () => void;
}

/**
 * CommodityCard — The individual commodity tile shown in the Trending section.
 * Shows: icon → name → price → change badge → sparkline chart.
 */
export const CommodityCard: React.FC<CommodityCardProps> = ({
    icon,
    name,
    price,
    change,
    isUp,
    sparkData,
    isActive = false,
    onPress,
}) => {
    const sparkColor = isUp ? '#28A745' : '#DC3545';
    const changeColor = isUp ? '#28A745' : '#DC3545';

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            style={[styles.card, isActive && styles.activeCard]}
        >
            {/* Commodity icon */}
            <View style={[styles.iconWrapper, isActive && styles.activeIconWrapper]}>
                <Text style={styles.icon}>{icon}</Text>
            </View>

            {/* Name */}
            <Text style={styles.name}>{name}</Text>

            {/* Price */}
            <Text style={styles.price}>₹{price}</Text>

            {/* Change */}
            <View style={styles.changeRow}>
                <Text style={[styles.changeArrow, { color: changeColor }]}>
                    {isUp ? '↑' : '↓'}
                </Text>
                <Text style={[styles.change, { color: changeColor }]}>{change}</Text>
            </View>

            {/* Sparkline */}
            <View style={styles.sparklineWrapper}>
                <SparklineChart data={sparkData} color={sparkColor} width={105} height={40} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 126,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: Spacing.sm + 2,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 6,
        elevation: 3,
        borderWidth: 1.5,
        borderColor: '#EFEFEF',
    },
    activeCard: {
        borderColor: '#4A90E2',
        shadowColor: '#4A90E2',
        shadowOpacity: 0.18,
        shadowRadius: 10,
        elevation: 6,
    },
    iconWrapper: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: '#EFF4FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
    },
    activeIconWrapper: {
        backgroundColor: '#DDEAFF',
    },
    icon: {
        fontSize: 18,
    },
    name: {
        fontSize: FontSize.xs,
        color: '#6C757D',
        fontWeight: '500',
        marginBottom: 2,
    },
    price: {
        fontSize: FontSize.md,
        fontWeight: '700',
        color: '#1A1A2E',
        marginBottom: 2,
    },
    changeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    changeArrow: {
        fontSize: 12,
        fontWeight: '700',
        marginRight: 2,
    },
    change: {
        fontSize: FontSize.xs,
        fontWeight: '600',
    },
    sparklineWrapper: {
        marginTop: 2,
        marginLeft: -4,
        overflow: 'hidden',
    },
});
