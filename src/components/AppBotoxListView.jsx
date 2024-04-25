import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Pressable } from 'react-native';
import { appColors } from '../utils/constant';
import { scaleFontSize, scaleHeight, scaleSize } from '../utils/screenUtils';
import imagepath from '../images/Images';
import { useTranslation } from 'react-i18next';

const AppBotoxListView = ({ name, iconSource, data, isNearMeBotox, onPress }) => {
    const { t } = useTranslation()
    const renderBotoxView = ({ item, index }) => {

        return (
            <Pressable
                onPress={onPress ? onPress : null}
                style={[styles.botoxContainer, isNearMeBotox ? { borderWidth: 10, borderColor: appColors.TextPrimary, borderRadius: 15 } : null]}>
                <Image source={item.image} style={styles.botoxImage} />
                <View style={styles.botoxFooter}>
                    <View style={styles.botoxTitle} >
                        <Text style={styles.titleText} numberOfLines={2}>{item?.clinic_name}</Text>
                    </View>
                    <View style={styles.botoxClients} >
                        <Text style={styles.values}>{item?.clients}</Text>
                        <Text style={styles.valueName} numberOfLines={1}>{t('Clients')}</Text>
                    </View>
                    <View style={styles.botoxRating} >
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.values}>{item?.rating}</Text>
                            <Image
                                style={{ width: 11, height: 11, marginLeft: 5 }}
                                source={imagepath.ratingStarImage}
                            />
                        </View>
                        <Text style={styles.valueName} numberOfLines={1}>{item?.reviewTxt} {t('reviews')}</Text>
                    </View>
                </View>
            </Pressable >
        )
    };

    return (
        <ImageBackground source={isNearMeBotox ? imagepath.googleMapImage : null} style={[styles.main]}>
            <View style={styles.container}>
                <View style={styles.leftContent}>
                    <Text style={styles.name}>{name}</Text>
                    {iconSource && <Image source={iconSource} style={styles.icon} />}
                </View>
                <Text style={[styles.viewMoreText, isNearMeBotox && { color: appColors.Primary }]}>View More</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderBotoxView}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                initialNumToRender={5}
                contentContainerStyle={{ paddingEnd: 28, marginBottom: isNearMeBotox ? 20 : 0 }}
            />
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    main: {
        paddingVertical: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: 25,
        padding: 5,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 42,
        height: 22,
        marginLeft: 10,
    },
    name: {
        fontSize: scaleFontSize(16),
        fontWeight: '600',
        lineHeight: scaleHeight(27),
        color: appColors.Primary
    },
    viewMoreText: {
        color: appColors.Secondary,
        fontWeight: 'bold',
        fontSize: scaleFontSize(10)
    },
    botoxContainer: {
        width: scaleSize(228),
        backgroundColor: appColors.Secondary,
        marginStart: scaleSize(28),
        borderRadius: scaleSize(10),
        overflow: 'hidden',
    },
    botoxImage: {
        width: '100%',
        height: scaleHeight(120)
    },
    botoxFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 10,
        height: 50
    },
    botoxTitle: {
        width: '45%',
        marginRight: '2.5%', // Margin between views
        justifyContent: 'center',
        height: '100%'
    },
    botoxClients: {
        flex: 1, // Take remaining space
        marginRight: '2.5%', // Margin between views
        height: '100%',
        justifyContent: 'center',
    },
    botoxRating: {
        flex: 1.5, // Take remaining space
        height: '100%',
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: '600',
        fontSize: scaleFontSize(13),
        color: appColors.TextPrimary,
        textAlign: 'left',
    },
    values: {
        color: appColors.TextPrimary, textAlign: 'center',
        fontWeight: 600,
        fontSize: scaleFontSize(12)
    },
    valueName: {
        color: appColors.Primary, textAlign: 'center',
        fontWeight: 400,
        fontSize: scaleFontSize(10)
    }
});

export default AppBotoxListView;
