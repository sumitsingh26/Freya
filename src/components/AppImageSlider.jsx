import React, { useState } from 'react';
import {
    View, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions, Text
} from 'react-native';

const AppImageSlider = ({slides}) => {

    const { width } = Dimensions.get('window');
    const height = width * 0.5;

    const [active, setActive] = useState(0);

    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{ margin : 15 , height , borderRadius : 10}}>
                {slides.map((data, index) => (
                    <Image
                        key={index}
                        source={data?.image}
                        style={{ width, height, resizeMode: 'cover' }}
                        resizeMode='center'
                    />
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {slides.map((i, k) => (
                    <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        bottom : 10
    },
    dot: {
        color: '#888',
        fontSize: 50,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 50,
    },
});

export default AppImageSlider;