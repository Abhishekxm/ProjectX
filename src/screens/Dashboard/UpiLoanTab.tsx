import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Card } from '../../components/Card';
import { QrCode, Send, Wallet, CreditCard, ChevronRight } from 'lucide-react-native';
import { Button } from '../../components/Button';

export const UpiLoanTab = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Card style={styles.balanceCard}>
                <View style={styles.balanceHeader}>
                    <Text style={styles.balanceLabel}>Wallet Balance</Text>
                    <Wallet size={20} color={Colors.white} />
                </View>
                <Text style={styles.balanceAmount}>₹12,450.00</Text>
                <Button
                    title="+ Add Money"
                    onPress={() => { }}
                    style={styles.addMoneyButton}
                    textStyle={{ color: Colors.primary }}
                />
            </Card>

            <View style={styles.actionsGrid}>
                {[
                    { title: 'Scan & Pay', icon: <QrCode size={24} color={Colors.white} />, color: Colors.primary },
                    { title: 'Send Money', icon: <Send size={24} color={Colors.white} />, color: Colors.secondary },
                    { title: 'Pay Bills', icon: <CreditCard size={24} color={Colors.white} />, color: Colors.warning },
                    { title: 'Self Transfer', icon: <Wallet size={24} color={Colors.white} />, color: Colors.success },
                ].map((action, index) => (
                    <TouchableOpacity key={index} style={styles.actionItem}>
                        <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
                            {action.icon}
                        </View>
                        <Text style={styles.actionText}>{action.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Instant Loans</Text>
                <Card style={styles.loanCard}>
                    <View style={styles.loanContent}>
                        <View>
                            <Text style={styles.loanTitle}>Pre-approved Personal Loan</Text>
                            <Text style={styles.loanAmount}>Up to ₹5,00,000</Text>
                            <Text style={styles.loanSubtitle}>No paperwork • Instant credit</Text>
                        </View>
                        <View style={styles.percentBadge}>
                            <Text style={styles.percentText}>12%</Text>
                            <Text style={styles.percentLabel}>p.a.</Text>
                        </View>
                    </View>
                    <Button title="Check Eligibility" onPress={() => { }} />
                </Card>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Transactions</Text>
                {[1, 2, 3].map((i) => (
                    <TouchableOpacity key={i} style={styles.transactionItem}>
                        <View style={styles.transactionLeft}>
                            <View style={styles.transactionIcon}>
                                <Text style={styles.transactionIconText}>S</Text>
                            </View>
                            <View>
                                <Text style={styles.transactionTitle}>Swiggy</Text>
                                <Text style={styles.transactionDate}>Today, 12:30 PM</Text>
                            </View>
                        </View>
                        <Text style={styles.transactionAmount}>- ₹345</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    balanceCard: {
        backgroundColor: Colors.primary,
        margin: Spacing.md,
    },
    balanceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    balanceLabel: {
        color: Colors.white,
        opacity: 0.8,
    },
    balanceAmount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: Spacing.lg,
    },
    addMoneyButton: {
        backgroundColor: Colors.white,
        height: 40,
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
    },
    actionItem: {
        width: '25%',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    actionIcon: {
        width: 50,
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.xs,
    },
    actionText: {
        fontSize: 12,
        color: Colors.text,
        textAlign: 'center',
    },
    section: {
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
    },
    sectionTitle: {
        fontSize: FontSize.lg,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: Spacing.md,
    },
    loanCard: {
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: 'transparent',
    },
    loanContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.md,
    },
    loanTitle: {
        fontSize: FontSize.md,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 4,
    },
    loanAmount: {
        fontSize: FontSize.xl,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    loanSubtitle: {
        fontSize: FontSize.sm,
        color: Colors.success,
    },
    percentBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light,
        borderRadius: 8,
        padding: Spacing.sm,
        height: 60,
        width: 60,
    },
    percentText: {
        fontSize: FontSize.lg,
        fontWeight: 'bold',
        color: Colors.text,
    },
    percentLabel: {
        fontSize: 10,
        color: Colors.gray,
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayLight,
    },
    transactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.grayLight,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.md,
    },
    transactionIconText: {
        fontSize: FontSize.md,
        fontWeight: 'bold',
        color: Colors.gray,
    },
    transactionTitle: {
        fontSize: FontSize.md,
        fontWeight: '500',
        color: Colors.text,
    },
    transactionDate: {
        fontSize: FontSize.xs,
        color: Colors.gray,
    },
    transactionAmount: {
        fontSize: FontSize.md,
        fontWeight: 'bold',
        color: Colors.text,
    },
});
