import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View as AnimatableView } from 'react-native'; // Using View as placeholder for animation

export const SetPinScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [step, setStep] = useState<'create' | 'confirm'>('create');

    const handlePinPress = (num: string) => {
        if (step === 'create') {
            if (pin.length < 4) setPin(prev => prev + num);
            if (pin.length + 1 === 4) {
                setTimeout(() => setStep('confirm'), 300);
            }
        } else {
            if (confirmPin.length < 4) setConfirmPin(prev => prev + num);
        }
    };

    const handleDelete = () => {
        if (step === 'create') {
            setPin(prev => prev.slice(0, -1));
        } else {
            setConfirmPin(prev => prev.slice(0, -1));
        }
    };

    const handleContinue = () => {
        if (pin === confirmPin) {
            navigation.navigate('LocationPermission');
        } else {
            // Reset confirm if mismatch
            setConfirmPin('');
            Alert.alert('Error', "PINs don't match");
        }
    };

    const renderDot = (filled: boolean) => (
        <View style={[styles.dot, filled && styles.dotFilled]} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header title="" onBack={() => {
                if (step === 'confirm') {
                    setStep('create');
                    setConfirmPin('');
                } else {
                    navigation.goBack();
                }
            }} />
            <View style={styles.content}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>
                        {step === 'create' ? 'Set a 4-digit PIN' : 'Confirm your PIN'}
                    </Text>
                    <Text style={styles.subtitle}>
                        To keep your account secure
                    </Text>

                    <View style={styles.dotsContainer}>
                        {[0, 1, 2, 3].map(i => renderDot(
                            (step === 'create' ? pin.length : confirmPin.length) > i
                        ))}
                    </View>
                </View>

                <View style={styles.keypad}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <TouchableWithoutFeedback key={num} onPress={() => handlePinPress(num.toString())}>
                            <View style={styles.key}>
                                <Text style={styles.keyText}>{num}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                    <View style={styles.key} />
                    <TouchableWithoutFeedback onPress={() => handlePinPress('0')}>
                        <View style={styles.key}>
                            <Text style={styles.keyText}>0</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleDelete}>
                        <View style={styles.key}>
                            <Text style={styles.keyText}>⌫</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                {step === 'confirm' && confirmPin.length === 4 && (
                    <Button
                        title="Set PIN"
                        onPress={handleContinue}
                        style={styles.confirmButton}
                    />
                )}
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
        justifyContent: 'space-between',
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: Spacing.xl,
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
    dotsContainer: {
        flexDirection: 'row',
        gap: Spacing.lg,
        marginTop: Spacing.lg,
    },
    dot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
    },
    dotFilled: {
        backgroundColor: Colors.primary,
    },
    keypad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: Spacing.xl,
    },
    key: {
        width: '30%',
        aspectRatio: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: {
        fontSize: 28,
        fontWeight: '500',
        color: Colors.text,
    },
    confirmButton: {
        margin: Spacing.lg,
    }
});
