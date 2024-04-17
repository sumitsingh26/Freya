import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagepath from '../images/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appKeys, appScreens} from '../utils/constant';
import {getStoredLocal} from '../utils/helperFunctions';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise(resolve => setTimeout(resolve, 4000));
      const data = await AsyncStorage.getItem(appKeys.accessToken);
      {
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
