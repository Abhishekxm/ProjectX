import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { useNavigation, CommonActions } from '@react-navigation/native';

export const KycProcessingScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Simulate API call and redirect to Dashboard
        const timer = setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Dashboard' },
                    ],
                })
            );
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={styles.title}>Verifying your details...</Text>
            <Text style={styles.subtitle}>This usually takes less than a minute</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.xl,
    },
    title: {
        marginTop: Spacing.lg,
        fontSize: FontSize.lg,
        fontWeight: '600',
        color: Colors.text,
    },
    subtitle: {
        marginTop: Spacing.sm,
        fontSize: FontSize.md,
        color: Colors.gray,
    },
});
