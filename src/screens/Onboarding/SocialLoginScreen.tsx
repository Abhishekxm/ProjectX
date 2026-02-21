import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const SocialLoginScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleEmailLogin = () => {
        navigation.navigate('EmailVerification');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Start your</Text>
                    <Text style={styles.titleHighlight}>financial journey</Text>
                    <Text style={styles.subtitle}>
                        Invest in Stocks, Mutual Funds, and more with zero commission.
                    </Text>
                </View>

                <View style={styles.illustration}>
                    {/* Placeholder for illustration */}
                    <View style={styles.placeholderImage} />
                </View>

                <View style={styles.buttons}>
                    <Button
                        title="Continue with Google"
                        onPress={() => { }}
                        variant="outline"
                        style={styles.socialButton}
                    />
                    <Button
                        title="Continue with Apple"
                        onPress={() => { }}
                        variant="outline"
                        style={styles.socialButton}
                    />
                    <Button
                        title="Continue with Email"
                        onPress={handleEmailLogin}
                        variant="primary"
                    />
                </View>

                <Text style={styles.terms}>
                    By continuing, you agree to our Terms & Conditions and Privacy Policy.
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        padding: Spacing.lg,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: Spacing.xl,
    },
    title: {
        fontSize: FontSize.xxl,
        fontWeight: 'bold',
        color: Colors.text,
    },
    titleHighlight: {
        fontSize: FontSize.xxl,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    subtitle: {
        marginTop: Spacing.md,
        fontSize: FontSize.md,
        color: Colors.gray,
        lineHeight: 24,
    },
    illustration: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderImage: {
        width: 200,
        height: 200,
        backgroundColor: Colors.light,
        borderRadius: 100,
    },
    buttons: {
        gap: Spacing.md,
    },
    socialButton: {
        borderColor: Colors.border,
    },
    terms: {
        marginTop: Spacing.lg,
        fontSize: FontSize.xs,
        color: Colors.gray,
        textAlign: 'center',
    },
});
