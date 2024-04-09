import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagepath from '../images/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();

  useEffect(() => {
    // getData();
    // Simulate some asynchronous task (e.g., fetching data)
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise(resolve => setTimeout(resolve, 4000));
      const data = await AsyncStorage.getItem('isLoggedIn');
      // Navigate to the Home screen after the splash screen
      {data === "true" ? navigation.replace('Dashboard') : navigation.replace('ChooseSignUpMethod')}
    };

    fetchData();
  }, [navigation]);
  return (
    <View>
    <Image style={{width:"100%",height:"100%"}} resizeMode={"cover"} source={imagepath.splash}/>
   </View>
  )
}

export default SplashScreen

// const styles = StyleSheet.create({})