import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { CommodityCard } from '../../components/CommodityCard';
import { CategoryPill } from '../../components/CategoryPill';
import { LockedCard } from '../../components/LockedCard';
import { Spacing, FontSize } from '../../theme/theme';

// ─── Mock Data ────────────────────────────────────────────────────────────────

const TRENDING_COMMODITIES = [
    {
        id: '1',
        icon: '🛢️',
        name: 'Crude Oil',
        price: '6,234',
        change: '2.4%',
        isUp: true,
        sparkData: [42, 44, 43, 46, 45, 48, 50, 49, 52, 55],
    },
    {
        id: '2',
        icon: '🥇',
        name: 'Gold',
        price: '61,450',
        change: '0.8%',
        isUp: true,
        sparkData: [60, 61, 59, 62, 63, 61, 64, 63, 65, 66],
    },
    {
        id: '3',
        icon: '🥈',
        name: 'Silver',
        price: '74,230',
        change: '1.2%',
        isUp: false,
        sparkData: [80, 78, 76, 77, 74, 75, 73, 74, 72, 71],
    },
    {
        id: '4',
        icon: '🔥',
        name: 'Natural Gas',
        price: '245',
        change: '3.1%',
        isUp: true,
        sparkData: [20, 22, 21, 24, 23, 26, 27, 25, 28, 30],
    },
];

const CATEGORIES = [
    { id: '1', label: 'Metals', icon: '⛏️', bgColor: '#EAD9FF', textColor: '#6B3FA0' },
    { id: '2', label: 'Energy', icon: '🔥', bgColor: '#FFE4C8', textColor: '#C0591A' },
    { id: '3', label: 'Agriculture', icon: '🌿', bgColor: '#D4F5E3', textColor: '#1A7A45' },
];

const COMING_SOON = [
    { id: '1', label: 'Stocks', icon: '📈' },
    { id: '2', label: 'ETFs', icon: '📊' },
    { id: '3', label: 'International\nMarkets', icon: '🌐' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const CommoditiesTab = () => {
    const [activeCommodityId, setActiveCommodityId] = useState('1');

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            {/* ── Trending Commodities ── */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Trending Commodities</Text>
                <FlatList
                    data={TRENDING_COMMODITIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item }) => (
                        <CommodityCard
                            icon={item.icon}
                            name={item.name}
                            price={item.price}
                            change={item.change}
                            isUp={item.isUp}
                            sparkData={item.sparkData}
                            isActive={item.id === activeCommodityId}
                            onPress={() => setActiveCommodityId(item.id)}
                        />
                    )}
                />
            </View>

            {/* ── F&O Section ── */}
            <View style={styles.section}>
                <View style={styles.foCard}>
                    <Text style={styles.foHeaderText}>F&O</Text>
                    <View style={styles.foTilesRow}>
                        {/* Futures tile */}
                        <TouchableOpacity style={styles.foTile} activeOpacity={0.8}>
                            <View style={[styles.foTileIcon, { backgroundColor: '#EEF3FF' }]}>
                                <Text style={styles.foTileEmoji}>📊</Text>
                            </View>
                            <Text style={styles.foTileLabel}>Futures</Text>
                        </TouchableOpacity>

                        {/* divider */}
                        <View style={styles.foTileDivider} />

                        {/* Options tile */}
                        <TouchableOpacity style={styles.foTile} activeOpacity={0.8}>
                            <View style={[styles.foTileIcon, { backgroundColor: '#FFF5EE' }]}>
                                <Text style={styles.foTileEmoji}>🥧</Text>
                            </View>
                            <Text style={styles.foTileLabel}>Options</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* ── Categories ── */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {CATEGORIES.map(cat => (
                        <CategoryPill
                            key={cat.id}
                            label={cat.label}
                            icon={cat.icon}
                            bgColor={cat.bgColor}
                            textColor={cat.textColor}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* ── Coming Soon ── */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Coming Soon</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {COMING_SOON.map(item => (
                        <LockedCard key={item.id} label={item.label} icon={item.icon} />
                    ))}
                </ScrollView>
            </View>

            {/* Bottom spacer for tab bar */}
            <View style={styles.bottomSpacer} />
        </ScrollView>
    );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F5FF',
    },
    content: {
        paddingTop: Spacing.md,
    },
    section: {
        marginBottom: Spacing.md,
        paddingHorizontal: Spacing.md,
    },
    sectionTitle: {
        fontSize: FontSize.md,
        fontWeight: '700',
        color: '#1A1A2E',
        marginBottom: Spacing.sm + 2,
    },
    horizontalList: {
        paddingRight: Spacing.md,
    },

    // ── F&O ──
    foCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: Spacing.md,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    foHeaderText: {
        fontSize: FontSize.lg,
        fontWeight: '700',
        color: '#1A1A2E',
        marginBottom: Spacing.sm + 4,
    },
    foTilesRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    foTile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.sm,
        gap: 10,
    },
    foTileIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    foTileEmoji: {
        fontSize: 22,
    },
    foTileLabel: {
        fontSize: FontSize.md,
        fontWeight: '600',
        color: '#1A1A2E',
    },
    foTileDivider: {
        width: 1,
        height: 40,
        backgroundColor: '#EFEFEF',
        marginHorizontal: Spacing.xs,
    },

    bottomSpacer: {
        height: 90,
    },
});
