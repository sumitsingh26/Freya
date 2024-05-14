import React, { useState, useEffect, useRef } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Animated, Text } from 'react-native';
import { appColors } from '../utils/constant';
import { AppExtraButtons } from './AppButton';
import { scaleHeight } from '../utils/screenUtils';
import { BlurView } from '@react-native-community/blur';
import { globalFontStyle } from '../utils/styles';

const { width } = Dimensions.get('window');

const PaginationDots = ({ activeIndex, length }) => (
    <View style={styles.paginationContainer}>
        {Array.from({ length }, (_, i) => (
            <Animated.View
                key={i}
                style={[styles.paginationDot, {
                    backgroundColor: i === activeIndex ? appColors.Primary : appColors.Secondary,
                }]}
            />
        ))}
    </View>
);

const AppImageSlider = ({ slides, extraButtons, showPagination }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(newIndex);
            flatListRef.current.scrollToIndex({ index: newIndex });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

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
                    const newIndex = Math.round(
                        event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
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
            {showPagination && <PaginationDots activeIndex={currentIndex} length={slides.length} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 5,
        height: scaleHeight(200)
    },
    image: {
        width: width - 30,
        height: '100%',
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