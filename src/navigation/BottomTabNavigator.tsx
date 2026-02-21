import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../screens/Dashboard/DashboardScreen';
import { View, Text, StyleSheet } from 'react-native';
import { Home, BarChart2, Briefcase, User, Repeat } from 'lucide-react-native';
import { Colors, Spacing } from '../theme/theme';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = ({ name }: { name: string }) => (
    <View style={styles.container}>
        <Text>{name}</Text>
    </View>
);

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.gray,
                tabBarStyle: {
                    paddingTop: Spacing.sm,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Markets"
                component={() => <PlaceholderScreen name="Markets" />}
                options={{
                    tabBarIcon: ({ color, size }) => <BarChart2 color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Trade"
                component={() => <PlaceholderScreen name="Trade" />}
                options={{
                    tabBarIcon: ({ color, size }) => <Repeat color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={() => <PlaceholderScreen name="Portfolio" />}
                options={{
                    tabBarIcon: ({ color, size }) => <Briefcase color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={() => <PlaceholderScreen name="Profile" />}
                options={{
                    tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
});
