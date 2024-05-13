import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { scaleHeight, scaleSize } from '../utils/screenUtils'
const AppFlag = ({ flag, backColor }) => {
    return (
        <View style={[backColor && { backgroundColor: backColor }, { marginEnd: 10 }]}>
            <Image source={flag} style={styles.flag} />
        </View>
    )
}

export default AppFlag

const styles = StyleSheet.create({
    flag: {
        height: scaleHeight(15),
        width: scaleSize(20)
    }
})