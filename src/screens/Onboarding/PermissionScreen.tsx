import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Button } from '../../components/Button';
import { MapPin, MessageSquare, Phone } from 'lucide-react-native';

interface PermissionParams {
    type: 'location' | 'sms' | 'phone';
    onNext: () => void;
    onSkip?: () => void;
}

export const PermissionScreen: React.FC<{
    route: { params: PermissionParams };
    navigation: any;
}> = ({ route, navigation }) => {
    const { type } = route.params || {};

    const handleNext = () => {
        if (type === 'location') navigation.navigate('SMSPermission');
        if (type === 'sms') navigation.navigate('PhonePermission');
        if (type === 'phone') navigation.navigate('PanDetails');
    };

    const handleSkip = () => {
        if (type === 'phone') navigation.navigate('PanDetails');
    };
    // Content configuration based on type
    const config = {
        location: {
            icon: <MapPin size={48} color={Colors.primary} />,
            title: 'Enable Location',
            subtitle: 'We need your location to verify your residency in India for regulatory compliance.',
            buttonText: 'Allow Location Access',
        },
        sms: {
            icon: <MessageSquare size={48} color={Colors.primary} />,
            title: 'SMS Permission',
            subtitle: 'We need SMS access to verify your device securely via SIM binding.',
            buttonText: 'Allow SMS Access',
        },
        phone: {
            icon: <Phone size={48} color={Colors.primary} />,
            title: 'Phone Permission',
            subtitle: 'Allow us to make and manage phone calls for customer support and verification.',
            buttonText: 'Allow Phone Access',
            skippable: true
        }
    }[type || 'location'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconCircle}>
                        {config.icon}
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{config.title}</Text>
                    <Text style={styles.subtitle}>{config.subtitle}</Text>
                </View>

                <View style={styles.footer}>
                    <Button
                        title={config.buttonText}
                        onPress={handleNext}
                        style={styles.button}
                    />
                    {config.skippable && (
                        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                            <Text style={styles.skipText}>Skip for now</Text>
                        </TouchableOpacity>
                    )}
                </View>
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
        padding: Spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        marginBottom: Spacing.xl,
    },
    iconCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: Spacing.xxl,
    },
    title: {
        fontSize: FontSize.xl,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: Spacing.md,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: FontSize.md,
        color: Colors.gray,
        textAlign: 'center',
        lineHeight: 24,
    },
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: Spacing.xxl,
    },
    button: {
        marginBottom: Spacing.md
    },
    skipButton: {
        alignItems: 'center',
        padding: Spacing.sm
    },
    skipText: {
        color: Colors.gray,
        fontSize: FontSize.md
    }
});
