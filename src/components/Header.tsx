import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Spacing, FontSize } from '../theme/theme';
import { ChevronLeft } from 'lucide-react-native';

interface HeaderProps {
    title: string;
    onBack?: () => void;
    rightElement?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack, rightElement }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {onBack && (
                    <TouchableOpacity onPress={onBack} style={styles.backButton}>
                        <ChevronLeft size={24} color={Colors.text} />
                    </TouchableOpacity>
                )}
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rightContainer}>
                {rightElement}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    leftContainer: {
        width: 40,
        alignItems: 'flex-start',
    },
    rightContainer: {
        width: 40,
        alignItems: 'flex-end',
    },
    backButton: {
        padding: Spacing.xs,
    },
    title: {
        fontSize: FontSize.lg,
        fontWeight: '600',
        color: Colors.text,
    },
});
