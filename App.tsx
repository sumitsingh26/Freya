import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import SplashScreen from './src/screens/SplashScreen';
import ChooseSignUpMethod from './src/screens/ChooseSignUpMethod';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import OtpEmailScreen from './src/screens/OtpEmailScreen';
import OtpMobileScreen from './src/screens/OtpMobileScreen';
import Dashboard from './src/screens/Dashboard';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChooseSignUpMethod" component={ChooseSignUpMethod} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OtpEmailScreen" component={OtpEmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OtpMobileScreen" component={OtpMobileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />

      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
};

export default App;