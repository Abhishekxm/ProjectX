import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors, Spacing, FontSize } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Heart, MessageCircle, Share2, Plus, MoreHorizontal } from 'lucide-react-native';

const MOCK_POSTS = [
    {
        id: 1,
        user: 'Rahul Sharma',
        handle: '@rahul_trading',
        content: 'Crude Oil breaking out of the resistance zone! 🚀 Watch out for 6500 levels. #CrudeOil #Trading',
        tags: ['#CrudeOil', '#Trading'],
        likes: 245,
        comments: 42,
        time: '2h ago',
    },
    {
        id: 2,
        user: 'Priya Singh',
        handle: '@priya_invest',
        content: 'Just started my SIP in Axis Bluechip Fund. Consistency is key! 💯 #MutualFunds #Investing',
        tags: ['#MutualFunds', '#Investing'],
        likes: 890,
        comments: 156,
        time: '4h ago',
    },
];

export const SocialBuzzTab = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.trendingSection}>
                    <Text style={styles.sectionTitle}>Trending Topics</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsScroll}>
                        {['#Gold', '#Nifty50', '#Budget2024', '#Crypto', '#Sensex'].map((tag, index) => (
                            <TouchableOpacity key={index} style={styles.tagBadge}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {MOCK_POSTS.map((post) => (
                    <Card key={post.id} style={styles.postCard}>
                        <View style={styles.postHeader}>
                            <View style={styles.userInfo}>
                                <View style={styles.avatar}>
                                    <Text style={styles.avatarText}>{post.user[0]}</Text>
                                </View>
                                <View>
                                    <Text style={styles.userName}>{post.user}</Text>
                                    <Text style={styles.userHandle}>{post.handle} • {post.time}</Text>
                                </View>
                            </View>
                            <MoreHorizontal size={20} color={Colors.gray} />
                        </View>

                        <Text style={styles.postContent}>{post.content}</Text>

                        <View style={styles.postActions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Heart size={20} color={Colors.gray} />
                                <Text style={styles.actionText}>{post.likes}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MessageCircle size={20} color={Colors.gray} />
                                <Text style={styles.actionText}>{post.comments}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <Share2 size={20} color={Colors.gray} />
                            </TouchableOpacity>
                        </View>
                    </Card>
                ))}
                <View style={styles.spacer} />
            </ScrollView>

            <TouchableOpacity style={styles.fab}>
                <Plus size={24} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    trendingSection: {
        padding: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    sectionTitle: {
        fontSize: FontSize.sm,
        fontWeight: '600',
        color: Colors.gray,
        marginBottom: Spacing.sm,
    },
    tagsScroll: {
        flexDirection: 'row',
    },
    tagBadge: {
        backgroundColor: Colors.light,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xs,
        borderRadius: 16,
        marginRight: Spacing.sm,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    tagText: {
        color: Colors.primary,
        fontWeight: '500',
        fontSize: FontSize.sm,
    },
    postCard: {
        marginHorizontal: 0,
        marginTop: Spacing.sm,
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        borderRadius: 0,
        shadowOpacity: 0, // Remove shadow for flat list look
        elevation: 0,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.sm,
    },
    avatarText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: FontSize.md,
    },
    userName: {
        fontWeight: 'bold',
        color: Colors.text,
        fontSize: FontSize.md,
    },
    userHandle: {
        color: Colors.gray,
        fontSize: FontSize.sm,
    },
    postContent: {
        fontSize: FontSize.md,
        color: Colors.text,
        lineHeight: 22,
        marginBottom: Spacing.md,
    },
    postActions: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: Colors.grayLight,
        paddingTop: Spacing.sm,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Spacing.xl,
    },
    actionText: {
        marginLeft: 6,
        color: Colors.gray,
        fontSize: FontSize.sm,
    },
    fab: {
        position: 'absolute',
        bottom: Spacing.lg,
        right: Spacing.lg,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    spacer: {
        height: 80,
    }
});
