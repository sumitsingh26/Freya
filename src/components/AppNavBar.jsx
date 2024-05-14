import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Image, Text, StatusBar, Platform } from 'react-native';
import imagepath from '../images/Images';
import { useNavigation } from '@react-navigation/native';
import { appColors } from '../utils/constant';
import { useTranslation } from 'react-i18next';
import AppSearchBar from './AppSearchBar';
import { useSelector } from 'react-redux';
import { hasNotch } from '../utils/screenUtils';

const AppNavBar = ({ isFirstScreen, searchIncluded, isProfile }) => {
    const navigation = useNavigation();
    const { user } = useSelector(state => state.auth);
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.safeAreaView}>
                <View style={styles.buttonsContainer}>
                    {searchIncluded ? <AppSearchBar /> :
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={{ width: 50, height: 50, marginHorizontal: 10 }}
                                source={imagepath.backButtonImage}
                                marginLeft={true}
                            />
                        </TouchableOpacity>
                    }
                    {user &&
                        !isProfile &&
                        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')} style={styles.button}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={imagepath.profileImage}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </View >
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        zIndex: 999
    },
    safeAreaView: {
        paddingTop: hasNotch() ? StatusBar.currentHeight : 0,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        borderColor: 'black',
    },
    searchContainer: {
        backgroundColor: appColors.Primary,
        borderRadius: 40,
        // padding: 5,
        flex: 1,
        marginEnd: 10,
    },
    searchInput: {
        borderRadius: 20,
        paddingLeft: 15,
        textAlign: 'center',
        flex: 1,
        color: appColors.TextPrimary,
        height: '100%'
    },
});

export default AppNavBar;
