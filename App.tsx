import 'react-native-devsettings/withAsyncStorage';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import SplashScreen from './src/screens/SplashScreen';
import ChooseSignUpMethod from './src/screens/ChooseSignUpMethod';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import OtpEmailScreen from './src/screens/OtpEmailScreen';
import OtpMobileScreen from './src/screens/OtpMobileScreen';
import Dashboard from './src/screens/Dashboard';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {appScreens} from './src/utils/constant';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={appScreens.splash}>
          <Stack.Screen
            name={appScreens.splash}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appScreens.signupMethod}
            component={ChooseSignUpMethod}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appScreens.signin}
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appScreens.signup}
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appScreens.otpEmail}
            component={OtpEmailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appScreens.otpMobile}
            component={OtpMobileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={appScreens.dashboard}
            component={Dashboard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
