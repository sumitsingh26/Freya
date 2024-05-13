import {Image, Platform, StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import imagepath from '../images/Images';
import {useNavigation} from '@react-navigation/native';
import {scaleHeight} from '../utils/screenUtils';
import {appColors, appScreens} from '../utils/constant';
import {globalFontStyle} from '../utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setGuest} from '../redux/features/auth/authSlice';
import {useDispatch} from 'react-redux';

const CustomButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const goToAnotherScreen = () => {
    navigation.navigate('SignInScreen'); // Navigate to the 'Login' screen
  };

  const guestLogin = () => {
    dispatch(setGuest());
    navigation.reset({
      index: 0,
      routes: [{name: appScreens.dashboard}],
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={guestLogin}>
        <View
          style={[
            styles.button,
            {
              borderColor: appColors.Primary,
              borderWidth: 1,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Icon
            name="user"
            size={30}
            color={appColors.Primary}
            style={{paddingEnd: 30}}
          />
          <Text
            style={globalFontStyle(18, '600', appColors.Primary).centerText}>
            Continue as Guest
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.button, {backgroundColor: appColors.Secondary}]}>
          <Image
            style={styles.buttonText}
            source={imagepath.continueWithGoogle}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('tapped')}>
        <View style={styles.button}>
          <Image
            style={styles.buttonText}
            source={imagepath.continueWithApple}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            {
              borderColor: appColors.Primary,
              borderWidth: 1,
              backgroundColor: 'white',
            },
          ]}>
          <Image
            style={styles.buttonText}
            source={imagepath.continueWithEmail}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonGoogle: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    // paddingHorizontal: 10,
    backgroundColor: '#DED0B6',
  },
  button: {
    borderRadius: 8,
    backgroundColor: appColors.Primary,
    height: scaleHeight(45),
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonEmail: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#607274',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  buttonText: {
    alignSelf: 'center',
  },
  buttonGoogleTop: {
    // marginTop: 8,
  },
  buttonAppleTop: {
    marginTop: 10,
  },
  buttonEmailTop: {
    marginTop: 15,
  },
});
