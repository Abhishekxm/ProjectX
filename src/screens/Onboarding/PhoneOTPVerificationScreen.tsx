import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const PhoneOTPVerificationScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleVerify = () => {
        navigation.navigate('SetPin');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Header title="" onBack={() => navigation.goBack()} />
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>Verify your mobile</Text>
                        <Text style={styles.subtitle}>
                            Enter the OTP sent to +91 98765 43210
                        </Text>

                        <View style={styles.inputContainer}>
                            <Input
                                label="OTP"
                                placeholder="123456"
                                keyboardType="number-pad"
                                maxLength={6}
                                value={otp}
                                onChangeText={setOtp}
                                autoFocus
                                style={styles.otpInput}
                            />
                        </View>

                        <View style={styles.resendContainer}>
                            <Text style={styles.resendText}>Didn't receive code? </Text>
                            {timer > 0 ? (
                                <Text style={styles.timerText}>Resend in {timer}s</Text>
                            ) : (
                                <TouchableOpacity onPress={() => setTimer(30)}>
                                    <Text style={styles.resendLink}>Resend Now</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    <Button
                        title="Verify & Continue"
                        onPress={handleVerify}
                        disabled={otp.length < 6}
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
    otpInput: {
        letterSpacing: 8,
        textAlign: 'center',
        fontSize: 24,
    },
    resendContainer: {
        flexDirection: 'row',
        marginTop: Spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resendText: {
        color: Colors.gray,
    },
    timerText: {
        color: Colors.gray,
        fontWeight: '600',
    },
    resendLink: {
        color: Colors.primary,
        fontWeight: '600',
    },
});
