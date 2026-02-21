import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const EmailVerificationScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [email, setEmail] = useState('');

    const handleContinue = () => {
        // Navigate to OTP or next screen
        navigation.navigate('PhoneOTPVerification');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Header title="" onBack={() => navigation.goBack()} />
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>What's your email?</Text>
                        <Text style={styles.subtitle}>
                            We'll send you a verification code to confirm your email address.
                        </Text>

                        <View style={styles.inputContainer}>
                            <Input
                                label="Email Address"
                                placeholder="name@example.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                                autoFocus
                            />
                        </View>
                    </View>

                    <Button
                        title="Continue"
                        onPress={handleContinue}
                        disabled={!email.includes('@')}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
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
    title: {
        fontSize: FontSize.xl,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: Spacing.sm,
    },
    subtitle: {
        fontSize: FontSize.md,
        color: Colors.gray,
        marginBottom: Spacing.xl,
    },
    inputContainer: {
        marginTop: Spacing.md,
    },
});
