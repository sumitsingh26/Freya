import React from 'react';
import { View, StyleSheet } from 'react-native';

const DashedLine = ({ width, height, color }) => {
    const numberOfDashes = Math.floor(width / 10); // Adjust as needed
    const dashes = Array.from({ length: numberOfDashes }).map((_, index) => (
        <View
            key={index}
            style={{
                width: 5, // Adjust thickness as needed
                height: height,
                backgroundColor: color,
                marginLeft: 5, // Adjust gap between dashes as needed
            }}
        />
    ));

    return (
        <View style={[styles.container, { width, height }]}>
            {dashes}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
});

export default DashedLine;
