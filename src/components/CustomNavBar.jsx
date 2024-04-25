import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import imagepath from '../images/Images';
import { useNavigation } from '@react-navigation/native';
import { appColors } from '../utils/constant';
import { useTranslation } from 'react-i18next';

const CustomNavBar = ({ isFirstScreen }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const SearchBar = () => {
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder={t('search')}
                    placeholderTextColor={appColors.TextPrimary}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                {!isFirstScreen ?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 50, height: 50, marginHorizontal: 10 }}
                            source={imagepath.backButtonImage}
                            marginLeft={true}
                        />
                    </TouchableOpacity> : <SearchBar />
                }
                <TouchableOpacity onPress={() => navigation.navigate('MyProfile')} style={styles.button}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={imagepath.profileImage}
                    />
                </TouchableOpacity>
            </View>

        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginBottom: 10,
    },
    button: {
        borderColor: 'black',
    },
    searchContainer: {
        backgroundColor: '#607274',
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

export default CustomNavBar;
