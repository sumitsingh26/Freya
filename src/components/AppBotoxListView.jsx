import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Pressable } from 'react-native';
import { appColors, appScreens } from '../utils/constant';
import { scaleFontSize, scaleHeight, scaleSize } from '../utils/screenUtils';
import imagepath from '../images/Images';
import { useTranslation } from 'react-i18next';
import { globalStyle } from '../utils/styles';
import { useNavigation } from '@react-navigation/native';

export const AppRatingTextView = ({ item, primary, textStyle, numberStyle }) => {
    const { t } = useTranslation()
    return (
        <View style={[globalStyle.rowCenterContent, numberStyle && { marginHorizontal: 10 }]}>
            <View style={styles.botoxClients} >
                <Text style={[styles.values, numberStyle && { ...numberStyle }]} numberOfLines={1}>{item?.clients}</Text>
                <Text style={[styles.valueName, textStyle && { ...textStyle }]} numberOfLines={1}>{t('Clients')}</Text>
            </View>
            <View style={styles.botoxRating} >
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={[styles.values, numberStyle && { ...numberStyle }]}>{item?.rating}</Text>
                    <Image
                        style={{ width: numberStyle ? 20 : 11, aspectRatio: 1 / 1, marginLeft: 5 }}
                        source={imagepath.ratingStarImage}
                    />
                </View>
                <Text style={[styles.valueName, textStyle && { ...textStyle }]} numberOfLines={1}>{item?.reviewTxt} {t('reviews')}</Text>
            </View>
        </View >
    )
}

const AppBotoxListView = ({ name, iconSource, data, isNearMeBotox }) => {
    const { t } = useTranslation()
    const navigation = useNavigation()
    const renderBotoxView = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => navigation.navigate(appScreens.clinicDetails)}
                style={[styles.botoxContainer, isNearMeBotox ? { borderWidth: 10, borderColor: appColors.TextPrimary, borderRadius: 15 } : null]}>
                <Image source={item.image} style={styles.botoxImage} />
                <View style={styles.botoxFooter}>
                    <View style={styles.botoxTitle} >
                        <Text style={styles.titleText} numberOfLines={2}>{item?.clinic_name}</Text>
                    </View>
                    <AppRatingTextView item={item} />
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
                <Text style={styles.viewMoreText} onPress={() => navigation.navigate(appScreens.viewAllClinics)}>View More</Text>
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
        marginHorizontal: 15,
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
        color: appColors.Primary,
        fontWeight: 'bold',
        fontSize: scaleFontSize(10)
    },
    botoxContainer: {
        width: scaleSize(228),
        backgroundColor: appColors.Secondary,
        marginStart: scaleSize(15),
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
        flex: 1,
        width: '45%',
        marginRight: '2.5%', // Margin between views
        justifyContent: 'center',
        height: '100%'
    },
    botoxClients: {
        flex: 1.2, // Take remaining space
        marginRight: '2.5%', // Margin between views
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botoxRating: {
        flex: 1.5, // Take remaining space
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
