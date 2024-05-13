import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import imagepath from '../images/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AppKeyBoardAvoidingView = ({imageBackground, children}) => {
  return imageBackground ? (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      resizeMode={'cover'}
      source={imagepath.loginBgImage}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{flex: 1}}>
        {children}
      </KeyboardAwareScrollView>
    </ImageBackground>
  ) : (
    <KeyboardAwareScrollView bounces={false} contentContainerStyle={{flex: 1}}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default AppKeyBoardAvoidingView;

const styles = StyleSheet.create({
  container: {},
});
