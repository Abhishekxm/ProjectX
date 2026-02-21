import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Spacing, FontSize } from '../theme/theme';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
    style,
    textStyle,
}) => {
    const getBackgroundColor = () => {
        if (disabled) return Colors.grayLight;
        switch (variant) {
            case 'primary': return Colors.primary;
            case 'secondary': return Colors.secondary;
            case 'outline': return 'transparent';
            case 'ghost': return 'transparent';
            default: return Colors.primary;
        }
    };

    const getTextColor = () => {
        if (disabled) return Colors.gray;
        switch (variant) {
            case 'primary': return Colors.white;
            case 'secondary': return Colors.white;
            case 'outline': return Colors.primary;
            case 'ghost': return Colors.primary;
            default: return Colors.white;
        }
    };

    const getBorderWidth = () => {
        if (variant === 'outline') return 1;
        return 0;
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: getBackgroundColor(),
                    borderColor: Colors.primary,
                    borderWidth: getBorderWidth(),
                },
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        borderRadius: Spacing.sm,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
    },
    text: {
        fontSize: FontSize.md,
        fontWeight: '600',
    },
});
