import React, { useState, useEffect, useRef } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Animated } from 'react-native';
import { appColors } from '../utils/constant';

const { width } = Dimensions.get('window');

const AppImageSlider = ({ slides }) => {
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
                        style={[styles.paginationDot, { opacity: index === currentIndex ? 1 : 0.3 }]}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={{ marginVertical: 10 }}>
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
            {/* {pagination()} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: width - 30,
        height: 200, // Adjust height as needed
        resizeMode: 'cover',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor: appColors.Primary,
    },
});

export default AppImageSlider;