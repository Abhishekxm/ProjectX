import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const PanDetailsScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [pan, setPan] = useState('');

    const handleContinue = () => {
        navigation.navigate('KycProcessing');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Header title="Identity Verification" onBack={() => navigation.goBack()} />
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>Enter your PAN</Text>
                        <Text style={styles.subtitle}>
                            Your PAN is required for opening a Demat account as per SEBI regulations.
                        </Text>

                        <View style={styles.inputContainer}>
                            <Input
                                label="PAN Number"
                                placeholder="ABCDE1234F"
                                value={pan}
                                onChangeText={(text) => setPan(text.toUpperCase())}
                                maxLength={10}
                                autoCapitalize="characters"
                            />
                        </View>
                    </View>

                    <Button
                        title="Continue"
                        onPress={handleContinue}
                        disabled={pan.length !== 10}
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
