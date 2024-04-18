import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagepath from '../images/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appKeys, appScreens} from '../utils/constant';
import {getStoredLocal} from '../utils/helperFunctions';
import '../services/i18n/i18n';
import {changeLanguage} from '../services/i18n/i18n';
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));
      const data = await getStoredLocal(appKeys.accessToken);
      const language = await getStoredLocal(appKeys.language);
      {
        changeLanguage(language);
        data
          ? navigation.replace(appScreens.dashboard)
          : navigation.replace(appScreens.signupMethod);
      }
    };
    fetchData();
  }, [navigation]);
  return (
    <View>
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMode={'cover'}
        source={imagepath.splash}
      />
    </View>
  );
};

export default SplashScreen;

// const styles = StyleSheet.create({})
