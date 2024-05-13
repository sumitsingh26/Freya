import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppKeyBoardAvoidingView from '../components/AppKeyBoardAvoidingView';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {appColors, appScreens} from '../utils/constant';
import AppLoader from '../components/AppLoader';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setUser} from '../redux/features/auth/authSlice';
import {LoadingType} from '../services/api/constant';
import {useTranslation} from 'react-i18next';
import {validateEmail, validatePassword} from '../utils/validationFunctions';
import {globalFontStyle} from '../utils/styles';

const SignInScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('ranjansumit0000@gmail.com');
  const [password, setPassword] = useState('');
  const [showErrorInField, setShowErrorInField] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = async () => {
    if (
      validateEmail(email, t('Please Enter Valid Email')) &&
      validatePassword(
        password,
        t('Password must contain at least 8 character and 1 special character'),
      )
    ) {
      setShowErrorInField(false);
      let params = {
        email: email,
        password: password,
      };
      dispatch(loginUser(params))
        .unwrap()
        .then(response => {
          console.log({response});
          dispatch(setUser(response));
          // navigation.navigate(appScreens.dashboard);
          navigation.reset({
            index: 0,
            routes: [{name: appScreens.dashboard}],
          });
        })
        .catch(error => {});
    } else {
      setShowErrorInField(true);
    }
  };

  return (
    <AppKeyBoardAvoidingView imageBackground={true}>
      <View style={styles.rootContainer}>
        <Text style={styles.loginTxtStyle}>{t('login')}</Text>
        <AppTextInput
          value={email}
          required
          text={t('e_mail')}
          placeHolder={t('Please Enter Email')}
          onChangeText={setEmail}
          errorMessage={t('Please Enter Valid Email')}
          showError={showErrorInField && !validateEmail(email, '')}
        />

        <AppTextInput
          value={password}
          required
          text={t('password')}
          placeHolder={t('Please Enter Password')}
          onChangeText={setPassword}
          isPassword
          errorMessage={t(
            'Password must contain at least 8 character and 1 special character',
          )}
          showError={showErrorInField && !validatePassword(password, '')}
        />

        <AppButton title={t('Sign in')} primary click={handleSubmit} />
        <Text style={styles.text1}>
          {t(`Don't have an account?`)}{' '}
          <Text
            style={styles.underlineText}
            onPress={() => navigation.navigate(appScreens.signup)}>
            {t('sign_up')}
          </Text>
          <Text style={styles.text1}> {t('here')}</Text>
        </Text>
        {loading === LoadingType.pending ? (
          <AppLoader openModal={true} />
        ) : null}
      </View>
    </AppKeyBoardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  loginTxtStyle: {
    ...globalFontStyle(28, '600', appColors.TextPrimary).centerText,
  },
  text1: {
    ...globalFontStyle(14, '400', appColors.Text).centerText,
  },
  underlineText: {
    textDecorationLine: 'underline',
    ...globalFontStyle(14, '400', appColors.Primary).centerText,
  },
});
