import React, { useState, useEffect, useRef } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Animated, Text } from 'react-native';
import { appColors } from '../utils/constant';
import { AppExtraButtons } from './AppButton';
import { scaleHeight } from '../utils/screenUtils';
import { BlurView } from '@react-native-community/blur';
import { globalFontStyle } from '../utils/styles';

const { width } = Dimensions.get('window');

const AppImageSlider = ({ slides, extraButtons, showPagination }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
            flatListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const pagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {slides.map((_, index) => (
                    <Animated.View
                        key={index}
                        style={[styles.paginationDot, {
                            backgroundColor: index === currentIndex ? appColors.Primary : appColors.Secondary,
                        }]}
                    />
                ))}
            </View >
        );
    };

    return (
        <View >
            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={item.image} style={styles.image} />
                )}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.floor(
                        event.nativeEvent.contentOffset.x / width
                    );
                    setCurrentIndex(newIndex);
                }}
                bounces={false}
                style={styles.container}
            />
            {!showPagination &&
                <BlurView
                    style={{ paddingHorizontal: 15, padding: 10, position: 'absolute', right: 15, bottom: 15, borderRadius: 5 }}
                    blurType='light'
                >
                    <Text style={globalFontStyle(14, '300', appColors.TextPrimary).centerText}>{`${currentIndex} / ${slides?.length}`} Photos</Text>
                </BlurView>}
            {extraButtons && <AppExtraButtons ButtonList={extraButtons} />}
            {showPagination && pagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginHorizontal: 25,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5
    },
    image: {
        width: width,
        height: scaleHeight(244),
        resizeMode: 'cover',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 5
    },
});

export default AppImageSlider;