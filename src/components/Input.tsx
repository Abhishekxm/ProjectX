import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import { Colors, Spacing, FontSize } from '../theme/theme';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[
                    styles.input,
                    error ? styles.inputError : null,
                    style,
                ]}
                placeholderTextColor={Colors.gray}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.md,
    },
    label: {
        fontSize: FontSize.sm,
        fontWeight: '500',
        color: Colors.text,
        marginBottom: Spacing.xs,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: Spacing.sm,
        padding: Spacing.md,
        fontSize: FontSize.md,
        color: Colors.text,
        backgroundColor: Colors.white,
    },
    inputError: {
        borderColor: Colors.danger,
    },
    errorText: {
        color: Colors.danger,
        fontSize: FontSize.xs,
        marginTop: Spacing.xs,
    },
});
