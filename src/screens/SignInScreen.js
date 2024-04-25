import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomKeyBoardAvoidingView from '../components/CustomKeyBoardAvoidingView';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {appEndPoints, appKeys, appScreens, emailRegex} from '../utils/constant';
import {setStoredValue, showToast} from '../utils/helperFunctions';
import AppLoader from '../components/AppLoader';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setUser} from '../redux/features/auth/authSlice';
import {LoadingType} from '../services/api/constant';
import {useTranslation} from 'react-i18next';

const SignInScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('ranjansumit0000@gmail.com');
  const [password, setPassword] = useState('12345');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      showToast({errorMessage: t('Please Enter Valid Email'), type: 'error'});
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length < 3) {
      showToast({
        errorMessage: t('Please Enter Valid Password'),
        type: 'error',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateEmail() && validatePassword()) {
      let params = {
        email: email,
        password: password,
      };
      dispatch(loginUser(params))
        .unwrap()
        .then(response => {
          dispatch(setUser(response));
          navigation.navigate(appScreens.dashboard);
        })
        .catch(error => {});
    }
  };

  return (
    <CustomKeyBoardAvoidingView imageBackground={true}>
      <View style={styles.rootContainer}>
        <Text style={styles.loginTxtStyle}>{t('login')}</Text>
        <AppTextInput
          value={email}
          required
          text={t('e_mail')}
          placeHolder={t('Please Enter Email')}
          onChangeText={setEmail}
        />

        <AppTextInput
          value={password}
          required
          text={t('password')}
          placeHolder={t('Please Enter Password')}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AppButton
          title={t('send_verification_code')}
          primary
          click={handleSubmit}
        />
      </View>
      <View style={styles.text2}>
        <View style={styles.containerTextRow2}>
          <Text style={styles.text1}>{t(`Don't have an account?`)}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(appScreens.signup)}>
            <Text style={styles.underlineText}>{t('sign_up')}</Text>
          </TouchableOpacity>
          <Text style={styles.text1}> {t('here')}</Text>
        </View>
      </View>
      {loading === LoadingType.pending ? <AppLoader openModal={true} /> : null}
    </CustomKeyBoardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: '8%',
  },
  loginTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
  emailTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  textInputStyle: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
  },
  buttonViewStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#607274',
    borderRadius: 6,
    marginTop: 50,
    justifyContent: 'center',
  },
  buttonTxtStyle: {
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  containerTextRow2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 14,
    color: '#494949',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  underlineText: {
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#607274',
    marginLeft: 3,
  },
  invalidInput: {
    borderColor: 'red',
    borderRadius: 6,
    borderWidth: 1,
  },
});
