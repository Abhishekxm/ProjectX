import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const SplashScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('SocialLogin');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logo} />
                <Text style={styles.title}>TradePro</Text>
            </View>
            <Text style={styles.subtitle}>Smart Trading for Everyone</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    logo: {
        width: 40,
        height: 40,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginRight: Spacing.sm,
    },
    title: {
        fontSize: FontSize.xxl,
        fontWeight: 'bold',
        color: Colors.white,
    },
    subtitle: {
        fontSize: FontSize.md,
        color: Colors.white,
        opacity: 0.8,
    },
});
