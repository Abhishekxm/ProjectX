import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { CommoditiesTab } from './CommoditiesTab';
import { MutualFundsTab } from './MutualFundsTab';
import { SocialBuzzTab } from './SocialBuzzTab';
import { UpiLoanTab } from './UpiLoanTab';
import { FontSize, Spacing } from '../../theme/theme';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TabItemConfig {
    name: string;
    label: string;
    icon: string;
    component: React.ComponentType<any>;
}

// ─── Tab Configuration ────────────────────────────────────────────────────────

const TABS: TabItemConfig[] = [
    { name: 'Commodities', label: 'Commodities', icon: '📦', component: CommoditiesTab },
    { name: 'MutualFunds', label: 'Mutual Funds', icon: '📈', component: MutualFundsTab },
    { name: 'SocialBuzz', label: 'Social Buzz', icon: '💬', component: SocialBuzzTab },
    { name: 'UpiLoan', label: 'UPI Loan', icon: '🏦', component: UpiLoanTab },
];

const Tab = createMaterialTopTabNavigator();

// ─── Custom Tab Bar ───────────────────────────────────────────────────────────
// We build a custom tab bar so active tab renders as a filled blue pill
// (matching the design) rather than just an underline indicator.

interface CustomTabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <View style={tabBarStyles.wrapper}>
            <View style={tabBarStyles.row}>
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const tab = TABS[index];

                    const onPress = () => {
                        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            onPress={onPress}
                            activeOpacity={0.8}
                            style={[tabBarStyles.tabItem, isFocused && tabBarStyles.activeTabItem]}
                        >
                            {/* Icon */}
                            <Text style={[tabBarStyles.tabIcon, isFocused && tabBarStyles.activeTabIcon]}>
                                {tab.icon}
                            </Text>
                            {/* Label */}
                            <Text style={[tabBarStyles.tabLabel, isFocused && tabBarStyles.activeTabLabel]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const tabBarStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
        paddingHorizontal: Spacing.md,
        paddingBottom: Spacing.sm,
        paddingTop: 4,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
    },
    tabItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.55)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.7)',
    },
    activeTabItem: {
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
    },
    tabIcon: {
        fontSize: 14,
        marginRight: 5,
    },
    activeTabIcon: {
        // emoji doesn't change color, so just bump size slightly
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4A5568',
    },
    activeTabLabel: {
        color: '#FFFFFF',
    },
});

// ─── Main Screen ──────────────────────────────────────────────────────────────

export const DashboardScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#C8DFFE" />
            <LinearGradient
                colors={['#C8DFFE', '#DDE9FF', '#EEF4FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradientContainer}
            >
                {/* ── Header ── */}
                <View style={styles.header}>
                    <View>
                        {/* Greeting */}
                        <Text style={styles.greeting}>Hi, Abhishek</Text>

                        {/* Portfolio label */}
                        <Text style={styles.portfolioLabel}>Portfolio Value</Text>

                        {/* Portfolio value */}
                        <Text style={styles.portfolioValue}>₹2,45,680</Text>

                        {/* P&L row */}
                        <View style={styles.pnlRow}>
                            <Text style={styles.pnlText}>+₹3,240 (+1.32%)</Text>
                            <Text style={styles.pnlArrow}> ↗</Text>
                        </View>
                    </View>
                </View>

                {/* ── Tab Navigator ── */}
                <View style={styles.tabContainer}>
                    <Tab.Navigator
                        tabBar={(props) => <CustomTabBar {...props} />}
                        screenOptions={{
                            // We supply our own tab bar — disable the default one
                            lazy: true,
                        }}
                    >
                        {TABS.map(tab => (
                            <Tab.Screen
                                key={tab.name}
                                name={tab.name}
                                component={tab.component}
                                options={{ title: tab.label }}
                            />
                        ))}
                    </Tab.Navigator>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#C8DFFE',   // matches gradient top color
    },
    gradientContainer: {
        flex: 1,
    },

    // Header
    header: {
        paddingHorizontal: Spacing.md + 4,
        paddingTop: Spacing.md,
        paddingBottom: Spacing.sm,
    },
    greeting: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1A1A2E',
        marginBottom: 4,
        letterSpacing: -0.5,
    },
    portfolioLabel: {
        fontSize: FontSize.sm,
        color: '#4A5568',
        marginBottom: 2,
        fontWeight: '500',
    },
    portfolioValue: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1A1A2E',
        letterSpacing: -1,
        marginBottom: 4,
    },
    pnlRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pnlText: {
        fontSize: FontSize.sm,
        fontWeight: '700',
        color: '#16A34A',       // green
    },
    pnlArrow: {
        fontSize: FontSize.sm,
        fontWeight: '700',
        color: '#16A34A',
    },

    // Tab area
    tabContainer: {
        flex: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        overflow: 'hidden',
    },
});
