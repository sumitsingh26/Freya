import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur'
const AppBlurredOverlay = ({ children }) => {
    return (
        <View style={styles.container}>
            <BlurView
                style={styles.overlay}
                blurType='dark'
            />
            <View style={styles.content}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: Number.MAX_SAFE_INTEGER - 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AppBlurredOverlay;
