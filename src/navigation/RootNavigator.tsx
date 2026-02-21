import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../screens/Onboarding/SplashScreen';
import { SocialLoginScreen } from '../screens/Onboarding/SocialLoginScreen';
import { EmailVerificationScreen } from '../screens/Onboarding/EmailVerificationScreen';
import { PhoneOTPVerificationScreen } from '../screens/Onboarding/PhoneOTPVerificationScreen';
import { SetPinScreen } from '../screens/Onboarding/SetPinScreen';
import { PermissionScreen } from '../screens/Onboarding/PermissionScreen';
import { PanDetailsScreen } from '../screens/Onboarding/PanDetailsScreen';
import { KycProcessingScreen } from '../screens/Onboarding/KycProcessingScreen';
import { DashboardScreen } from '../screens/Dashboard/DashboardScreen';
import { BottomTabNavigator } from './BottomTabNavigator';

type RootStackParamList = {
    Splash: undefined;
    SocialLogin: undefined;
    EmailVerification: undefined;
    PhoneOTPVerification: undefined;
    SetPin: undefined;
    LocationPermission: { type: 'location'; onNext: () => void };
    SMSPermission: { type: 'sms'; onNext: () => void };
    PhonePermission: { type: 'phone'; onNext: () => void; onSkip: () => void };
    PanDetails: undefined;
    KycProcessing: undefined;
    Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="SocialLogin" component={SocialLoginScreen} />
                <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
                <Stack.Screen name="PhoneOTPVerification" component={PhoneOTPVerificationScreen} />
                <Stack.Screen name="SetPin" component={SetPinScreen} />

                <Stack.Screen
                    name="LocationPermission"
                    component={PermissionScreen}
                    initialParams={{
                        type: 'location',
                        onNext: () => { }, // Will be handled in component or navigation event
                    }}
                />
                <Stack.Screen
                    name="SMSPermission"
                    component={PermissionScreen}
                    initialParams={{ type: 'sms' }}
                />
                <Stack.Screen
                    name="PhonePermission"
                    component={PermissionScreen}
                    initialParams={{ type: 'phone' }}
                />

                <Stack.Screen name="PanDetails" component={PanDetailsScreen} />
                <Stack.Screen name="KycProcessing" component={KycProcessingScreen} />
                <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
