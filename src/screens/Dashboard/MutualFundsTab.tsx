import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react-native';

const RECOMMENDED_FUNDS = [
    { name: 'Axis Bluechip Fund', return: '14.5%', risk: 'High' },
    { name: 'SBI Small Cap Fund', return: '22.1%', risk: 'Very High' },
    { name: 'HDFC Balanced Advantage', return: '11.2%', risk: 'Medium' },
];

export const MutualFundsTab = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Card style={styles.sipCard}>
                <View style={styles.sipContent}>
                    <View>
                        <Text style={styles.sipTitle}>Start a SIP today</Text>
                        <Text style={styles.sipSubtitle}>Build wealth with small investments</Text>
                    </View>
                    <Zap size={32} color={Colors.warning} />
                </View>
                <Button title="Start SIP" onPress={() => { }} style={styles.sipButton} />
            </Card>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recommended Funds</Text>
                {RECOMMENDED_FUNDS.map((fund, index) => (
                    <Card key={index} style={styles.fundCard}>
                        <View style={styles.fundHeader}>
                            <View style={styles.fundIcon}>
                                <Text style={styles.fundIconText}>{fund.name[0]}</Text>
                            </View>
                            <View style={styles.fundInfo}>
                                <Text style={styles.fundName}>{fund.name}</Text>
                                <View style={styles.badges}>
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>{fund.risk}</Text>
                                    </View>
                                    <View style={[styles.badge, styles.badgeOutline]}>
                                        <Text style={styles.badgeTextOutline}>Equity</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.fundReturn}>
                                <Text style={styles.returnVal}>{fund.return}</Text>
                                <Text style={styles.returnLabel}>3Y Returns</Text>
                            </View>
                        </View>
                    </Card>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Explore by Category</Text>
                <View style={styles.grid}>
                    {[
                        { title: 'High Return', icon: <TrendingUp color={Colors.success} size={24} /> },
                        { title: 'Tax Saving', icon: <ShieldCheck color={Colors.primary} size={24} /> },
                        { title: 'Low Risk', icon: <ShieldCheck color={Colors.info} size={24} /> },
                        { title: 'Large Cap', icon: <TrendingUp color={Colors.secondary} size={24} /> },
                    ].map((item, index) => (
                        <TouchableOpacity key={index} style={styles.gridItem}>
                            <Card style={styles.gridCard}>
                                {item.icon}
                                <Text style={styles.gridTitle}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    section: {
        marginBottom: Spacing.lg,
        paddingHorizontal: Spacing.md,
    },
    sectionTitle: {
        fontSize: FontSize.lg,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: Spacing.md,
    },
    sipCard: {
        margin: Spacing.md,
        backgroundColor: Colors.secondary,
    },
    sipContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.md,
    },
    sipTitle: {
        color: Colors.white,
        fontSize: FontSize.lg,
        fontWeight: 'bold',
    },
    sipSubtitle: {
        color: Colors.grayLight,
        fontSize: FontSize.sm,
        marginTop: 4,
    },
    sipButton: {
        backgroundColor: Colors.white,
        height: 40,
    },
    fundCard: {
        padding: Spacing.md,
        marginBottom: Spacing.sm,
    },
    fundHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fundIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.md,
    },
    fundIconText: {
        fontSize: FontSize.lg,
        fontWeight: 'bold',
        color: Colors.text,
    },
    fundInfo: {
        flex: 1,
    },
    fundName: {
        fontSize: FontSize.md,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 4,
    },
    badges: {
        flexDirection: 'row',
        gap: 4,
    },
    badge: {
        backgroundColor: Colors.light,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeOutline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    badgeText: {
        fontSize: 10,
        color: Colors.text,
    },
    badgeTextOutline: {
        fontSize: 10,
        color: Colors.gray,
    },
    fundReturn: {
        alignItems: 'flex-end',
    },
    returnVal: {
        fontSize: FontSize.md,
        fontWeight: 'bold',
        color: Colors.success,
    },
    returnLabel: {
        fontSize: 10,
        color: Colors.gray,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -Spacing.xs,
    },
    gridItem: {
        width: '50%',
        padding: Spacing.xs,
    },
    gridCard: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Spacing.lg,
        marginBottom: 0,
    },
    gridTitle: {
        marginTop: Spacing.sm,
        fontWeight: '500',
        color: Colors.text,
    },
});
